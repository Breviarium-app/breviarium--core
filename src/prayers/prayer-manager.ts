import {
    CompletoriumSchema,
    IntermediateSchema,
    InvitatoriumSchema,
    LaudesSchema,
    LecturesSchema,
    OfficiumSchema,
    PrayerManagerInterface,
    VesperaeSchema
} from "@/prayer-manager-interface.ts";
import all_laudes from '@/prayers/db/all_laudes.json';
import all_vesperae from '@/prayers/db/all_vesperae.json';
import all_tercia from '@/prayers/db/all_tertia.json';
import all_sexta from '@/prayers/db/all_sexta.json';
import all_nona from '@/prayers/db/all_nona.json';
import all_lectures from '@/prayers/db/all_lectures.json';
import all_officium from '@/prayers/db/all_officium.json';
import all_invitatorium from '@/prayers/db/all_invitatorium.json';
import {monday} from '@/prayers/db/es/completorium/index.ts';
import {searchDay} from "@/prayers/romcal.ts";

function formatDate(date: Date | undefined): string {
    if (!date) {
        throw new Error("Invalid date format.");
    }
    return date.toISOString().split("T")[0];
}

export class PrayerManager implements PrayerManagerInterface {
    constructor() {
    }

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchema | undefined> {
        console.log('Invitatorium date:', formatDate(date));
        const dayCalendar = await searchDay(date);
        const resultSelected = all_invitatorium.find(invitatory => invitatory.id === dayCalendar?.id);
        return resultSelected;
    }

    async getLaudes(date?: Date): Promise<LaudesSchema | undefined> {
        console.log('Laudes date:', date);
        const dayCalendar = await searchDay(date);
        const resultSelected = all_laudes.find(element => element.id === dayCalendar?.id && element.cycle === dayCalendar?.cycles.sundayCycle);
        return resultSelected;
    }

    async getVesperae(date?: Date): Promise<VesperaeSchema | undefined> {
        console.log('Vesperae date:', date);
        return all_vesperae[0];
    }

    async getTertia(date?: Date): Promise<IntermediateSchema | undefined> {
        console.log('Tercia date:', date);
        return all_tercia[0];
    }

    async getSexta(date?: Date): Promise<IntermediateSchema | undefined> {
        console.log('Sexta date:', date);
        return all_sexta[0];
    }

    async getNona(date?: Date): Promise<IntermediateSchema | undefined> {
        console.log('Nona date:', date);
        return all_nona[0];
    }

    async getLectures(date?: Date): Promise<LecturesSchema | undefined> {
        console.log('Lectures date:', date);
        return all_lectures[0];
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchema | undefined> {
        console.log('Completorium date:', date);
        return monday;
    }

    async getOfficium(date?: Date): Promise<OfficiumSchema | undefined> {
        console.log('Officium date:', date);
        return all_officium[0];
    }

    async getEvangelium(date?: Date): Promise<LecturesSchema | undefined> {
        console.log('Evangelium date:', date);
        return undefined;
    }
}