import {describe, expect, it} from "vitest";
import {mapper_evangelium} from "@/prayers/mappers/mapper_evangelium.ts";
import {EvangeliumSchemaOutput, LecturesSchema} from "@/prayer-manager-interface.ts";

const prev: LecturesSchema = {
    id: 'mary_mother_of_god',
    cycle: 'ANY',
    // fecha_anio_liturgico: 45,
    // tiempo_ciclo_paridad: 45,
    // celebraciones_posibles: [58],
    lecturas: [
        {ref: 178, texto: 223, type: 'FIRSTLECTURE'},
        {ref: 179, texto: 224, type: 'PSALM'},
        {ref: 180, texto: 225, type: 'SECONDLECTURE'},
        {ref: 181, texto: 6074, type: 'ACCLAMATION'},
        {ref: 182, texto: 227, type: 'GOSPEL'}
    ]
}

const post: EvangeliumSchemaOutput = {
    id: 'mary_mother_of_god',
    cycle: 'ANY',
    evangelium_lectiones: [
        {
            ref: 'Lc 2, 16-21: _Encontraron a María y a José y al niño. Y a los ocho días, le pusieron por nombre Jesús._',
            texto: 'En aquel tiempo, los pastores fueron corriendo hacia Belén y encontraron a María y a José, y al niño acostado en el pesebre. \n' +
                '\n' +
                'Al verlo, contaron lo que se les había dicho de aquel niño. Todos los que lo oían se admiraban de lo que les habían dicho los pastores. María, por su parte, conservaba todas estas cosas, meditándolas en su corazón.\n' +
                '\n' +
                'Y se volvieron los pastores dando gloria y alabanza a Dios por todo lo que habían oído y visto, conforme a lo que se les había dicho.\n' +
                '\n' +
                'Cuando se cumplieron los ocho días para circuncidar al niño, le pusieron por nombre Jesús, como lo había llamado el ángel antes de su concepción.\n',
            type: 'GOSPEL'
        }
    ]
}


describe("Mapper Evangelium", () => {
    it("mapper Evangelium", () => {

        const result = mapper_evangelium([prev]);

        assert(result !== undefined);

        expect(result.id).eq(post.id);
        expect(result.cycle).eq(post.cycle);
        expect(result.evangelium_lectiones.length).eq(post.evangelium_lectiones.length);
        console.assert(result.evangelium_lectiones)
        expect(result.evangelium_lectiones[0].texto).eq(post.evangelium_lectiones[0].texto);
        expect(result.evangelium_lectiones[0].ref).eq(post.evangelium_lectiones[0].ref);
        expect(result.evangelium_lectiones[0].type).eq(post.evangelium_lectiones[0].type);
    });

});
