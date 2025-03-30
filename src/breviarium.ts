// src/breviarium.ts
import {BreviariumInterface} from "./breviarium-interface.ts";
import {PrayerManager} from "@/prayers/prayer-manager.ts";
import {
    CompletoriumSchema,
    IntermediateSchema,
    InvitatoriumSchema,
    LaudesSchemaOutput,
    LecturesSchema,
    OfficiumSchema,
    VesperaeSchemaOutput
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

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchema | undefined> {
        return await this.#prayerManager.getInvitatorium(date);
    }

    async getLectures(date?: Date): Promise<LecturesSchema | undefined> {
        return await this.#prayerManager.getLectures(date);
    }

    async getLaudes(date?: Date): Promise<LaudesSchemaOutput | undefined> {
        return await this.#prayerManager.getLaudes(date);
    }

    async getVesperae(date?: Date): Promise<VesperaeSchemaOutput | undefined> {
        return await this.#prayerManager.getVesperae(date);
    }

    async getOfficium(date?: Date): Promise<OfficiumSchema | undefined> {
        return await this.#prayerManager.getOfficium(date);
    }

    async getTertia(date?: Date): Promise<IntermediateSchema | undefined> {
        return await this.#prayerManager.getTertia(date);
    }

    async getSexta(date?: Date): Promise<IntermediateSchema | undefined> {
        return await this.#prayerManager.getSexta(date);
    }

    async getNona(date?: Date): Promise<IntermediateSchema | undefined> {
        return await this.#prayerManager.getNona(date);
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchema | undefined> {
        return await this.#prayerManager.getCompletorium(date);
    }

    async getEvangelium(date?: Date): Promise<LecturesSchema | undefined> {
        return await this.#prayerManager.getEvangelium(date);
    }
}