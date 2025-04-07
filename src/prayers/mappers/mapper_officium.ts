import {OfficiumSchema, OfficiumSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_officium(item: OfficiumSchema | any): OfficiumSchemaOutput | undefined {
    console.log("resultSelected getOfficium", item);

    const result = {
        "id": item.id,
        "cycle": item.cycle,
        "dia_semana_tiempo": findText('celebraciones', item.dia_semana_tiempo),
        "himno": findText('himnos', item.himno),
        "primer_salmo_cita": findText('salmos_citas', item.s1_c),
        "primer_salmo_antifona": findText('salmos_antifonas', item.s1_a),
        "primer_salmo_texto": findText('salmos_textos', item.s1_t),
        "segundo_salmo_cita": findText('salmos_citas', item.s2_c),
        "segundo_salmo_antifona": findText('salmos_antifonas', item.s2_a),
        "segundo_salmo_texto": findText('salmos_textos', item.s2_t),
        "tercer_salmo_cita": findText('salmos_citas', item.s3_c),
        "tercer_salmo_antifona": findText('salmos_antifonas', item.s3_a),
        "tercer_salmo_texto": findText('salmos_textos', item.s3_t),
        "responsorio1": item.responsorio1.map((id: any) => findText('responsorios', id)),
        "lectura_biblica_titulo": Array.isArray(item.lb_tit) ? item.lb_tit.map((id: any) => findText('oficio_titulos', id)) : findText('oficio_titulos', item.lb_tit),
        "lectura_biblica_cita": Array.isArray(item.lb_c) ? item.lb_c.map((id: any) => findText('oficio_citas', id)) : findText('oficio_citas', item.lb_c),
        "lectura_biblica_texto": Array.isArray(item.lb_texto) ? item.lb_texto.map((id: any) => findText('oficio_textos', id)) : findText('oficio_textos', item.lb_texto),
        "responsorio2": item.responsorio2.map((id: any) => findText('responsorios', id)),
        "responsorio2B": item.responsorio2B.map((id: any) => findText('responsorios', id)),
        "lectura_patristica_titulo": Array.isArray(item.lp_tit) ? item.lp_tit.map((id: any) => findText('oficio_titulos', id)) : findText('oficio_titulos', item.lp_tit),
        "lectura_patristica_cita": Array.isArray(item.lp_c) ? item.lp_c.map((id: any) => findText('oficio_citas', id)) : findText('oficio_citas', item.lp_c),
        "lectura_patristica_texto": Array.isArray(item.lp_texto) ? item.lp_texto.map((id: any) => findText('oficio_textos', id)) : findText('oficio_textos', item.lp_texto),
        "responsorio3": item.responsorio3.map((id: any) => findText('responsorios', id)),
        "responsorio3B": item.responsorio3B.map((id: any) => findText('responsorios', id)),
        "oracion_final": findText('oraciones_finales', item.o_final),
    }
    console.log("resultSelected getOfficium", result);
    return result;
}