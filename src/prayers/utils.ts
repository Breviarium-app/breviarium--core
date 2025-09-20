import {CycleType, LiturgicalColors, LiturgicalSeasons, SalteryWeek} from "@/prayers/types.ts";
import {Romcal} from "romcal";

export function formatDate(date: Date | undefined): string {
    if (!date) {
        throw new Error("Invalid date format.");
    }
    return date.toISOString().split("T")[0];
}

export function showTeDeum(rank: string, season: string) {
    if (season === LiturgicalSeasons.CHRISTMAS_TIME) {
        return true;
    }
    if (rank === Romcal.Ranks.Solemnity) {
        return true;
    }
    if (rank === Romcal.Ranks.Sunday && season != LiturgicalSeasons.LENT) {
        return true;
    }
    if (rank === Romcal.Ranks.Feast) {
        return true;
    }
    return false;
}

export function getSalteryWeek(psalteryWeek: string): string {
    switch (psalteryWeek) {
        case(SalteryWeek.WEEK_1): {
            return "I"
        }
        case(SalteryWeek.WEEK_2): {
            return "II"
        }
        case(SalteryWeek.WEEK_3): {
            return "III"
        }
        case(SalteryWeek.WEEK_4): {
            return "IV"
        }
        default: {
            return ""
        }
    }
}

export function getCycle(cycleYear: string): string {
    switch (cycleYear) {
        case(CycleType.YEAR_A): {
            return "A"
        }
        case(CycleType.YEAR_B): {
            return "B"
        }
        case(CycleType.YEAR_C): {
            return "C"
        }

        default: {
            return ""
        }
    }
}

export function getHexLiturgicalColor(color?: string) {
    switch (color) {
        case LiturgicalColors.GREEN:
            return LiturgicalColors.GREEN_C;
        case LiturgicalColors.PURPLE:
            return LiturgicalColors.PURPLE_C
        case LiturgicalColors.WHITE:
            return LiturgicalColors.WHITE_C;
        case LiturgicalColors.ROSE:
            return LiturgicalColors.ROSE_C;
        case LiturgicalColors.BLUE:
            return LiturgicalColors.BLUE_C;
        case LiturgicalColors.RED:
            return LiturgicalColors.RED_C;
        default:
            return LiturgicalColors.WHITE_C;
    }
}

export function searchPrayerForDay(prayer_collection: any[], dayCalendar: any) {

    let result = prayer_collection.find((element: any) => element.id === dayCalendar?.id && element.cycle === dayCalendar?.cycles.sundayCycle)
    if (!result) {
        result = prayer_collection.find((element: any) => element.id === dayCalendar?.id && element.cycle === "ANY")
    }
    if (!result) {
        result = prayer_collection.find((element: any) => element.id === dayCalendar?.id)
    }
    return result;

}

export function searchAllPrayersForDay(prayer_collection: any[], dayCalendar: any) {
    let prayerOptions = []

    let firstFound = prayer_collection.find((element: any) => element.id === dayCalendar?.id && element.cycle === dayCalendar?.cycles.sundayCycle)
    if (!firstFound) {
        firstFound = prayer_collection.find((element: any) => element.id === dayCalendar?.id && element.cycle === "ANY")
    }
    if (!firstFound) {
        firstFound = prayer_collection.find((element: any) => element.id === dayCalendar?.id)
    }
    prayerOptions.push(firstFound)

    const ferialDay = dayCalendar.weekday?.id
    console.log("ferialDay", ferialDay)
    const ferialData = prayer_collection.find((element: any) => element.id === ferialDay)

    if (ferialData) {
        prayerOptions.push(ferialData)
    }
    return prayerOptions;

}

export function mergeLaudesContent(items: any[]): any[] {
    // supossed to have 2 elements at most
    if (items.length > 1) {
        const newFirst = mergeObjects(items[0], items[1]);
        return [newFirst, items[1]];
    } else {
        return items
    }

}

function mergeObjects(target: any, source: any) {
    const result = {...target}; // Create a shallow copy of the target object
    for (const key in result) {
        if (result[key] === -1 && source.hasOwnProperty(key)) {
            result[key] = source[key]; // Replace -1 with value from source
        }
    }
    return result;
}