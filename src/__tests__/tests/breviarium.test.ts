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
        let result = await breviarium.getLaudes();
        const r1 = result?.[0]

        assert(r1 !== undefined);
        expect(r1.responsorios.length).to.be.greaterThan(1);
        expect(r1.preces_contenido.length).to.be.greaterThan(1);
        expect(r1.primer_salmo_antifona).not.toBeNull();
        expect(r1.primer_salmo_cita).not.toBeNull();
        expect(r1.primer_salmo_texto).not.toBeNull();
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
        await breviarium.getLaudes(new Date(2025, 0, 1)).then(data => {
            assert(data !== undefined);
            expect(data[0].id.length).to.be.greaterThan(1);
            expect(data[0].id).eq('mary_mother_of_god');
        });


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
        expect(result[0].id.length).to.be.greaterThan(1);
        expect(result[0].id).eq('mary_mother_of_god');
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


    it("getEvangelium Cycle A/B/C ok", async () => {
        const breviarium = new Breviarium();

        const result = await breviarium.getEvangelium(new Date(2025, 6, 20));

        assert(result !== undefined);
        expect(result.cycle).eq('YEAR_C');
        expect(result.evangelium_lectiones[0].ref).eq('Lc 10, 38-42: _Marta lo recibió. María ha escogido la parte mejor._')
    });

    it("getEvangelium ANY ok", async () => {
        const breviarium = new Breviarium();

        const result = await breviarium.getEvangelium(new Date(2025, 6, 23));

        assert(result !== undefined);
        expect(result.cycle).eq('ANY');
        expect(result.evangelium_lectiones[0].ref).eq('Jn 15, 1-8: _El que permanece en mí y yo en él, ese da fruto abundante._')
    });

    it("getEvangelium EVEN/ODD", async () => {
        const breviarium = new Breviarium();

        const result = await breviarium.getEvangelium(new Date(2025, 6, 28));
        assert(result !== undefined);
        expect(result.cycle).eq('ODD');
        expect(result.evangelium_lectiones?.length).to.be.greaterThan(0);
        expect(result.evangelium_lectiones[0].ref).eq("Mt 13, 31-35: _El grano de mostaza se hace un arbusto, y vienen los pájaros a anidar en sus ramas._");
    });

    it("getEvangelium 29/07", async () => {
        const breviarium = new Breviarium();

        const result = await breviarium.getEvangelium(new Date(2025, 6, 29));
        assert(result !== undefined);
        expect(result.cycle).eq('MEMORY');
    });

    it("getLaudes should return multiple options if possible", () => {
        // on andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs also possible
        // ordinary_time_24_saturday

        const breviarium = new Breviarium();
        breviarium.getLaudes(new Date(2025, 8, 20)).then(data => {
            assert(data !== undefined);
            assert(data.length == 2);

            assert(data[0].id == 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs');
            assert(data[0].primer_salmo_cita.length > 0);
            assert(data[0].segundo_salmo_texto.length > 0);
            assert(data[0].tercer_salmo_antifona.length > 0);
            assert(data[1].id == 'ordinary_time_24_saturday');
            assert(data[1].primer_salmo_cita.length > 0);
            assert(data[1].segundo_salmo_texto.length > 0);
            assert(data[1].tercer_salmo_antifona.length > 0);
        });

    });
    it("getOfficium should return filled option if memory", () => {
        // on andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs also possible
        // ordinary_time_24_saturday

        const breviarium = new Breviarium();
        breviarium.getOfficium(new Date(2025, 8, 20)).then(data => {
            assert(data !== undefined);

            assert(data.id == 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs');
            assert(data.lectura_biblica_cita_a.length > 1);
            assert(data.lectura_biblica_cita_i.length > 1);
            assert(data.lectura_biblica_cita_p.length > 1);
        });
    });

    it("getTertia should return filled option if memory with partial data", () => {
        // on andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs also possible
        // ordinary_time_24_saturday

        const breviarium = new Breviarium();
        breviarium.getTertia(new Date(2025, 8, 20)).then(data => {
            assert(data !== undefined);

            assert(data.id == 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs');
            assert(data.primer_salmo_cita.length > 0);
            assert(data.segundo_salmo_texto.length > 0);
            assert(data.tercer_salmo_texto.length > 0);
        });
    });
    it("getSexta should return filled option if memory with partial data", () => {
        // on andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs also possible
        // ordinary_time_24_saturday

        const breviarium = new Breviarium();
        breviarium.getSexta(new Date(2025, 8, 20)).then(data => {
            assert(data !== undefined);

            assert(data.id == 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs');
            assert(data.primer_salmo_cita.length > 0);
            assert(data.segundo_salmo_texto.length > 0);
            assert(data.tercer_salmo_texto.length > 0);
        });
    });

    it("getVesperae should return filled option if memory with partial data", () => {
        // on andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs also possible
        // ordinary_time_24_saturday

        const breviarium = new Breviarium();
        breviarium.getVesperae(new Date(2025, 8, 20)).then(data => {
            assert(data !== undefined);
            assert(data[0].id == 'andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs');
            for (let datum of data) {
                assert(datum.primer_salmo_cita.length > 0);
                assert(datum.segundo_salmo_texto.length > 0);
                assert(datum.tercer_salmo_texto.length > 0);
            }

        });
    }); it("getLaudes 11/06", () => {
        // on peter_poveda_and_innocent_of_mary_immaculate_canoura_priests_and_companions_martyrs also possible
        // ordinary_time_31_thursday

        const breviarium = new Breviarium();
        breviarium.getLaudes(new Date(2025, 10, 6)).then(data => {
            assert(data !== undefined);
            assert(data[0].id == 'peter_poveda_and_innocent_of_mary_immaculate_canoura_priests_and_companions_martyrs');
            for (let datum of data) {
                assert(datum.primer_salmo_cita.length > 0);
                assert(datum.segundo_salmo_texto.length > 0);
                assert(datum.tercer_salmo_texto.length > 0);
            }

        });
    });

});