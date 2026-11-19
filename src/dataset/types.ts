import type {TableCommon, TableCommonName} from "@/prayers/mappers/findText/types.ts";

/**
 * Version of the *shape* of the dataset (file layout + JSON structure + mapper expectations).
 * Bump it ONLY when a change needs new code to read the data (a client running older code must
 * not apply a dataset with a higher schema). Pure text/content changes never bump it.
 */
export const DATASET_SCHEMA_VERSION = 1;

export type CommonsTables = Record<Exclude<TableCommonName, "antifonas" | "lecturas_fecha_anio_liturgico">, TableCommon[]>;

/** Day of week order matches `Date#getDay()`: Sunday = 0 ... Saturday = 6. */
export type CompletoriumWeek = [any, any, any, any, any, any, any];

/** Everything the library needs to produce prayers. Immutable once built. */
export interface Dataset {
    schemaVersion: number;
    schedules: {
        invitatorium: any[];
        laudes: any[];
        vesperae: any[];
        tertia: any[];
        sexta: any[];
        nona: any[];
        lectures: any[];
        officium: any[];
    };
    completorium: CompletoriumWeek;
    commons: CommonsTables;
    invitatoryPsalms: any[];
}

/** Reads one dataset file by its relative path (see DATASET_FILE_PATHS) and returns the parsed JSON. */
export type DatasetFileReader = (path: string) => Promise<unknown>;
