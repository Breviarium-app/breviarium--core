import {describe, expect, it} from "vitest";
import {PrayerManager} from "@/prayers/prayer-manager.ts";


describe("Prayer Manager module", () => {
    it("should return content in Laudes", () => {
        const prayer = new PrayerManager();
        const result = prayer.getLaudes();

        console.log(result);

        assert(result !== undefined);
    });

    it("properties content ok", () => {
        const prayer = new PrayerManager();
        const result = prayer.getLaudes();

        console.log(result);
        console.log(result?.["_1s_c"])
        assert(result !== undefined);
        expect(result.responsorios.length).to.be.greaterThan(1);
        expect(result.preces_contenido.length).to.be.greaterThan(1);
        expect(result._1s_a).not.toBeNull();
        expect(result._1s_c).not.toBeNull();
        expect(result._1s_t).not.toBeNull();
        expect(result._2s_a).not.toBeNull();
        expect(result._2s_c).not.toBeNull();
        expect(result._2s_t).not.toBeNull();
        expect(result._3s_a).not.toBeNull();
        expect(result._3s_c).not.toBeNull();
        expect(result._3s_t).not.toBeNull();
        expect(result.lb_c).not.toBeNull();
        expect(result.lb_t).not.toBeNull();
    });

});
