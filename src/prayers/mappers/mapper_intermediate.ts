import {IntermediateSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_intermediate(dayCalendar: any, element: any, selectedHour: any): IntermediateSchemaOutput | undefined {

    let result = element;
    if (element) {
        const populateContent = (item: any) => ({
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
            "lectura_biblica_cita": findText('lectura_breve_citas', item.lb_c),
            "lectura_biblica": findText('lectura_breve_textos', item.lb_t),
            "responsorios": item.responsorios.map((id: any) => findText('responsorios', id)),
            "oracion_final": findText('oraciones_finales', item.o_final),
        });

        result = populateContent(element);

        // If MEMORY, replace contentByDay with ferialElement values
        if (element.cycle === 'MEMORY' && dayCalendar?.weekday?.id) {
            const ferialElement = selectedHour.find((x: any) => x.id === dayCalendar.weekday.id);
            if (ferialElement) {
                result = populateContent(ferialElement);
            }
        }

        // If FEAST, replace only specific fields in contentByDay with ferialElement values
        if (element.cycle === 'FEAST' && dayCalendar?.weekday?.id) {
            const ferialElement = selectedHour.find((x: any) => x.id === dayCalendar.weekday.id);
            if (ferialElement) {
                result = {
                    ...result,
                    [`primer_salmo_cita`]: findText('salmos_citas', ferialElement.primer_salmo_cita),
                    [`primer_salmo_texto`]: findText('salmos_textos', ferialElement.primer_salmo_texto),
                    [`segundo_salmo_cita`]: findText('salmos_citas', ferialElement.segundo_salmo_cita),
                    [`segundo_salmo_texto`]: findText('salmos_textos', ferialElement.segundo_salmo_texto),
                    [`tercer_salmo_cita`]: findText('salmos_citas', ferialElement.tercer_salmo_cita),
                    [`tercer_salmo_texto`]: findText('salmos_textos', ferialElement.tercer_salmo_texto),
                };
            }
        }
    }

    return result;
}