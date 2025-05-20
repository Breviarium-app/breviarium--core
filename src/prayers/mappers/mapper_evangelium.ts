import {
    EvangeliumSchemaOutput,
    LecturesSchema,
    SingleLectureSchema,
    SingleLectureSchemaOutput
} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";
import {LecturesType} from "@/prayers/types.ts";

export function mapper_evangelium(items: LecturesSchema[]): EvangeliumSchemaOutput {

    const item = items[0];

    console.log("mapper_evangelium prev", item);
    const evangeliums: SingleLectureSchemaOutput[] = []
    item?.lecturas.forEach((lectura:SingleLectureSchema) => {
        if(lectura.type == LecturesType.GOSPEL){
            evangeliums.push({
                ref: findText('lecturas_referencia', lectura.ref),
                texto: findText('lecturas_texto', lectura.texto),
                type: lectura.type
            });
        }
    })
    const result = {
        id: item.id,
        cycle: item.cycle,
        evangelium_lectiones: evangeliums
    }

    console.log("mapper_evangelium post", result);
    return result;

}