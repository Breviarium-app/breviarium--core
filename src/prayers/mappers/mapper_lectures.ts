import {LecturesSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_lectures(item: any): LecturesSchemaOutput {

    // console.log("lectures prev", item);

    const result = {
        id: item.id,
        cycle: item.cycle,
        fecha_anio_liturgico: findText('lecturas_fecha_anio_liturgico', item.fecha_anio_liturgico),
        tiempo_ciclo_paridad: item.tiempo_ciclo_paridad,
        celebraciones_posibles: item.celebraciones_posibles.map((id:any) => findText('celebraciones', id)),
        lecturas: item.lecturas.map((item:any) =>
            { return {ref: findText('lecturas_referencia', item.ref), texto: findText('lecturas_texto', item.texto), type: item.type} }
        )
        }

    // console.log("lectures post", result);
    return result;
}