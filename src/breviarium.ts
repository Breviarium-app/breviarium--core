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

function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
}

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

    getInvitatorium(date?: Date): InvitatoriumSchema | undefined {
        console.log(date)
        return undefined;
    }
    getLectures(date?: Date): LecturesSchema | undefined {
        console.log(date)
        return undefined;
    }

    setDate(date: Date): void {
        this.#selectedDate = date;
    }

    getCurrentDate(): Date {
        return this.#selectedDate;
    }

    getLaudes(date?: Date): LaudesSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());

        console.log(this.#prayerManager.getLaudes(date));
        console.log(day)
        return undefined;
    }

    getVesperae(date?: Date): VesperaeSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }

    getOfficium(date?: Date): OfficiumSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }

    getTertia(date?: Date): IntermediateSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }

    getSexta(date?: Date): IntermediateSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }

    getNona(date?: Date): IntermediateSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }

    getCompletorium(date?: Date): CompletoriumSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }

    getEvangelium(date?: Date): LecturesSchema | undefined {
        const day = formatDate(date ?? this.getCurrentDate());
        console.log(day)
        return undefined;
    }


};
