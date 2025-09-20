// src/breviarium.ts
import {BreviariumInterface} from "./breviarium-interface.ts";
import {PrayerManager} from "@/prayers/prayer-manager.ts";
import {
    CompletoriumSchemaOutput,
    EvangeliumSchemaOutput,
    IntermediateSchemaOutput,
    InvitatoriumSchemaOutput,
    LaudesSchemaOutput,
    LecturesSchemaOutput, LiturgyInformationOutput,
    OfficiumSchemaOutput,
    VesperaeSchemaOutput
} from "@/prayer-manager-interface.ts";
import invitatory_psalms from './prayers/db/es/commons/invitatory_psalms.json'
import {searchDay} from "@/prayers/romcal.ts";
import {getCycle, getHexLiturgicalColor, getSalteryWeek} from "@/prayers/utils.ts";

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
        return this.#prayerManager.getInvitatorium(date || this.getCurrentDate());
    }

    async getLectures(date?: Date): Promise<LecturesSchemaOutput[] | undefined> {
        return this.#prayerManager.getLectures(date || this.getCurrentDate());
    }

    async getLaudes(date?: Date): Promise<LaudesSchemaOutput[] | undefined> {
        return this.#prayerManager.getLaudes(date || this.getCurrentDate());
    }

    async getVesperae(date?: Date): Promise<VesperaeSchemaOutput | undefined> {
        return this.#prayerManager.getVesperae(date || this.getCurrentDate());
    }

    async getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined> {
        return this.#prayerManager.getOfficium(date || this.getCurrentDate());
    }

    async getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        return this.#prayerManager.getTertia(date || this.getCurrentDate());
    }

    async getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        return this.#prayerManager.getSexta(date || this.getCurrentDate());
    }

    async getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        return this.#prayerManager.getNona(date || this.getCurrentDate());
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchemaOutput | undefined> {
        return this.#prayerManager.getCompletorium(date || this.getCurrentDate());
    }

    async getEvangelium(date?: Date): Promise<EvangeliumSchemaOutput | undefined> {
        return this.#prayerManager.getEvangelium(date || this.getCurrentDate());
    }

    async getInvitatoriumPsalms(): Promise<any[]> {
        return invitatory_psalms;
    }

    async getLiturgyInformation(date?: Date): Promise<LiturgyInformationOutput> {
        const dayCalendar = await searchDay(date || this.getCurrentDate());

        if (dayCalendar) {
            return {
                psaltery_week: getSalteryWeek(dayCalendar?.cycles.psalterWeek),
                cycle: getCycle(dayCalendar?.cycles.sundayCycle),
                color: dayCalendar?.colors[0],
                color_hex: getHexLiturgicalColor(dayCalendar?.colors[0]),
                celebration: dayCalendar.name,
                rank: dayCalendar.rank,
                seasons: dayCalendar.seasons,
                precedence: dayCalendar.precedence,
                periods: dayCalendar.periods,
                calendar: {
                    endOfLiturgycalSeason: dayCalendar.calendar.endOfLiturgicalYear
                }
            }
        }
        return {
            psaltery_week: "I",
        };
    }
}