import {describe, expect, it} from "vitest";
import {mapper_laudes} from "@/prayers/mappers/mapper_laudes.ts";

const laudes_pre_0 = {
    id: 'lent_4_sunday',
    cycle: 'YEAR_C',
    dia_semana_tiempo: 2298,
    himno: 75,
    s1_c: 93,
    s1_a: 1601,
    s1_t: 94,
    s2_c: 94,
    s2_a: 1602,
    s2_t: 95,
    s3_c: 95,
    s3_a: 1603,
    s3_t: 96,
    lb_c: 263,
    lb_t: 264,
    responsorios: [4904, 4905, 4906, 4907, 4908, 4909],
    ce_a: 840,
    preces_i: 513,
    preces_r: 513,
    preces_c: [3401, 3402, 3403, 3404],
    invi_pn: 8,
    o_final: 580,
}

const laudes_post_0 = {
    id: 'lent_4_sunday',
    cycle: 'YEAR_C',
    dia_semana_tiempo: 'IV Domingo de Cuaresma «Laetare» Ciclo C, _solemnidad_',
    himno: 'Éste es el día del Señor.\n' +
        'Éste es el tiempo de la misericordia.\n' +
        '\n' +
        'Delante de tus ojos \n' +
        'ya no enrojeceremos\n' +
        'a causa del antiguo \n' +
        'pecado de tu pueblo.\n',
    primer_salmo_cita: 'Salmo 117: Himno de acción de gracias después de la victoria',
    primer_salmo_antifona: '_Tú eres mi Dios, te doy gracias; Dios mío, yo te ensalzo._',
    primer_salmo_texto: 'Dad gracias al Señor porque es bueno,\n' +
        'porque es eterna su misericordia.\n' +
        '\n' +
        'Diga la casa de Israel:\n' +
        'eterna es su misericordia.\n',
    segundo_salmo_cita: 'Daniel 3, 52-57: Que la creación entera alabe al Señor',
    segundo_salmo_antifona: '_Capaz eres, Señor, de liberarnos de la mano del poderoso; líbranos, Señor, Dios nuestro._',
    segundo_salmo_texto: 'Bendito eres, Señor, Dios de nuestros padres:\n' +
        'a ti gloria y alabanza por los siglos.\n' +
        '\n' +
        'Bendito tu nombre, santo y glorioso:\n' +
        'a él gloria y alabanza por los siglos.\n' +
        '\n' +
        'Bendito eres en el templo de tu santa gloria:\n' +
        'a ti gloria y alabanza por los siglos.\n',
    tercer_salmo_cita: 'Salmo 150: Alabad al Señor',
    tercer_salmo_antifona: '_Alabad al Señor por sus obras magnificas._',
    tercer_salmo_texto: 'Alabad al Señor en su templo,\n' +
        'alabadlo en su fuerte firmamento.\n' +
        '\n' +
        'Alabadlo por sus obras magníficas,\n' +
        'alabadlo por su inmensa grandeza.\n' +
        '\n' +
        'Alabadlo tocando trompetas,\n' +
        'alabadlo con arpas y cítaras,\n' +
        '\n' +
        'alabadlo con tambores y danzas,\n' +
        'alabadlo con trompas y flautas,\n',
    lectura_biblica_cita: 'Ne 8, 9a.10',
    lectura_biblica: 'Hoy es un día consagrado a nuestro Dios: No hagáis duelo ni lloréis; pues es un día consagrado a nuestro Dios. No estéis  tristes, pues el gozo en el Señor es vuestra fortaleza.',
    responsorios: [
        '$℣. $Cristo, Hijo de Dios vivo, ten piedad de nosotros.',
    ],
    cantico_evangelico_antifona: '_Padre, he pecado contra ti; ya no merezco llamarme hijo tuyo._',
    preces_intro: 'Glorifiquemos a Dios, cuya bondad es infinita, y elevemos a él nuestra oración por medio de Jesucristo, que está siempre vivo para interceder en favor nuestro; digámosle:',
    preces_respuesta: '_Enciende, Señor, en nosotros la llama de tu amor._',
    preces_contenido: [
        '- Dios de misericordia, haz que hoy nos entreguemos generosamente a las obras de amor al prójimo, _para que tu misericordia, a través de nosotros, llegue a todos los hombres._',
    ],
    invitacion_padrenuestro: '_Movidos ahora todos por el mismo Espíritu que nos da Cristo resucitado, acudamos a Dios, de quien somos verdaderos hijos, diciendo:_',
    oracion_final: 'Señor, que reconcilias contigo a los hombres por tu Palabra hecha carne, haz que el pueblo cristiano se apresure, con fe viva y entrega generosa, a celebrar las próximas fiestas pascuales. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.'
}

describe("Mapper Laudes", () => {
    it("mapper laudes - laudes_pre_0", () => {

        const mapperResult = mapper_laudes([laudes_pre_0])
        const result = mapperResult?.[0];

        assert(result !== undefined);

        expect(result.id).eq(laudes_post_0.id);
        expect(result.cycle).eq(laudes_post_0.cycle);
        expect(result.himno).contains(laudes_post_0.himno);
        expect(result.primer_salmo_cita).contains(laudes_post_0.primer_salmo_cita);
        expect(result.primer_salmo_antifona).contains(laudes_post_0.primer_salmo_antifona);
        expect(result.primer_salmo_texto).contains(laudes_post_0.primer_salmo_texto);
        expect(result.segundo_salmo_cita).contains(laudes_post_0.segundo_salmo_cita);
        expect(result.segundo_salmo_antifona).contains(laudes_post_0.segundo_salmo_antifona);
        expect(result.segundo_salmo_texto).contains(laudes_post_0.segundo_salmo_texto);
        expect(result.lectura_biblica).contains(laudes_post_0.lectura_biblica);
        expect(result.lectura_biblica_cita).contains(laudes_post_0.lectura_biblica_cita);
        expect(result.responsorios[0]).contains(laudes_post_0.responsorios[0]);
        expect(result.cantico_evangelico_antifona).contains(laudes_post_0.cantico_evangelico_antifona);
        expect(result.preces_intro).contains(laudes_post_0.preces_intro);
        expect(result.preces_respuesta).contains(laudes_post_0.preces_respuesta);
        expect(result.preces_contenido[0]).contains(laudes_post_0.preces_contenido[0]);
        expect(result.invitacion_padrenuestro).contains(laudes_post_0.invitacion_padrenuestro);
        expect(result.oracion_final).contains(laudes_post_0.oracion_final);
    });

});
