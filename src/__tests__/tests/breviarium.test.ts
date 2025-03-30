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
        expect(result.preces_contenido.length).to.be.greaterThan(1);
        expect(result.primer_salmo_antifona).not.toBeNull();
        expect(result.primer_salmo_cita).not.toBeNull();
        expect(result.primer_salmo_texto).not.toBeNull();
    });

    it("invitatory 01/01 first day OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getInvitatorium(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.val).contains('Celebremos la maternidad de la Virgen María; adoremos a su Hijo Jesucristo, el Señor.');
    });

});