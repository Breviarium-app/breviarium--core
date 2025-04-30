import {
    CompletoriumSchema,
    IntermediateSchemaOutput,
    InvitatoriumSchemaOutput,
    LaudesSchemaOutput,
    LecturesSchema, LecturesSchemaOutput,
    OfficiumSchemaOutput,
    PrayerManagerInterface,
    VesperaeSchemaOutput
} from "@/prayer-manager-interface.ts";
import all_laudes from '@/prayers/db/all_laudes.json';
import all_vesperae from '@/prayers/db/all_vesperae.json';
import all_tertia from '@/prayers/db/all_tertia.json';
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
import {finder_intermediate} from "@/prayers/finders/finder_intermediate.ts";
import {mapper_officium} from "@/prayers/mappers/mapper_officium.ts";
import {mapper_lectures} from "@/prayers/mappers/mapper_lectures.ts";


export class PrayerManager implements PrayerManagerInterface {
    constructor() {
    }

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchemaOutput | undefined> {
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

    async getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        return finder_intermediate(dayCalendar, all_tertia);
    }

    async getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        return finder_intermediate(dayCalendar, all_sexta);
    }

    async getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        return finder_intermediate(dayCalendar, all_nona);
    }

    async getLectures(date?: Date): Promise<(LecturesSchemaOutput[] | undefined)> {
        const dayCalendar = await searchDay(date);
        const resultsSelected = all_lectures.filter(element => element.id === dayCalendar?.id);
        return resultsSelected.map(mapper_lectures);
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchema | undefined> {
        console.log('Completorium date:', date);
        return monday;
    }

    async getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        const resultSelected = all_officium.find(element => element.id === dayCalendar?.id);
        // TODO: If MEMORY, replace all fields but himno, lectura_patristica and oracion_final with ferialElement values
        return mapper_officium(resultSelected);
    }

    async getEvangelium(date?: Date): Promise<LecturesSchema | undefined> {
        console.log('Evangelium date:', date);
        return undefined;
    }
}