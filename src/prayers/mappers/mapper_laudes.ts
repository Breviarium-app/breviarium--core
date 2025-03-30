import {LaudesSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_laudes(item: any): LaudesSchemaOutput | undefined {

    console.log("prev", item);

    const result = {
        "id": "our_lord_jesus_christ_king_of_the_universe",
        "cycle": "YEAR_C",
        "dia_semana_tiempo": 0,
        "himno": 69,
        "primer_salmo_cita": 63,
        "primer_salmo_antifona": 62,
        "primer_salmo_texto": 64,
        "segundo_salmo_cita": 64,
        "segundo_salmo_antifona": 63,
        "segundo_salmo_texto": 65,
        "tercer_salmo_cita": 65,
        "tercer_salmo_antifona": 64,
        "tercer_salmo_texto": 66,
        "lectura_biblica_cita": 65,
        "lectura_biblica": 66,
        "responsorios": [
            15,
            16,
            17,
            18,
            19,
            20
        ],
        "cantico_evangelico_antifona": 6,
        "preces_intro": 0,
        "preces_respuesta": 0,
        "preces_contenido": [
            0,
            1,
            2,
            3,
            4
        ],
        "invitacion_padrenuestro": 0,
        "oracion_final": 67
    }

    item.dia_semana_tiempo = findText('celebraciones', item.dia_semana_tiempo);
    item.himno = findText('himnos', item.himno);


    console.log("post", result);
    return result;
}