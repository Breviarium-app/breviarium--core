export interface PrayerManagerInterface {
    getLaudes: (date?: Date) => LaudesSchema | undefined;
}

export type LaudesSchema =   {
    "id": string,
    "cycle": string,
    "dia_semana_tiempo": number,
    "himno": number,
    "s1_c": number,
    "s1_a": number,
    "s1_t": number,
    "s2_c": number,
    "s2_a": number,
    "s2_t": number,
    "s3_c": number,
    "s3_a": number,
    "s3_t": number,
    "lb_c": number,
    "lb_t": number,
    "responsorios": number[],
    "ce_a": number, // cántico evangelio antífona
    "preces_i": number,
    "preces_r": number,
    "preces_c": number[],
    "invi_pn": number,
    "o_final": number
}