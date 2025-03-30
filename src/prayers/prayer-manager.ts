import {
    CompletoriumSchema,
    IntermediateSchema,
    InvitatoriumSchema,
    LaudesSchemaOutput,
    LecturesSchema,
    OfficiumSchema,
    PrayerManagerInterface,
    VesperaeSchemaOutput
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
import {mapper_invitatorium} from "@/prayers/mappers/mapper_invitatorium.ts";
import {mapper_laudes} from "@/prayers/mappers/mapper_laudes.ts";
import {mapper_vesperae} from "@/prayers/mappers/mapper_vesperae.ts";


export class PrayerManager implements PrayerManagerInterface {
    constructor() {
    }

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchema | undefined> {
        const dayCalendar = await searchDay(date);
        const resultSelected = all_invitatorium.find(invitatory => invitatory.id === dayCalendar?.id);
        return mapper_invitatorium(resultSelected);
    }

    async getLaudes(date?: Date): Promise<LaudesSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        const resultSelected = all_laudes.find(element => element.id === dayCalendar?.id && element.cycle === dayCalendar?.cycles.sundayCycle);
        return mapper_laudes(resultSelected);
    }

    async getVesperae(date?: Date): Promise<VesperaeSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        const resultSelected = all_vesperae.find(element => element.id === dayCalendar?.id && element.cycle === dayCalendar?.cycles.sundayCycle);
        return mapper_vesperae(resultSelected);
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