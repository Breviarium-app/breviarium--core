export interface PrayerManagerInterface {
    getInvitatorium(date?: Date): Promise<InvitatoriumSchema | undefined>;

    getLaudes(date?: Date): Promise<LaudesSchemaOutput | undefined>;

    getVesperae(date?: Date): Promise<VesperaeSchema | undefined>;

    getTertia(date?: Date): Promise<IntermediateSchema | undefined>;

    getSexta(date?: Date): Promise<IntermediateSchema | undefined>;

    getNona(date?: Date): Promise<IntermediateSchema | undefined>;

    getCompletorium(date?: Date): Promise<CompletoriumSchema | undefined>;

    getOfficium(date?: Date): Promise<OfficiumSchema | undefined>;

    getLectures(date?: Date): Promise<LecturesSchema | undefined>;

    getEvangelium(date?: Date): Promise<LecturesSchema | undefined>;
}


export type InvitatoriumSchema = {
    id: string;
    val: number;
};

export type LaudesSchema = {
    id: string;
    cycle: string;
    dia_semana_tiempo: number;
    himno: number;
    s1_c: number;
    s1_a: number;
    s1_t: number;
    s2_c: number;
    s2_a: number;
    s2_t: number;
    s3_c: number;
    s3_a: number;
    s3_t: number;
    lb_c: number;
    lb_t: number;
    responsorios: number[];
    ce_a: number; // cántico evangelio antífona
    preces_i: number;
    preces_r: number;
    preces_c: number[];
    invi_pn: number;
    o_final: number;
};

export type LaudesSchemaOutput = {
    id: string;
    cycle: string;
    dia_semana_tiempo: number;
    himno: number;
    primer_salmo_cita: number;
    primer_salmo_antifona: number;
    primer_salmo_texto: number;
    segundo_salmo_cita: number;
    segundo_salmo_antifona: number;
    segundo_salmo_texto: number;
    tercer_salmo_cita: number;
    tercer_salmo_antifona: number;
    tercer_salmo_texto: number;
    lectura_biblica_cita: number;
    lectura_biblica: number;
    responsorios: number[];
    cantico_evangelico_antifona: number;
    preces_intro: number;
    preces_respuesta: number;
    preces_contenido: number[];
    invitacion_padrenuestro: number;
    oracion_final: number;
}

export type LecturesSchema = {
    id: string;
    cycle: string;
    fecha_anio_liturgico: number;
    tiempo_ciclo_paridad: number;
    celebraciones_posibles: number[];
    lecturas: {
        ref: number;
        texto: number;
        type: string; //"FIRSTLECTURE" | "PSALM" | "GOSPEL";
    }[];
};

export type IntermediateSchema = {
    id: string;
    cycle: string;
    himno: number;
    s1_c: number;
    s1_a: number | string;
    s1_t: number;
    s2_c: number | string;
    s2_a: number | string;
    s2_t: number | string;
    s3_c: number | string;
    s3_a: number | string;
    s3_t: number | string;
    lb_c: number;
    lb_t: number;
    responsorios: number[];
    o_final: number;
};

export type VesperaeSchema = {
    id: string;
    cycle: string;
    dia_semana_tiempo: number;
    primera_visp: boolean;
    himno: number;
    s1_c: number;
    s1_a: number;
    s1_t: number;
    s2_c: number;
    s2_a: number;
    s2_t: number;
    s3_c: number;
    s3_a: number;
    s3_t: number;
    lb_c: number;
    lb_t: number;
    responsorios: number[];
    ce_a: number;
    preces_i: number;
    preces_r: number;
    preces_c: number[];
    invi_pn: number;
    o_final: number;
};

export type CompletoriumSchema = {
    idd: number;
    oracion: string;
    himno: string;
    s1_c: string;
    s1_a: string;
    s1_t: string;
    s2_c?: string;
    s2_a?: string;
    s2_t?: string;
    lb_c: string;
    lb_t: string;
    responsorio: string[];
    responsorio_pascua: string[];
    antifona_triduo: string;
    antifona_inalbis: string;
    ce_a: string;
    final: string;
};

export interface OfficiumSchema {
    id: string;                    // Unique identifier (e.g., "advent_1_friday")
    cycle: string;                 // Liturgical cycle (e.g., "ANY")
    dia_semana_tiempo: number;     // Day of the week or time (e.g., 0)
    himno: number;                 // Hymn ID (e.g., 3391)

    // Psalm 1: citation, antiphon, title
    s1_c: number;
    s1_a: number;
    s1_t: number;

    // Psalm 2: citation, antiphon, title
    s2_c: number;
    s2_a: number;
    s2_t: number;

    // Psalm 3: citation, antiphon, title
    s3_c: number;
    s3_a: number;
    s3_t: number;

    // First responsory
    responsorio1: number[];

    // Short reading (lectio brevis): title, citation, text
    lb_tit: number[] | number;
    lb_c: number[] | number;
    lb_texto: number[] | number;

    // Second responsory (and variant)
    responsorio2: number[];
    responsorio2B: number[];

    // Long reading (lectio prolixa): title, citation, text
    lp_tit: number[] | number;
    lp_c: number[] | number;
    lp_texto: number[] | number;

    // Third responsory (and variant)
    responsorio3: number[];
    responsorio3B: number[];

    // Final prayer
    o_final: number;
};