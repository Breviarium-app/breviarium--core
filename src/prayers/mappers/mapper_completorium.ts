import {CompletoriumSchema, CompletoriumSchemaOutput} from "@/prayer-manager-interface.ts";
import type {CompletoriumWeek} from "@/dataset/types.ts";

export function mapper_completorium(date: any, days: CompletoriumWeek): CompletoriumSchemaOutput | undefined {
    const currentDate = date || new Date();

    const dayOfWeek = currentDate.getDay();

    const item: CompletoriumSchema = days[dayOfWeek];

    return {
        "idd": item.idd,
        "oracion": item.oracion,
        "himno": item.himno,
        "primer_salmo_cita": item.s1_c,
        "primer_salmo_antifona": item.s1_a,
        "primer_salmo_texto": item.s1_t,
        "segundo_salmo_cita": item.s2_c,
        "segundo_salmo_antifona": item.s2_a,
        "segundo_salmo_texto": item.s2_t,
        "lectura_biblica_cita": item.lb_c,
        "lectura_biblica_texto": item.lb_t,
        "responsorio": item.responsorio.map((text: any) => text),
        "responsorio_pascua": item.responsorio_pascua.map((text: any) => text),
        "antifona_triduo": item.antifona_triduo,
        "antifona_inalbis": item.antifona_inalbis,
        "cantico_evangelico_antifona": item.ce_a,
        "final": item.final,
    };
}