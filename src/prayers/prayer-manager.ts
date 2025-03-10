import {LaudesSchema, PrayerManagerInterface} from "@/prayer-manager-interface.ts";
import all_laudes from '@/prayers/db/all_laudes.json'

export class PrayerManager implements PrayerManagerInterface {
    getLaudes(date?: Date): LaudesSchema | undefined {
        console.log(date)
        return all_laudes[0];
    }

}