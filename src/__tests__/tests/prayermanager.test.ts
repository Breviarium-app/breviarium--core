import {describe, expect, it} from "vitest";
import {PrayerManager} from "@/prayers/prayer-manager.ts";


describe("Prayer Manager module", () => {
    it("should return content in Laudes", () => {
        const prayer = new PrayerManager();
        const result = prayer.getLaudes();

        assert(result !== undefined);
    });

    it("properties content ok", () => {
        const prayer = new PrayerManager();
        const result = prayer.getLaudes();

        assert(result !== undefined);
        expect(result.responsorios.length).to.be.greaterThan(1);
        expect(result.preces_c.length).to.be.greaterThan(1);
        expect(result.s1_a).not.toBeNull();
        expect(result.s1_c).not.toBeNull();
        expect(result.s1_t).not.toBeNull();
        expect(result.s2_a).not.toBeNull();
        expect(result.s2_c).not.toBeNull();
        expect(result.s2_t).not.toBeNull();
        expect(result.s3_a).not.toBeNull();
        expect(result.s3_c).not.toBeNull();
        expect(result.s3_t).not.toBeNull();
        expect(result.lb_c).not.toBeNull();
        expect(result.lb_t).not.toBeNull();
    });

    it("invitatory first day OK", () => {
        const prayer = new PrayerManager();

        const result = prayer.getInvitatorium(new Date(2025,0,1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.val).eq(0);
    });

});
