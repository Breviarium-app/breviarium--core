import {IntermediateSchemaOutput} from "@/prayer-manager-interface.ts";
import {mapper_intermediate} from "@/prayers/mappers/mapper_intermediate.ts";

export function finder_intermediate(dayCalendar: any, selectedHour: any): IntermediateSchemaOutput | undefined {

    const resultSelected =
        selectedHour.find((element: any) => element.id === dayCalendar?.id && element.cycle === 'ANY')
        || selectedHour.find((element: any) => element.id === dayCalendar?.id && element.cycle === 'MEMORY')
        || selectedHour.find((element: any) => element.id === dayCalendar?.id && element.cycle === 'FEAST');

    return mapper_intermediate(dayCalendar, resultSelected, selectedHour);
}