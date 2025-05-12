import {describe, expect, it} from "vitest";
import Breviarium from "@/breviarium.ts";

describe("Breviarium module", () => {
    it("should change date", () => {
        const breviarium = new Breviarium();
        breviarium.setDate(new Date(2025, 0, 15))
        const result = breviarium.getCurrentDate();

        assert(result !== undefined);
        expect(result.getFullYear()).equals(new Date(2025, 0, 15).getFullYear())
    });

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

    it("laudes 01/01 first day OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getLaudes(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
    });

    it("tertia 01/01 OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getTertia(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.primer_salmo_cita.length).to.be.greaterThan(1);
        expect(result.primer_salmo_antifona.length).to.be.greaterThan(1);
        expect(result.primer_salmo_texto.length).to.be.greaterThan(1);
        expect(result.segundo_salmo_cita.length).to.be.greaterThan(1);
        expect(result.segundo_salmo_antifona).eq('');
        expect(result.segundo_salmo_texto.length).to.be.greaterThan(1);
        expect(result.tercer_salmo_cita.length).to.be.greaterThan(1);
        expect(result.tercer_salmo_antifona).eq('');
        expect(result.tercer_salmo_texto.length).to.be.greaterThan(1);
        expect(result.lectura_biblica.length).to.be.greaterThan(1);
        expect(result.lectura_biblica_cita.length).to.be.greaterThan(1);
        expect(result.responsorios[0].length).to.be.greaterThan(1);
        expect(result.oracion_final.length).to.be.greaterThan(1);
    });

    it("sexta 01/01 OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getSexta(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.primer_salmo_cita.length).to.be.greaterThan(1);
        expect(result.primer_salmo_antifona.length).to.be.greaterThan(1);
        expect(result.primer_salmo_texto.length).to.be.greaterThan(1);
        expect(result.segundo_salmo_cita.length).to.be.greaterThan(1);
        expect(result.segundo_salmo_antifona).eq('');
        expect(result.segundo_salmo_texto.length).to.be.greaterThan(1);
        expect(result.tercer_salmo_cita.length).to.be.greaterThan(1);
        expect(result.tercer_salmo_antifona).eq('');
        expect(result.tercer_salmo_texto.length).to.be.greaterThan(1);
        expect(result.lectura_biblica.length).to.be.greaterThan(1);
        expect(result.lectura_biblica_cita.length).to.be.greaterThan(1);
        expect(result.responsorios[0].length).to.be.greaterThan(1);
        expect(result.oracion_final.length).to.be.greaterThan(1);
    });

    it("nona 01/01 OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getNona(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.primer_salmo_cita.length).to.be.greaterThan(1);
        expect(result.primer_salmo_antifona.length).to.be.greaterThan(1);
        expect(result.primer_salmo_texto.length).to.be.greaterThan(1);
        expect(result.segundo_salmo_cita.length).to.be.greaterThan(1);
        expect(result.segundo_salmo_antifona).eq('');
        expect(result.segundo_salmo_texto.length).to.be.greaterThan(1);
        expect(result.tercer_salmo_cita.length).to.be.greaterThan(1);
        expect(result.tercer_salmo_antifona).eq('');
        expect(result.tercer_salmo_texto.length).to.be.greaterThan(1);
        expect(result.lectura_biblica.length).to.be.greaterThan(1);
        expect(result.lectura_biblica_cita.length).to.be.greaterThan(1);
        expect(result.responsorios[0].length).to.be.greaterThan(1);
        expect(result.oracion_final.length).to.be.greaterThan(1);
    });

    it("vesperae 01/01 first day OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getVesperae(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
    });

    it("getInvitatoriumPsalms", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getInvitatoriumPsalms()

        assert(result !== undefined);
        expect(result.length).eq(4); // 4 psalms invitatory
    });

    it("getOfficium", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getOfficium()

        assert(result !== undefined);
    });

    it("getLiturgyInformation", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getLiturgyInformation(
            new Date(2025, 0, 1))
        console.log(result)

        const expected = {
            psaltery_week: 'WEEK_1',
            cycle: 'YEAR_C',
            color: 'WHITE',
            color_hex: '#bdbdbd66'
        }

        assert(result !== undefined);
        expect(result).to.deep.equal(expected);
        expect(expected.psaltery_week).to.be.equal(result.psaltery_week);
        expect(expected.cycle).to.be.equal(result.cycle);
        expect(expected.color).to.be.equal(result.color);
    });

});