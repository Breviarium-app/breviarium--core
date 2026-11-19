import {DATASET_SCHEMA_VERSION, type CommonsTables, type CompletoriumWeek, type Dataset, type DatasetFileReader} from "./types.ts";

/** Names of the tables in `commons/`. The file for table `x` is `es/commons/x.json`. */
export const COMMONS_TABLES = [
    "cantico_evangelico_antifonas",
    "himnos",
    "invitacion_padrenuestro",
    "invitatorios",
    "lectura_breve_citas",
    "lectura_breve_textos",
    "lecturas_referencia",
    "lecturas_texto",
    "oficio_citas",
    "oficio_textos",
    "oficio_titulos",
    "oraciones_finales",
    "preces_contenido",
    "preces_intro",
    "preces_respuesta",
    "responsorios",
    "salmos_antifonas",
    "salmos_citas",
    "salmos_textos",
    "titulo_hora_liturgica",
] as const satisfies readonly (keyof CommonsTables)[];

const SCHEDULES = {
    invitatorium: "all_invitatorium.json",
    laudes: "all_laudes.json",
    vesperae: "all_vesperae.json",
    tertia: "all_tertia.json",
    sexta: "all_sexta.json",
    nona: "all_nona.json",
    lectures: "all_lectures.json",
    officium: "all_officium.json",
} as const;

// A JSON module imported through a bundler exposes its data as `default`.
const unwrap = (value: any): unknown => (value && typeof value === "object" && "default" in value ? value.default : value);

const COMPLETORIUM_PATHS = [1, 2, 3, 4, 5, 6, 7].map(n => `es/completorium/${n}.json`); // 1.json = Sunday
const INVITATORY_PSALMS_PATH = "es/commons/invitatory_psalms.json";
const commonsPath = (table: string) => `es/commons/${table}.json`;

/**
 * Every file that makes up a dataset, relative to the dataset root. This is the contract shared by
 * the bundled data, the CI publisher (manifest) and the app updater (download list).
 */
export const DATASET_FILE_PATHS: readonly string[] = [
    ...Object.values(SCHEDULES),
    ...COMPLETORIUM_PATHS,
    INVITATORY_PSALMS_PATH,
    ...COMMONS_TABLES.map(commonsPath),
];

/**
 * Builds a Dataset by reading every file through `read`. Fails (rejects) with the offending path
 * if a file is missing or does not have the expected shape, so callers can use it as the
 * "is this download usable?" check before activating a new dataset.
 */
export async function loadDataset(read: DatasetFileReader): Promise<Dataset> {
    const readArray = async (path: string): Promise<any[]> => {
        let value: unknown;
        try {
            value = await read(path);
        } catch (e) {
            throw new Error(`Dataset file "${path}" could not be read: ${e instanceof Error ? e.message : e}`);
        }
        value = unwrap(value);
        if (!Array.isArray(value)) {
            throw new Error(`Dataset file "${path}" is invalid: expected a JSON array`);
        }
        return value;
    };

    const schedules = {} as Dataset["schedules"];
    await Promise.all(
        (Object.keys(SCHEDULES) as (keyof typeof SCHEDULES)[]).map(async key => {
            schedules[key] = await readArray(SCHEDULES[key]);
        }),
    );

    const completorium = await Promise.all(COMPLETORIUM_PATHS.map(async path => {
        const day: any = unwrap(await read(path));
        if (!day || typeof day !== "object" || Array.isArray(day)) {
            throw new Error(`Dataset file "${path}" is invalid: expected a JSON object`);
        }
        return day;
    })) as CompletoriumWeek;

    const commons = {} as Record<string, any[]>;
    await Promise.all(COMMONS_TABLES.map(async table => {
        commons[table] = await readArray(commonsPath(table));
    }));

    const invitatoryPsalms = await readArray(INVITATORY_PSALMS_PATH);

    return {
        schemaVersion: DATASET_SCHEMA_VERSION,
        schedules,
        completorium,
        commons: commons as CommonsTables,
        invitatoryPsalms,
    };
}
