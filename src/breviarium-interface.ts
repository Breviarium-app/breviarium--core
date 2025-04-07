import {PrayerManagerInterface} from "@/prayer-manager-interface.ts";
import {LiturgyInformation} from "@/prayers/types.ts";

export interface BreviariumInterface extends PrayerManagerInterface {
    getCurrentDate(): Date;

    setDate(date: Date): void;

    getLiturgyInformation(date?: Date): Promise<LiturgyInformation>;

}
