import {describe, expect, it} from "vitest";
import {finder_intermediate} from "@/prayers/finders/finder_intermediate.ts";
import all_tertia from '@/prayers/db/all_tertia.json';

const prev = {
    id: 'mary_mother_of_god',
    cycle: 'ANY',
    himno: 1178,
    s1_c: 3351,
    s1_a: 3798,
    s1_t: 3352,
    s2_c: 3352,
    s2_a: '',
    s2_t: 3353,
    s3_c: 3353,
    s3_a: '',
    s3_t: 3354,
    lb_c: 1839,
    lb_t: 1840,
    responsorios: [7801, 7802],
    o_final: 1841
}

const after = {
    id: 'mary_mother_of_god',
    cycle: 'ANY',
    dia_semana_tiempo: '',
    himno: 'El mundo brilla de alegría.\n' +
        'Se renueva la faz de la tierra.\n' +
        'Gloria al Padre, y al Hijo, y al Espíritu Santo.\n' +
        '\n' +
        'Esta es la hora\n' +
        'en que rompe el Espíritu\n' +
        'el techo de la tierra,\n' +
        'y una lengua de fuego innumerable\n' +
        'purifica, renueva, enciende, alegra\n' +
        'las entrañas del mundo.\n',
    primer_salmo_cita: 'Salmo 117-I: Himno de acción de gracias después de la victoria',
    primer_salmo_antifona: '_José y María, la madre de Jesús, estaban admirados por lo que se decía de él._',
    primer_salmo_texto: 'Dad gracias al Señor porque es bueno,\n' +
        'porque es eterna su misericordia.\n' +
        '\n' +
        'Diga la casa de Israel:\n' +
        'eterna es su misericordia.\n' +
        '\n' +
        'Diga la casa de Aarón:\n' +
        'eterna es su misericordia.\n' +
        '\n' +
        'Digan los fieles del Señor:\n' +
        'eterna es su misericordia.\n',
    segundo_salmo_cita: 'Salmo 117-II',
    segundo_salmo_antifona: '',
    segundo_salmo_texto: 'Todos los pueblos me rodeaban,\n' +
        'en el nombre del Señor los rechacé;\n' +
        'me rodeaban cerrando el cerco,\n' +
        'en el nombre del Señor los rechacé;\n' +
        'me rodeaban como avispas,\n' +
        'ardiendo como fuego en las zarzas,\n' +
        'en el nombre del Señor los rechacé.\n',
    tercer_salmo_cita: 'Salmo 117-III:',
    tercer_salmo_antifona: '',
    tercer_salmo_texto: 'Abridme las puertas del triunfo,\n' +
        'y entraré para dar gracias al Señor.\n' +
        '\n' +
        '- Esta es la puerta del Señor:\n' +
        'los vencedores entrarán por ella.\n' +
        '\n' +
        '- Te doy gracias porque me escuchaste\n' +
        'y fuiste mi salvación.\n' +
        '\n' +
        'La piedra que desecharon los arquitectos\n' +
        'es ahora la piedra angular.\n' +
        'Es el Señor quien lo ha hecho,\n' +
        'ha sido un milagro patente.\n',
    lectura_biblica_cita: 'So 3, 14.15b',
    lectura_biblica: 'Regocíjate, hija de Sión; grita de júbilo, Israel; alégrate y gózate de todo corazón, Jerusalén. El Señor será el rey de Israel, en medio de ti.',
    responsorios: [
        '$℣. $El Señor se acordó de su misericordia. Aleluya.',
        '$℟. $Y de su fidelidad en favor de la casa de Israel. Aleluya.'
    ],
    oracion_final: 'Dios y Señor nuestro, que por la maternidad virginal de María entregaste a los hombres los bienes de la salvación, concédenos experimentar la intercesión de aquélla de quien hemos recibido a tu Hijo Jesucristo, el autor de la vida. Que vive y reina por los siglos de los siglos.'
}


describe("Mapper Tertia", () => {
    it("mapper tertia 01/01", () => {

        const result = finder_intermediate(prev, all_tertia);

        assert(result !== undefined);

        expect(result.id).eq(after.id);
        expect(result.cycle).eq(after.cycle);
        expect(result.himno).contains(after.himno);
        expect(result.primer_salmo_cita).contains(after.primer_salmo_cita);
        expect(result.primer_salmo_antifona).contains(after.primer_salmo_antifona);
        expect(result.primer_salmo_texto).contains(after.primer_salmo_texto);
        expect(result.segundo_salmo_cita).contains(after.segundo_salmo_cita);
        expect(result.segundo_salmo_antifona).contains(after.segundo_salmo_antifona);
        expect(result.segundo_salmo_texto).contains(after.segundo_salmo_texto);
        expect(result.lectura_biblica).contains(after.lectura_biblica);
        expect(result.lectura_biblica_cita).contains(after.lectura_biblica_cita);
        expect(result.responsorios[0]).contains(after.responsorios[0]);
        expect(result.oracion_final).contains(after.oracion_final);
    });

});
