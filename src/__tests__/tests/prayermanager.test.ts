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

});
