import {LiturgicalCalendar, Romcal} from "romcal";
// @ts-ignore
import {Spain_Es} from "@romcal/calendar.spain";

const romcal_lib = new Romcal({localizedCalendar: Spain_Es});

export async function perpetualCalendar(year: number): Promise<LiturgicalCalendar | undefined> {
    try {
        return await romcal_lib.generateCalendar(year);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}