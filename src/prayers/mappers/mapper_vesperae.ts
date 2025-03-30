import {VesperaeSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_vesperae(item: any): VesperaeSchemaOutput | undefined {

    // console.log("vesperae prev", item);

    const result = {
        "id": item.id,
        "cycle": item.cycle,
        "dia_semana_tiempo": findText('celebraciones', item.dia_semana_tiempo),
        "primeras_visperas": item.primera_visp,
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
        "lectura_biblica_cita": findText('lectura_breve_citas', item.lb_c),
        "lectura_biblica": findText('lectura_breve_textos', item.lb_t),
        "responsorios": item.responsorios.map((id: any) => findText('responsorios', id)),
        "cantico_evangelico_antifona": findText('cantico_evangelico_antifonas', item.ce_a),
        "preces_intro": findText('preces_intro', item.preces_i),
        "preces_respuesta": findText('preces_respuesta', item.preces_r),
        "preces_contenido": item.preces_c.map((id: any) => findText('preces_contenido', id)),
        "invitacion_padrenuestro": findText('invitacion_padrenuestro', item.invi_pn),
        "oracion_final": findText('oraciones_finales', item.o_final),
    }

    // console.log("vesperae post", result);
    return result;
}