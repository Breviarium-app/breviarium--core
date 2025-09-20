import {IntermediateSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_intermediate(_dayCalendar: any, element: any, _selectedHour: any): IntermediateSchemaOutput | undefined {
    let result: IntermediateSchemaOutput | undefined;
    result = element[0];
    if (!Array.isArray(element)) {
        throw new Error("Elemento no es un array");
    }
    const populateContent = (item: any) => ({
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
        "lectura_biblica_cita": findText('lectura_breve_citas', item.lb_c),
        "lectura_biblica": findText('lectura_breve_textos', item.lb_t),
        "responsorios": item.responsorios.map((id: any) => findText('responsorios', id)),
        "oracion_final": findText('oraciones_finales', item.o_final),
    });
    if (result) {
        result = populateContent(result);
    }


    return result;
}