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
import {createFindText, type FindText} from "@/prayers/mappers/findText";
import {loadBundledDataset} from "@/dataset/bundled.ts";
import type {Dataset} from "@/dataset/types.ts";


export class PrayerManager implements PrayerManagerInterface {
    readonly #getDataset: () => Promise<Dataset>;
    #findTextCache?: { commons: Dataset["commons"], findText: FindText };

    /** @param getDataset resolves the dataset to read from on every call; defaults to the bundled one. */
    constructor(getDataset: () => Promise<Dataset> = loadBundledDataset) {
        this.#getDataset = getDataset;
    }

    async #data(): Promise<{ data: Dataset, findText: FindText }> {
        const data = await this.#getDataset();
        if (this.#findTextCache?.commons !== data.commons) {
            this.#findTextCache = {commons: data.commons, findText: createFindText(data.commons)};
        }
        return {data, findText: this.#findTextCache.findText};
    }

    async getInvitatorium(date?: Date): Promise<InvitatoriumSchemaOutput | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        const resultSelected = data.schedules.invitatorium.find(invitatory => invitatory.id === dayCalendar?.id);
        return mapper_invitatorium(resultSelected, findText);
    }

    async getLaudes(date?: Date): Promise<LaudesSchemaOutput[] | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        return mapper_laudes(mergeContentReturnTwo(searchAllPrayersForDay(data.schedules.laudes, dayCalendar)), findText);
    }

    async getVesperae(date?: Date): Promise<VesperaeSchemaOutput[] | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        return mapper_vesperae(mergeContentReturnTwo(searchAllPrayersForDay(data.schedules.vesperae, dayCalendar)), findText);
    }

    async getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        return mapper_intermediate(dayCalendar, mergeContentReturnOnlyOne(searchAllPrayersForDay(data.schedules.tertia, dayCalendar)), data.schedules.tertia, findText);
    }

    async getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        return mapper_intermediate(dayCalendar, mergeContentReturnOnlyOne(searchAllPrayersForDay(data.schedules.sexta, dayCalendar)), data.schedules.sexta, findText);
    }

    async getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        return mapper_intermediate(dayCalendar, mergeContentReturnOnlyOne(searchAllPrayersForDay(data.schedules.nona, dayCalendar)), data.schedules.nona, findText);
    }

    async getLectures(date?: Date): Promise<(LecturesSchemaOutput[] | undefined)> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        const resultsSelected = data.schedules.lectures.filter(element => element.id === dayCalendar?.id);
        return resultsSelected.map(item => mapper_lectures(item, findText));
    }

    async getCompletorium(date?: Date): Promise<CompletoriumSchemaOutput | undefined> {
        const {data} = await this.#data();
        return mapper_completorium(date, data.completorium);
    }

    async getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined> {
        const {data, findText} = await this.#data();
        const dayCalendar = await searchDay(date);

        return mapper_officium(mergeContentReturnOnlyOne(searchAllPrayersForDay(data.schedules.officium, dayCalendar)), findText);
    }

    async getEvangelium(date?: Date): Promise<EvangeliumSchemaOutput | undefined> {
        const {data: dataset, findText} = await this.#data();
        const dayCalendar = await searchDay(date);
        const data: LecturesSchema[] = dataset.schedules.lectures.filter(element => element.id === dayCalendar?.id);

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
        return mapper_evangelium(result, findText);
    }
}