// src/breviarium.ts
import {BreviariumInterface} from "./breviarium-interface.ts";
import {PrayerManager} from "@/prayers/prayer-manager.ts";
import {
    CompletoriumSchema,
    IntermediateSchema,
    InvitatoriumSchema,
    LaudesSchema,
    LecturesSchema,
    OfficiumSchema,
    VesperaeSchema
} from "@/prayer-manager-interface.ts";

export default class Breviarium implements BreviariumInterface {

    #selectedDate: Date;
    #prayerManager: PrayerManager;

    constructor(selectedDate?: Date) {
        if (selectedDate !== undefined && selectedDate !== null)
            this.#selectedDate = selectedDate;
        else
            this.#selectedDate = new Date();
        this.#prayerManager = new PrayerManager();
    }

    setDate(date: Date): void {
        this.#selectedDate = date;
    }

    getCurrentDate(): Date {
        return this.#selectedDate;
    }

    getInvitatorium(date?: Date): InvitatoriumSchema | undefined {
        return this.#prayerManager.getInvitatorium(date);
    }

    getLectures(date?: Date): LecturesSchema | undefined {
        return this.#prayerManager.getLectures(date);
    }

    getLaudes(date?: Date): LaudesSchema | undefined {
        return this.#prayerManager.getLaudes(date);
    }

    getVesperae(date?: Date): VesperaeSchema | undefined {
        return this.#prayerManager.getVesperae(date);
    }

    getOfficium(date?: Date): OfficiumSchema | undefined {
        return this.#prayerManager.getOfficium(date);
    }

    getTertia(date?: Date): IntermediateSchema | undefined {
        return this.#prayerManager.getTertia(date);
    }

    getSexta(date?: Date): IntermediateSchema | undefined {
        return this.#prayerManager.getSexta(date);
    }

    getNona(date?: Date): IntermediateSchema | undefined {
        return this.#prayerManager.getNona(date);
    }

    getCompletorium(date?: Date): CompletoriumSchema | undefined {
        return this.#prayerManager.getCompletorium(date);
    }

    getEvangelium(date?: Date): LecturesSchema | undefined {
        return this.#prayerManager.getEvangelium(date);
    }


};
