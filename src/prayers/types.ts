export enum LiturgicalSeasons {
    ADVENT = "ADVENT",
    PASCHAL_TRIDUUM = "PASCHAL_TRIDUUM",
    ORDINARY_TIME = "ORDINARY_TIME",
    EASTER = "EASTER_TIME",
    CHRISTMAS_TIME = "CHRISTMAS_TIME",
    LENT = "LENT"
}

export enum PropertyCerpetualCalendar {
    Id = 'id',
    Name = 'name',
    Seasons = 'seasons',
    Calendar = 'calendar',
    Colors = 'colors',
    Rank = 'rank',
    Precedence = 'precedence',
    Periods = 'periods',
    Weekday = 'weekday'
}

/**
 * Color string and color hexadecimal code
 */
export enum LiturgicalColors {
    GREEN = "GREEN",
    GREEN_C = "#70b26f",
    PURPLE = "PURPLE",
    PURPLE_C = "#794498",
    WHITE = "WHITE",
    WHITE_C = "#bdbdbd66",
    ROSE = "ROSE",
    ROSE_C = "#ff81f5",
    BLUE = "BLUE",
    BLUE_C = "#00bafe",
    RED = "RED",
    RED_C = "#ff5654"
}

export enum SalteryWeek {
    WEEK_1 = "WEEK_1",
    WEEK_2 = "WEEK_2",
    WEEK_3 = "WEEK_3",
    WEEK_4 = "WEEK_4",
}

export enum CycleType {
    YEAR_A = "YEAR_A",
    YEAR_B = "YEAR_B",
    YEAR_C = "YEAR_C",
}

export enum LecturesType {
    GOSPEL = 'GOSPEL',
    FIRST_LECTURE = 'FIRSTLECTURE',
    SECOND_LECTURE = 'SECONDLECTURE',
    PSALM = 'PSALM',
    CELEBRATION_FIRST_LECTURE = 'CELEBRATION_FIRSTLECTURE',
    CELEBRATION_PSALM = 'CELEBRATION_PSALM',
    CELEBRATION_SECOND_LECTURE = 'CELEBRATION_SECONDLECTURE',
    CELEBRATION_GOSPEL = 'CELEBRATION_GOSPEL',
}