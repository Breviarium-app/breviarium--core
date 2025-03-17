// src/breviarium.ts
import {BreviariumInterface} from "./breviarium-interface.ts";
import {PrayerManager} from "@/prayers/prayer-manager.ts";

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

    setDate(date: Date): void {
        this.#selectedDate = date;
    }

    getCurrentDate(): Date {
        return this.#selectedDate;
    }

    getLaudes(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());

        console.log(this.#prayerManager.getLaudes(date));
        return `Laudes prayer for ${day}: ${this.#prayerManager.getLaudes(date)}`;
    }

    getVesperae(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Vesperae prayer for ${day}`;
    }

    getOfficium(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Officium prayer for ${day}`;
    }

    getTertia(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Tertia prayer for ${day}`;
    }

    getSexta(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Sexta prayer for ${day}`;
    }

    getNona(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Nona prayer for ${day}`;
    }

    getCompletorium(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Completorium prayer for ${day}`;
    }

    getMissaleLectiones(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Lectiones prayer for ${day}`;
    }

    getEvangelium(date?: Date): string {
        const day = formatDate(date ?? this.getCurrentDate());
        return `Evangelium prayer for ${day}`;
    }


};
