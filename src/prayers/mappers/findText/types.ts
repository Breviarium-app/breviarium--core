export type TableCommonName =
  | "antifonas"
  | "cantico_evangelico_antifonas"
  | "invitatorios"
  | "himnos"
  | "invitacion_padrenuestro"
  | "lectura_breve_textos"
  | "lectura_breve_citas"
  | "lecturas_fecha_anio_liturgico"
  | "lecturas_referencia"
  | "lecturas_texto"
  | "oficio_titulos"
  | "oficio_citas"
  | "oficio_textos"
  | "oraciones_finales"
  | "preces_contenido"
  | "preces_intro"
  | "preces_respuesta"
  | "responsorios"
  | "salmos_antifonas"
  | "salmos_citas"
  | "salmos_textos"
  | "titulo_hora_liturgica";

export type TableCommon = {
  id: number;
  val: string;
};
