export interface PrayerManagerInterface {
    getLaudes: (date?: Date) => LaudesSchema | undefined;

    getVesperae(date?: Date): VesperaeSchema | undefined;

    getTercia(date?: Date): IntermediateSchema | undefined;

    getSexta(date?: Date): IntermediateSchema | undefined;

    getNona(date?: Date): IntermediateSchema | undefined;

    getLectures(date?: Date): LecturesSchema | undefined;

    getCompletorium(date?: Date): CompletoriumSchema | undefined;

    getInvitatorium(date?: Date): InvitatoriumSchema | undefined;
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