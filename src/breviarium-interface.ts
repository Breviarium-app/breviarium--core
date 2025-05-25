import {LiturgyInformationOutput, PrayerManagerInterface} from "@/prayer-manager-interface.ts";

export interface BreviariumInterface extends PrayerManagerInterface {
    getCurrentDate(): Date;

    setDate(date: Date): void;

    getLiturgyInformation(date?: Date): Promise<LiturgyInformationOutput>;

}
