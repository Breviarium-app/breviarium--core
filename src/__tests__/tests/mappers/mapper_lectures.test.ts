import {describe, expect, it} from "vitest";
import {mapper_lectures} from "@/prayers/mappers/mapper_lectures.ts";

const prev = {
    id: 'mary_mother_of_god',
    cycle: 'ANY',
    fecha_anio_liturgico: 45,
    tiempo_ciclo_paridad: 45,
    celebraciones_posibles: [58],
    lecturas: [
        {ref: 178, texto: 223, type: 'FIRSTLECTURE'},
        {ref: 179, texto: 224, type: 'PSALM'},
        {ref: 180, texto: 225, type: 'SECONDLECTURE'},
        {ref: 181, texto: 6074, type: 'ACCLAMATION'},
        {ref: 182, texto: 227, type: 'GOSPEL'}
    ]
}

const post = {
    id: 'mary_mother_of_god',
    cycle: 'ANY',
    fecha_anio_liturgico: 'Domingo 1 de enero: Año litúrgico 2022 ~ 2023',
    tiempo_ciclo_paridad: 45,
    celebraciones_posibles: ['Santa María, Madre de Dios, _solemnidad_'],
    lecturas: [
        {
            ref: 'Nm 6, 22-27: _Invocarán mi nombre sobre los hijos de Israel y yo los bendeciré._',
            texto: 'El Señor habló a Moisés: «Di a Aarón y a sus hijos, esta es la fórmula con la que bendeciréis a los hijos de Israel:\n' +
                '\n' +
                '"El Señor te bendiga y te proteja,\n' +
                'ilumine su rostro sobre ti\n' +
                'y te conceda su favor.\n' +
                'El Señor te muestre su rostro\n' +
                'y te conceda la paz".\n' +
                '\n' +
                'Así invocarán mi nombre sobre los hijos de Israel y yo los bendeciré».',
            type: 'FIRSTLECTURE'
        },
        {
            ref: 'Sal 66, 2-8: _Que Dios tenga piedad y nos bendiga._',
            texto: 'Que Dios tenga piedad y nos bendiga,\n' +
                'ilumine su rostro sobre nosotros;\n' +
                'conozca la tierra tus caminos,\n' +
                'todos los pueblos tu salvación. R.\n' +
                '\n' +
                'Que canten de alegría las naciones,\n' +
                'porque riges el mundo con justicia\n' +
                'y gobiernas las naciones de la tierra. R.\n' +
                '\n' +
                'Oh Dios, que te alaben los pueblos,\n' +
                'que todos los pueblos te alaben.\n' +
                'Que Dios nos bendiga; que le teman\n' +
                'todos los confines de la tierra. R.',
            type: 'PSALM'
        },
        {
            ref: 'Ga 4, 4-7: _Envió Dios a su Hijo, nacido de mujer._',
            texto: 'Hermanos: Cuando llegó la plenitud del tiempo, envió Dios a su Hijo, nacido de mujer, nacido bajo la ley, para rescatar a los que estaban bajo la ley, para que recibiéramos la adopción filial.\n' +
                '\n' +
                'Como sois hijos, Dios envió a nuestros corazones el Espíritu de su Hijo, que clama: «¡"Abba", Padre!». \n' +
                '\n' +
                'Así que ya no eres esclavo, sino hijo; y si eres hijo, eres también heredero por voluntad de Dios.\n',
            type: 'SECONDLECTURE'
        },
        {
            ref: '_Aleluya, aleluya, aleluya._',
            texto: 'En muchas ocasiones habló Dios antiguamente a los padres por los profetas.\n' +
                'En esta etapa final, nos ha hablado por el Hijo.\n' +
                'Aleluya.',
            type: 'ACCLAMATION'
        },
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


describe("Mapper Lectures", () => {
    it("mapper Lectures", () => {

        const result = mapper_lectures(prev);

        assert(result !== undefined);

        expect(result.id).eq(post.id);
        expect(result.cycle).eq(post.cycle);
        // expect(result.celebraciones_posibles.length).eq(post.celebraciones_posibles.length);
        expect(result.lecturas.length).eq(post.lecturas.length);
        expect(result.lecturas[0].texto).eq(post.lecturas[0].texto);
        expect(result.lecturas[0].ref).eq(post.lecturas[0].ref);
        expect(result.lecturas[0].type).eq(post.lecturas[0].type);
        expect(result.lecturas[1].texto).eq(post.lecturas[1].texto);
        expect(result.lecturas[1].ref).eq(post.lecturas[1].ref);
        expect(result.lecturas[1].type).eq(post.lecturas[1].type);
    });

});
