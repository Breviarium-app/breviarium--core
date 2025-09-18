import {OfficiumSchema, OfficiumSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_officium(item: OfficiumSchema | any): OfficiumSchemaOutput | undefined {

    console.log("!!!! item", item)
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
        //
        // "responsorio1": item.responsorio1.map((id: any) => findText('responsorios', id)),
        // "lectura_biblica_titulo": Array.isArray(item.lb_tit) ? item.lb_tit.map((id: any) => findText('oficio_titulos', id)) : findText('oficio_titulos', item.lb_tit),
        // "lectura_biblica_cita": Array.isArray(item.lb_c) ? item.lb_c.map((id: any) => findText('oficio_citas', id)) : findText('oficio_citas', item.lb_c),
        // "lectura_biblica_texto": Array.isArray(item.lb_texto) ? item.lb_texto.map((id: any) => findText('oficio_textos', id)) : findText('oficio_textos', item.lb_texto),
        // "responsorio2": item.responsorio2.map((id: any) => findText('responsorios', id)),
        // "responsorio2B": item.responsorio2B.map((id: any) => findText('responsorios', id)),
        // "lectura_patristica_titulo": Array.isArray(item.lp_tit) ? item.lp_tit.map((id: any) => findText('oficio_titulos', id)) : findText('oficio_titulos', item.lp_tit),
        // "lectura_patristica_cita": Array.isArray(item.lp_c) ? item.lp_c.map((id: any) => findText('oficio_citas', id)) : findText('oficio_citas', item.lp_c),
        // "lectura_patristica_texto": Array.isArray(item.lp_texto) ? item.lp_texto.map((id: any) => findText('oficio_textos', id)) : findText('oficio_textos', item.lp_texto),
        // "responsorio3": item.responsorio3.map((id: any) => findText('responsorios', id)),
        // "responsorio3B": item.responsorio3B.map((id: any) => findText('responsorios', id)),

        // fin
        "oracion_final": findText('oraciones_finales', item.o_final),
    }
    return result;
}