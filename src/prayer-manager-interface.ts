import {Color} from "romcal";
import {LiturgicalColors} from "@/prayers/types.ts";

export interface PrayerManagerInterface {
    getInvitatorium(date?: Date): Promise<InvitatoriumSchemaOutput | undefined>;

    getLaudes(date?: Date): Promise<LaudesSchemaOutput | undefined>;

    getVesperae(date?: Date): Promise<VesperaeSchemaOutput | undefined>;

    getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined>;

    getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined>;

    getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined>;

    getCompletorium(date?: Date): Promise<CompletoriumSchemaOutput | undefined>;

    getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined>;

    getLectures(date?: Date): Promise<LecturesSchemaOutput[] | undefined>;

    getEvangelium(date?: Date): Promise<EvangeliumSchemaOutput | undefined>;
}


export type InvitatoriumSchema = {
    id: string;
    val: number;
};

export type InvitatoriumSchemaOutput = {
    id: string;
    val: string;
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
    dia_semana_tiempo: string;
    himno: string;
    primer_salmo_cita: string;
    primer_salmo_antifona: string;
    primer_salmo_texto: string;
    segundo_salmo_cita: string;
    segundo_salmo_antifona: string;
    segundo_salmo_texto: string;
    tercer_salmo_cita: string;
    tercer_salmo_antifona: string;
    tercer_salmo_texto: string;
    lectura_biblica_cita: string;
    lectura_biblica: string;
    responsorios: string[];
    cantico_evangelico_antifona: string;
    preces_intro: string;
    preces_respuesta: string;
    preces_contenido: string[];
    invitacion_padrenuestro: string;
    oracion_final: string;
}

export type SingleLectureSchema = {
    ref: number;
    texto: number;
    type: string; //"FIRSTLECTURE" | "PSALM" | "GOSPEL";
}
export type SingleLectureSchemaOutput = {
    ref: string;
    texto: string;
    type: string; //"FIRSTLECTURE" | "PSALM" | "GOSPEL";
}

export type LecturesSchema = {
    id: string;
    cycle: string;
    fecha_anio_liturgico: number;
    tiempo_ciclo_paridad: number;
    celebraciones_posibles: number[];
    lecturas: SingleLectureSchema[];
};

export type LecturesSchemaOutput = {
    id: string;
    cycle: string;
    fecha_anio_liturgico?: string;
    tiempo_ciclo_paridad?: string;
    celebraciones_posibles: string[];
    lecturas: SingleLectureSchemaOutput[];
};

export type EvangeliumSchemaOutput = {
    id: string;
    cycle: string;
    evangelium_lectiones: SingleLectureSchemaOutput[];
}

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

export type IntermediateSchemaOutput = {
    id: string;
    cycle: string;
    himno: string;
    primer_salmo_cita: string;
    primer_salmo_antifona: string;
    primer_salmo_texto: string;
    segundo_salmo_cita: string;
    segundo_salmo_antifona: string;
    segundo_salmo_texto: string;
    tercer_salmo_cita: string;
    tercer_salmo_antifona: string;
    tercer_salmo_texto: string;
    lectura_biblica_cita: string;
    lectura_biblica: string;
    responsorios: string[];
    oracion_final: string;
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
export type VesperaeSchemaOutput = {
    id: string;
    cycle: string;
    dia_semana_tiempo: string;
    primeras_visperas: boolean;
    himno: string;
    primer_salmo_cita: string;
    primer_salmo_antifona: string;
    primer_salmo_texto: string;
    segundo_salmo_cita: string;
    segundo_salmo_antifona: string;
    segundo_salmo_texto: string;
    tercer_salmo_cita: string;
    tercer_salmo_antifona: string;
    tercer_salmo_texto: string;
    lectura_biblica_cita: string;
    lectura_biblica: string;
    responsorios: string[];
    cantico_evangelico_antifona: string;
    preces_intro: string;
    preces_respuesta: string;
    preces_contenido: string[];
    invitacion_padrenuestro: string;
    oracion_final: string;
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

export type CompletoriumSchemaOutput = {
    idd?: number;
    oracion?: string;
    himno: string;
    primer_salmo_cita: string;
    primer_salmo_antifona: string;
    primer_salmo_texto: string;
    segundo_salmo_cita?: string;
    segundo_salmo_antifona?: string;
    segundo_salmo_texto?: string;
    lectura_biblica_cita: string;
    lectura_biblica_texto: string;
    responsorio: string[];
    responsorio_pascua: string[];
    antifona_triduo: string;
    antifona_inalbis: string;
    cantico_evangelico_antifona: string;
    final: string;
};

export interface OfficiumSchema {
    id: string;                    // Unique identifier (e.g., "advent_1_friday")
    cycle: string;                 // Liturgical cycle (e.g., "ANY")
    himno: number;                 // Hymn ID (e.g., 3391)
    s1_c: number;
    s1_a: number;
    s1_t: number;
    s2_c: number;
    s2_a: number;
    s2_t: number;
    s3_c: number;
    s3_a: number;
    s3_t: number;
    responsorio1: number[];
    lb_tit: number[] | number;
    lb_c: number[] | number;
    lb_texto: number[] | number;
    responsorio2: number[];
    responsorio2B: number[];
    lp_tit: number[] | number;
    lp_c: number[] | number;
    lp_texto: number[] | number;
    responsorio3: number[];
    responsorio3B: number[];
    o_final: number;
}

export interface OfficiumSchemaOutput {
    id: string;                    // Unique identifier (e.g., "advent_1_friday")
    cycle: string;                 // Liturgical cycle (e.g., "ANY")
    himno: string;                 // Hymn ID (e.g., 3391)
    primer_salmo_cita: string;
    primer_salmo_antifona: string;
    primer_salmo_texto: string;
    segundo_salmo_cita: string;
    segundo_salmo_antifona: string;
    segundo_salmo_texto: string;
    tercer_salmo_cita: string;
    tercer_salmo_antifona: string;
    tercer_salmo_texto: string;
    responsorio1: string[];
    lectura_biblica_titulo: string[] | string;
    lectura_biblica_cita: string[] | string;
    lectura_biblica_texto: string[] | string;
    responsorio2: string[];
    responsorio2B: string[];
    lectura_patristica_titulo: string[] | string;
    lectura_patristica_cita: string[] | string;
    lectura_patristica_texto: string[] | string;
    responsorio3: string[];
    responsorio3B: string[];
    oracion_final: string;
}

export type LiturgyInformationOutput = {
    psaltery_week?: string; // I, II, III, IV
    cycle?: string;
    color?: Color;
    color_hex?: LiturgicalColors;
    celebration?: string;
    rank?: string;
    seasons?: string[];
    precedence?: string;
    periods?: string[];
    calendar?: object;
}