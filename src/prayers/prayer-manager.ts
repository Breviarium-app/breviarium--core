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
import {perpetualCalendar} from "@/prayers/romcal.ts";

function formatDate(date: Date | undefined): string {
    if (!date) {
        throw new Error("Invalid date format.");
    }
    return date.toISOString().split("T")[0];
}

export class PrayerManager implements PrayerManagerInterface {

    // #perpetualCalendar: LiturgicalCalendar;

    constructor() {

    }

    getInvitatorium(date?: Date): InvitatoriumSchema | undefined {
        console.log('Invitatorium date:', formatDate(date));
        perpetualCalendar(date?.getFullYear() || new Date().getFullYear()).then(x => {
            console.log(x)
        });
        return all_invitatorium[0];
    }

    getLaudes(date?: Date): LaudesSchema | undefined {
        console.log('Laudes date:', date);
        return all_laudes[0];
    }

    getVesperae(date?: Date): VesperaeSchema | undefined {
        console.log('Vesperae date:', date);
        return all_vesperae[0];
    }

    getTertia(date?: Date): IntermediateSchema | undefined {
        console.log('Tercia date:', date);
        return all_tercia[0];
    }

    getSexta(date?: Date): IntermediateSchema | undefined {
        console.log('Sexta date:', date);
        return all_sexta[0];
    }

    getNona(date?: Date): IntermediateSchema | undefined {
        console.log('Nona date:', date);
        return all_nona[0];
    }

    getLectures(date?: Date): LecturesSchema | undefined {
        console.log('Lectures date:', date);
        return all_lectures[0];
    }

    getCompletorium(date?: Date): CompletoriumSchema | undefined {
        console.log('Completorium date:', date);
        return monday;
    }

    getOfficium(date?: Date): OfficiumSchema | undefined {
        console.log('Officium date:', date);
        return all_officium[0];
    }

    getEvangelium(date?: Date): LecturesSchema | undefined {
        console.log('Evangelium date:', date);
        return undefined;
    }
}