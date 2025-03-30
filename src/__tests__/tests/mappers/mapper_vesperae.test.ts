import {describe, expect, it} from "vitest";
import {mapper_vesperae} from "@/prayers/mappers/mapper_vesperae.ts";

const prev = {
    id: 'mary_mother_of_god',
    cycle: 'YEAR_C',
    dia_semana_tiempo: 58,
    primera_visp: false,
    himno: 3768,
    s1_c: 4577,
    s1_a: 9383,
    s1_t: 4578,
    s2_c: 3424,
    s2_a: 9384,
    s2_t: 3425,
    s3_c: 11042,
    s3_a: 9385,
    s3_t: 11043,
    lb_c: 3399,
    lb_t: 3400,
    responsorios: [19081, 19082, 19083, 19084, 19085, 19086],
    ce_a: 1147,
    preces_i: 1141,
    preces_r: 1141,
    preces_c: [8996, 8997, 8998, 8999, 9000],
    invi_pn: 16,
    o_final: 112
}

const post = {
    id: 'mary_mother_of_god',
    cycle: 'YEAR_C',
    dia_semana_tiempo: 'Santa María, Madre de Dios, _solemnidad_',
    primeras_visperas: false,
    himno: 'Señor Jesús, el hombre en este suelo\n' +
        'cantar quiere tu amor,\n' +
        'y, junto con los ángeles del cielo,\n' +
        'te ofrece su loor.\n' +
        '\n' +
        'Este Jesús en brazos de María\n' +
        'es nuestra redención;\n' +
        'cielos y tierra con su abrazo unía\n' +
        'de paz y de perdón.\n',
    primer_salmo_cita: 'Salmo 121: La ciudad santa de Jerusalén',
    primer_salmo_antifona: '_¡Qué admirable intercambio! El Creador del género humano, tomando cuerpo y alma, nace de una virgen y, hecho hombre sin concurso de varón, nos da parte en su divinidad._',
    primer_salmo_texto: '¡Qué alegría cuando me dijeron:\n' +
        '«Vamos a la casa del Señor»!\n' +
        'Ya están pisando nuestros pies\n' +
        'tus umbrales, Jerusalén.\n' +
        '\n' +
        'Jerusalén está fundada\n' +
        'como ciudad bien compacta.\n' +
        'Allá suben las tribus,\n' +
        'las tribus del Señor,\n' +
        '\n' +
        'según la costumbre de Israel,\n' +
        'a celebrar el nombre del Señor;\n',
    segundo_salmo_cita: 'Salmo 126: El esfuerzo humano es inútil sin Dios',
    segundo_salmo_antifona: '_Cuando naciste inefablemente de la Virgen, se cumplieron las Escrituras: descendiste como el rocío sobre el vellón para salvar a los hombres. Te alabamos, Dios nuestro._',
    segundo_salmo_texto: 'Si el Señor no construye la casa,\n' +
        'en vano se cansan los albañiles;\n' +
        'si el Señor no guarda la ciudad,\n' +
        'en vano vigilan los centinelas.\n',
    tercer_salmo_cita: 'Efesios 1, 3-10: El Dios Salvador',
    tercer_salmo_antifona: '_En la zarza que Moisés vio arder sin consumirse, reconocemos tu virginidad admirablemente conservada. Madre de Dios, intercede por nosotros._',
    tercer_salmo_texto: 'Bendito sea Dios,\n' +
        'Padre de nuestro Señor Jesucristo,\n' +
        'que nos ha bendecido en la persona de Cristo\n' +
        'con toda clase de bienes espirituales y celestiales.\n' +
        '\n' +
        'Él nos eligió en la persona de Cristo,\n' +
        'antes de crear el mundo,\n' +
        'para que fuésemos santos\n' +
        'e irreprochables ante él por el amor.\n',
    lectura_biblica_cita: 'Ga 4, 4-5',
    lectura_biblica: 'Cuando se cumplió el tiempo, envió Dios a su Hijo, nacido de una mujer, nacido bajo la ley, para rescatar a los que estaban bajo la ley, para que recibiéramos el ser hijos por adopción.',
    responsorios: [
        '$℣. $La Palabra se hizo carne. Aleluya, Aleluya.',
    ],
    cantico_evangelico_antifona: '_¡Dichoso el vientre que te llevó, oh Cristo, y dichosos los pechos que te criaron, oh Señor y  Salvador del mundo! Aleluya._',
    preces_intro: 'Bendigamos a Cristo, el "Dios-con-nosotros", a quien María concibió y dio a luz, y supliquémosle diciendo:',
    preces_respuesta: '_Hijo de La Virgen María, escúchanos._',
    preces_contenido: [
        '- Tú que diste a María el gozo de la maternidad, _concede a todos los padres y madres de familia poder alegrarse en sus hijos._',
        '- Rey pacífico, cuyo reino es justicia y paz, _haz que busquemos siempre lo que lleva a la paz._',
    ],
    invitacion_padrenuestro: '_Como hijos que somos de Dios, dirijámonos a nuestro Padre con la oración que Cristo nos enseñó:_',
    oracion_final: 'Dios y Señor nuestro, que por la maternidad virginal de María entregaste a los hombres los bienes de la salvación, concédenos experimentar la intercesión de aquélla de quien hemos recibido a tu Hijo Jesucristo, el autor de la vida. Que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.'
}


describe("Mapper Vesperae", () => {
    it("mapper Vesperae", () => {

        const result = mapper_vesperae(prev);

        assert(result !== undefined);

        expect(result.id).eq(post.id);
        expect(result.cycle).eq(post.cycle);
        expect(result.himno).contains(post.himno);
        expect(result.primer_salmo_cita).contains(post.primer_salmo_cita);
        expect(result.primer_salmo_antifona).contains(post.primer_salmo_antifona);
        expect(result.primer_salmo_texto).contains(post.primer_salmo_texto);
        expect(result.segundo_salmo_cita).contains(post.segundo_salmo_cita);
        expect(result.segundo_salmo_antifona).contains(post.segundo_salmo_antifona);
        expect(result.segundo_salmo_texto).contains(post.segundo_salmo_texto);
        expect(result.lectura_biblica).contains(post.lectura_biblica);
        expect(result.lectura_biblica_cita).contains(post.lectura_biblica_cita);
        expect(result.responsorios[0]).contains(post.responsorios[0]);
        expect(result.cantico_evangelico_antifona).contains(post.cantico_evangelico_antifona);
        expect(result.preces_intro).contains(post.preces_intro);
        expect(result.preces_respuesta).contains(post.preces_respuesta);
        expect(result.preces_contenido[0]).contains(post.preces_contenido[0]);
        expect(result.invitacion_padrenuestro).contains(post.invitacion_padrenuestro);
        expect(result.oracion_final).contains(post.oracion_final);
    });

});
