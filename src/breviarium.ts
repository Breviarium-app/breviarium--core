// src/breviarium.ts
import {BreviariumInterface} from "./breviarium-interface.ts";
import {PrayerManager} from "@/prayers/prayer-manager.ts";
import {
    CompletoriumSchema,
    IntermediateSchemaOutput,
    InvitatoriumSchemaOutput,
    LaudesSchemaOutput,
    LecturesSchema,
    OfficiumSchemaOutput,
    VesperaeSchemaOutput
} from "@/prayer-manager-interface.ts";
import invitatory_psalms from './prayers/db/es/commons/invitatory_psalms.json'
import {LiturgyInformation} from "@/prayers/types.ts";
import {searchDay} from "@/prayers/romcal.ts";
import {getHexLiturgicalColor} from "@/prayers/utils.ts";

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

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchemaOutput | undefined> {
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

    async getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined> {
        return await this.#prayerManager.getOfficium(date);
    }

    async getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        return await this.#prayerManager.getTertia(date);
    }

    async getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        return await this.#prayerManager.getSexta(date);
    }

    async getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        return await this.#prayerManager.getNona(date);
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchema | undefined> {
        return await this.#prayerManager.getCompletorium(date);
    }

    async getEvangelium(date?: Date): Promise<LecturesSchema | undefined> {
        return await this.#prayerManager.getEvangelium(date);
    }

    async getInvitatoriumPsalms(): Promise<any[]> {
        return invitatory_psalms;
    }

    async getLiturgyInformation(date?: Date): Promise<LiturgyInformation> {
        const dayCalendar = await searchDay(date);

        if (date) {
            return {
                psaltery_week: dayCalendar?.cycles.psalterWeek,
                cycle: dayCalendar?.cycles.sundayCycle,
                color: dayCalendar?.colors[0],
                color_hex: getHexLiturgicalColor(dayCalendar?.colors[0])
            }
        }
        return {
            psaltery_week: "I",
            cycle: undefined,
            color: undefined,
            color_hex: undefined
        };
    }
}