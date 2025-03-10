export interface PrayerManagerInterface {
    getLaudes: (date?: Date) => LaudesSchema | undefined;
}

export type LaudesSchema =   {
    "id": string,
    "cycle": string,
    "dia_semana_tiempo": number,
    "himno": number,
    "_1s_c": number,
    "_1s_a": number,
    "_1s_t": number,
    "_2s_c": number,
    "_2s_a": number,
    "_2s_t": number,
    "_3s_c": number,
    "_3s_a": number,
    "_3s_t": number,
    "lb_c": number,
    "lb_t": number,
    "responsorios": number[],
    "ce_a": number, // cántico evangelio antífona
    "preces_intro": number,
    "preces_respuesta": number,
    "preces_contenido": number[],
    "invitacion_padrenuestro": number,
    "oracion_final": number
}