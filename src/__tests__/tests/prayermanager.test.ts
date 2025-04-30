import {describe, expect, it} from "vitest";
import {PrayerManager} from "@/prayers/prayer-manager.ts";
import {PrayerManagerInterface} from "@/prayer-manager-interface.ts";


describe("Prayer Manager module", () => {
    it("should return content in Laudes", () => {
        const prayer: PrayerManagerInterface = new PrayerManager();
        const result = prayer.getLaudes();

        assert(result !== undefined);
    });

    it("properties content ok", async () => {
        const prayer: PrayerManagerInterface = new PrayerManager();
        const result = await prayer.getLaudes();

        assert(result !== undefined);
        expect(result.responsorios.length).to.be.greaterThan(1);
        expect(result.preces_contenido.length).to.be.greaterThan(1);
        expect(result.primer_salmo_antifona).not.toBeNull();
        expect(result.primer_salmo_cita).not.toBeNull();
        expect(result.primer_salmo_texto).not.toBeNull();
        expect(result.segundo_salmo_antifona).not.toBeNull();
        expect(result.segundo_salmo_cita).not.toBeNull();
        expect(result.segundo_salmo_texto).not.toBeNull();
        expect(result.tercer_salmo_antifona).not.toBeNull();
        expect(result.tercer_salmo_cita).not.toBeNull();
        expect(result.tercer_salmo_texto).not.toBeNull();
        expect(result.lectura_biblica_cita).not.toBeNull();
        expect(result.lectura_biblica).not.toBeNull();
    });

    it("invitatory first day OK", async () => {
        const prayer: PrayerManagerInterface = new PrayerManager();

        const result = await prayer.getInvitatorium(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.id.length).to.be.greaterThan(1);
        expect(result.id).eq('mary_mother_of_god');
        expect(result.val).contains('Celebremos la maternidad de la Virgen María; adoremos a su Hijo Jesucristo, el Señor.');
    });

    it("getLectures first day OK", async () => {
        const prayer: PrayerManagerInterface = new PrayerManager();

        const resultTemp = await prayer.getLectures(new Date(2025, 0, 1));

        if (resultTemp) {
            const result = resultTemp[0]
            assert(result !== undefined);
            expect(result.id).eq('mary_mother_of_god');
            expect(result.fecha_anio_liturgico).contains('Domingo 1 de enero: Año litúrgico');
            expect(result.lecturas.length).eq(5);
            expect(result.lecturas[0].ref).eq('Nm 6, 22-27: _Invocarán mi nombre sobre los hijos de Israel y yo los bendeciré._');
            expect(result.lecturas[0].texto).contains('El Señor habló a Moisés: «Di a Aarón y a sus hijos');
            expect(result.lecturas[0].type).eq('FIRSTLECTURE');
            expect(result.lecturas[1].ref).eq('Sal 66, 2-8: _Que Dios tenga piedad y nos bendiga._');
            expect(result.lecturas[1].texto).contains('Que Dios tenga piedad y nos bendiga');
            expect(result.lecturas[1].type).eq('PSALM');
        }

    });

});
