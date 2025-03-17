import {describe, expect, it} from "vitest";
import Breviarium from "@/breviarium.ts";


const locale = "en-CA"; // Use a consistent locale (YYYY-MM-DD format)

describe("breviarium module", () => {
    it("should return date on create by default", () => {
        const breviarium = new Breviarium();
        const date = breviarium.getCurrentDate();
        assert(date !== undefined && date !== null);
        expect(date).toBeDefined()
        expect(date).not.toBeNull()

    });

    it("should return date on create by default", () => {
        const breviarium = new Breviarium(new Date(2025, 1, 17));
        const date = breviarium.getCurrentDate();

        assert(date !== undefined && date !== null);

        // Format both expected and actual date to a locale-specific string
        const expectedDate = new Date(2025, 1, 17).toLocaleDateString(locale);
        const actualDate = date.toLocaleDateString(locale);
        expect(actualDate).to.equal(expectedDate);
    });


});
