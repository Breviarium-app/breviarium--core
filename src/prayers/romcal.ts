import {LiturgicalCalendar, LiturgicalDay, Romcal} from "romcal";
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


export async function searchDay(date?: Date): Promise<LiturgicalDay | undefined> {
    date = date || new Date();
    const calendar: LiturgicalCalendar | undefined = await perpetualCalendar(date.getFullYear());
    if (calendar == undefined) return undefined;

    const dateToday = new Date(date)
        .toLocaleDateString("en-ZA")
        .replaceAll("/", "-");

    for (const day of calendar[dateToday]) {
        if (!day.isOptional) {
            return day;
        }
    }

    return undefined;
}