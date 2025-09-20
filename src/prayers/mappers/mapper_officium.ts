import {OfficiumSchema, OfficiumSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_officium(item: OfficiumSchema | any): OfficiumSchemaOutput | undefined {
    console.log("officium result", item)
    const result = {
        "id": item.id,
        "cycle": item.cycle,
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
        "lectura_biblica_titulo_a": findText('oficio_titulos', item.lb_tit_a),
        "lectura_biblica_titulo_i": findText('oficio_titulos', item.lb_tit_i),
        "lectura_biblica_titulo_p": findText('oficio_titulos', item.lb_tit_p),
        "lectura_biblica_cita_a": findText('oficio_citas', item.lb_cita_a),
        "lectura_biblica_cita_i": findText('oficio_citas', item.lb_cita_i),
        "lectura_biblica_cita_p": findText('oficio_citas', item.lb_cita_p),
        "lectura_biblica_texto_a": findText('oficio_textos', item.lb_texto_a),
        "lectura_biblica_texto_i": findText('oficio_textos', item.lb_texto_i),
        "lectura_biblica_texto_p": findText('oficio_textos', item.lb_texto_p),
        "lectura_patristica_titulo_a": findText('oficio_titulos', item.lp_tit_a),
        "lectura_patristica_titulo_i": findText('oficio_titulos', item.lp_tit_i),
        "lectura_patristica_titulo_p": findText('oficio_titulos', item.lp_tit_p),
        "lectura_patristica_cita_a": findText('oficio_citas', item.lp_cita_a),
        "lectura_patristica_cita_i": findText('oficio_citas', item.lp_cita_i),
        "lectura_patristica_cita_p": findText('oficio_citas', item.lp_cita_p),
        "lectura_patristica_texto_a": findText('oficio_textos', item.lp_texto_a),
        "lectura_patristica_texto_i": findText('oficio_textos', item.lp_texto_i),
        "lectura_patristica_texto_p": findText('oficio_textos', item.lp_texto_p),
        "responsorio1": item.resp_1.map((id: any) => findText('responsorios', id)),
        "responsorio2_a": item.resp_2_a.map((id: any) => findText('responsorios', id)),
        "responsorio2_i": item.resp_2_i.map((id: any) => findText('responsorios', id)),
        "responsorio2_p": item.resp_2_p.map((id: any) => findText('responsorios', id)),
        "responsorio3_a": item.resp_3_a.map((id: any) => findText('responsorios', id)),
        "responsorio3_i": item.resp_3_i.map((id: any) => findText('responsorios', id)),
        "responsorio3_p": item.resp_3_p.map((id: any) => findText('responsorios', id)),
        "oracion_final": findText('oraciones_finales', item.o_final),
    }
    return result;
}