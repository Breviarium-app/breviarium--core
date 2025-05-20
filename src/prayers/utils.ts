import {CycleType, LiturgicalColors, LiturgicalSeasons, SalteryWeek} from "@/prayers/types.ts";
import {Romcal} from "romcal";

export function formatDate(date: Date | undefined): string {
    if (!date) {
        throw new Error("Invalid date format.");
    }
    return date.toISOString().split("T")[0];
}

export function showTeDeum(rank: string, season: string) {
    if (season === LiturgicalSeasons.CHRISTMAS) {
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