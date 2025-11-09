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
        await prayer.getLaudes().then(r => {
            const res = r?.[0]
            assert(res !== undefined);
            expect(res.responsorios.length).to.be.greaterThan(1);
            expect(res.preces_contenido.length).to.be.greaterThan(1);
            expect(res.primer_salmo_antifona).not.toBeNull();
            expect(res.primer_salmo_cita).not.toBeNull();
            expect(res.primer_salmo_texto).not.toBeNull();
            expect(res.segundo_salmo_antifona).not.toBeNull();
            expect(res.segundo_salmo_cita).not.toBeNull();
            expect(res.segundo_salmo_texto).not.toBeNull();
            expect(res.tercer_salmo_antifona).not.toBeNull();
            expect(res.tercer_salmo_cita).not.toBeNull();
            expect(res.tercer_salmo_texto).not.toBeNull();
            expect(res.lectura_biblica_cita).not.toBeNull();
            expect(res.lectura_biblica).not.toBeNull();
        });


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
            // expect(result.fecha_anio_liturgico).contains('Domingo 1 de enero: Año litúrgico');
            expect(result.lecturas.length).eq(5);

            const first = result.lecturas.find(l => l.type === 'FIRSTLECTURE');
            expect(first?.ref).eq('Nm 6, 22-27: _Invocarán mi nombre sobre los hijos de Israel y yo los bendeciré._');
            expect(first?.texto).contains('El Señor habló a Moisés: «Di a Aarón y a sus hijos');
            expect(first?.type).eq('FIRSTLECTURE');
            const psalm = result.lecturas.find(l => l.type === 'PSALM');
            expect(psalm?.ref).eq('Sal 66, 2-8: _Que Dios tenga piedad y nos bendiga._');
            expect(psalm?.texto).contains('Que Dios tenga piedad y nos bendiga');
            expect(psalm?.type).eq('PSALM');
        }

    });

    it("getCompletorium wednesday ok", async () => {
        const prayer: PrayerManagerInterface = new PrayerManager();

        const result = await prayer.getCompletorium(new Date(2025, 0, 1));

        assert(result !== undefined);
        expect(result.oracion).eq('Completas: Miércoles');
        expect(result.himno).contains('Tras las cimas más altas,');
        expect(result.primer_salmo_cita).contains('Salmo 30, 2-6: Súplica confiada de un afligido');
        expect(result.segundo_salmo_cita).contains('Salmo 129: Desde lo hondo, a ti grito');
        expect(result.cantico_evangelico_antifona).contains('Sálvanos, Señor, despiertos, protégenos mientras dormimos, para que velemos con Cristo y descansemos en paz');
    });


});
