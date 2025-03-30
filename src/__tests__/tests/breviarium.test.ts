import {describe, expect, it} from "vitest";
import Breviarium from "@/breviarium.ts";

describe("Breviarium module", () => {
    it("should return content in Laudes", () => {
        const breviarium = new Breviarium();
        const result = breviarium.getLaudes();

        assert(result !== undefined);
    });

    it("properties content ok", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getLaudes();

        assert(result !== undefined);
        expect(result.responsorios.length).to.be.greaterThan(1);
        expect(result.preces_c.length).to.be.greaterThan(1);
        expect(result.s1_a).not.toBeNull();
        expect(result.s1_c).not.toBeNull();
        expect(result.s1_t).not.toBeNull();
    });

    it("invitatory 01/01 first day OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getInvitatorium(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.val).eq(0);
    });

});
