import {describe, expect, it} from "vitest";
import Breviarium, {DATASET_FILE_PATHS, DATASET_SCHEMA_VERSION, loadBundledDataset, loadDataset} from "@/breviarium.ts";
import {readFile} from "node:fs/promises";
import {resolve} from "node:path";

const dbRoot = resolve(__dirname, "../../prayers/db");
const readFromDisk = async (path: string) => JSON.parse(await readFile(resolve(dbRoot, path), "utf-8"));

describe("Dataset", () => {
    it("lists unique files that all exist on disk", async () => {
        expect(new Set(DATASET_FILE_PATHS).size).toBe(DATASET_FILE_PATHS.length);
        for (const path of DATASET_FILE_PATHS) {
            await expect(readFromDisk(path)).resolves.toBeDefined();
        }
    });

    it("loads the bundled dataset", async () => {
        const dataset = await loadBundledDataset();
        expect(dataset.schemaVersion).toBe(DATASET_SCHEMA_VERSION);
        expect(dataset.schedules.laudes.length).toBeGreaterThan(0);
        expect(dataset.completorium).toHaveLength(7);
        expect(dataset.commons.himnos.length).toBeGreaterThan(0);
    });

    it("loads the same dataset from a custom reader (as the app does from device storage)", async () => {
        const fromDisk = await loadDataset(readFromDisk);
        const bundled = await loadBundledDataset();
        expect(fromDisk).toEqual(bundled);
    });

    it("rejects naming the file when one is missing or malformed", async () => {
        await expect(loadDataset(async path => {
            if (path === "all_laudes.json") throw new Error("ENOENT");
            return readFromDisk(path);
        })).rejects.toThrow('"all_laudes.json"');

        await expect(loadDataset(async path =>
            path === "es/commons/himnos.json" ? {not: "an array"} : readFromDisk(path),
        )).rejects.toThrow('"es/commons/himnos.json"');
    });

    it("uses an injected dataset and picks up a swapped one", async () => {
        const date = new Date(2025, 0, 15);
        const original = await loadBundledDataset();
        const breviarium = new Breviarium(date, {dataset: original});
        const before = await breviarium.getLaudes();
        expect(before?.[0].himno).toBeTruthy();

        // New dataset where every hymn text is replaced.
        const patched = {
            ...original,
            commons: {...original.commons, himnos: original.commons.himnos.map(h => ({...h, val: "PATCHED"}))},
        };
        breviarium.setDataset(patched);
        const after = await breviarium.getLaudes();
        expect(after?.[0].himno).toBe("PATCHED");
        // the previous dataset object was not mutated
        expect(original.commons.himnos[0].val).not.toBe("PATCHED");
    });
});
