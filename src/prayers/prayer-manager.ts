import {
    CompletoriumSchemaOutput,
    EvangeliumSchemaOutput,
    IntermediateSchemaOutput,
    InvitatoriumSchemaOutput,
    LaudesSchemaOutput,
    LecturesSchema,
    LecturesSchemaOutput,
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
import {searchDay} from "@/prayers/romcal.ts";
import {mapper_invitatorium} from "@/prayers/mappers/mapper_invitatorium.ts";
import {mapper_laudes} from "@/prayers/mappers/mapper_laudes.ts";
import {mapper_vesperae} from "@/prayers/mappers/mapper_vesperae.ts";
import {mapper_officium} from "@/prayers/mappers/mapper_officium.ts";
import {mapper_lectures} from "@/prayers/mappers/mapper_lectures.ts";
import {mapper_completorium} from "@/prayers/mappers/mapper_completorium.ts";
import {mapper_evangelium} from "@/prayers/mappers/mapper_evangelium.ts";
import {mergeContentReturnOnlyOne, mergeContentReturnTwo, searchAllPrayersForDay} from "@/prayers/utils.ts";
import {mapper_intermediate} from "@/prayers/mappers/mapper_intermediate.ts";


export class PrayerManager implements PrayerManagerInterface {
    constructor() {
    }

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        const resultSelected = all_invitatorium.find(invitatory => invitatory.id === dayCalendar?.id);
        return mapper_invitatorium(resultSelected);
    }

    async getLaudes(date?: Date): Promise<LaudesSchemaOutput[] | undefined> {
        const dayCalendar = await searchDay(date);

        return mapper_laudes(mergeContentReturnTwo(searchAllPrayersForDay(all_laudes, dayCalendar)));
    }

    async getVesperae(date?: Date): Promise<VesperaeSchemaOutput[] | undefined> {
        const dayCalendar = await searchDay(date);
        return mapper_vesperae(mergeContentReturnTwo(searchAllPrayersForDay(all_vesperae, dayCalendar)));
    }

    async getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        return mapper_intermediate(dayCalendar, mergeContentReturnOnlyOne(searchAllPrayersForDay(all_tertia, dayCalendar)), all_tertia);
    }

    async getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        return mapper_intermediate(dayCalendar, mergeContentReturnOnlyOne(searchAllPrayersForDay(all_sexta, dayCalendar)), all_sexta);
    }

    async getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        return mapper_intermediate(dayCalendar, mergeContentReturnOnlyOne(searchAllPrayersForDay(all_nona, dayCalendar)), all_nona);
    }

    async getLectures(date?: Date): Promise<(LecturesSchemaOutput[] | undefined)> {
        const dayCalendar = await searchDay(date);
        const resultsSelected = all_lectures.filter(element => element.id === dayCalendar?.id);
        return resultsSelected.map(mapper_lectures);
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchemaOutput | undefined> {
        return mapper_completorium(date);
    }

    async getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);

        return mapper_officium(mergeContentReturnOnlyOne(searchAllPrayersForDay(all_officium, dayCalendar)));
    }

    async getEvangelium(date?: Date): Promise<EvangeliumSchemaOutput | undefined> {
        const dayCalendar = await searchDay(date);
        const data: LecturesSchema[] = all_lectures.filter(element => element.id === dayCalendar?.id);

        let result = data?.filter(x => x.cycle == dayCalendar?.cycles.sundayCycle)
        const isEven: boolean = (Number(dayCalendar?.calendar.endOfLiturgicalYear.split('-')[0]) % 2) == 0;


        // check if MEMORY
        if (result.length == 0) {
            result = data?.filter(x => x.cycle == "MEMORY");
        }

        if (result.length == 0) {
            result = data?.filter(x => x.cycle == "ANY");
        }

        // if not cycle found, EVEN/ODD or default
        if (result.length == 0) {
            if (isEven) {
                result = data?.filter(x => x.cycle == "EVEN");
            } else {
                result = (data?.filter(x => x.cycle == "ODD"));
            }
        }

        if (result?.length == 0 && data.length > 0) {
            result = [data[0]]
        }
        return mapper_evangelium(result);
    }
}