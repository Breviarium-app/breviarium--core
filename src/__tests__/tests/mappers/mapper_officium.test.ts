import {describe, expect, it} from "vitest";
import {mapper_officium} from "@/prayers/mappers/mapper_officium.ts";

const prev = {
    id: 'lent_5_monday',
    cycle: 'ANY',
    himno: 3365,
    s1_c: 9996,
    s1_a: 8219,
    s1_t: 9997,
    s2_c: 9997,
    s2_a: 8220,
    s2_t: 9998,
    s3_c: 9998,
    s3_a: 8221,
    s3_t: 9999,
    responsorio1: [13658, 13659],
    lb_tit: 694,
    lb_c: 694,
    lb_texto: 694,
    responsorio2: [13661, 13662, 13663],
    responsorio2B: [13661, 13662, 13663],
    lp_tit: 695,
    lp_c: 695,
    lp_texto: 695,
    responsorio3: [13664, 13665, 13666],
    responsorio3B: [13664, 13665, 13666],
    o_final: 3703
}

const post = {
    id: 'lent_5_monday',
    cycle: 'ANY',
    himno: 'Llorando los pecados\n' +
        'tu pueblo está, Señor.\n' +
        'Vuélvenos tu mirada\n' +
        'y danos el perdón.\n',
    primer_salmo_cita: 'Salmo 6: Oración del afligido que acude a Dios',
    primer_salmo_antifona: '_Sálvame, Señor, por tu misericordia._',
    primer_salmo_texto: 'Señor, no me corrijas con ira,\n' +
        'no me castigues con cólera.\n' +
        'Misericordia, Señor, que desfallezco;\n',
    segundo_salmo_cita: 'Salmo 9 A-I: Acción de gracias por la victoria',
    segundo_salmo_antifona: '_El Señor es el refugio del oprimido en los momentos de peligro._',
    segundo_salmo_texto: 'Te doy gracias, Señor, de todo corazón,\n' +
        'proclamando todas tus maravillas;\n',
    tercer_salmo_cita: 'Salmo 9 A-II',
    tercer_salmo_antifona: '_Narraré tus hazañas en las puertas de Sion._',
    tercer_salmo_texto: 'Tañed en honor del Señor, que reside en Sion;\n' +
        'narrad sus hazañas a los pueblos;\n',
    responsorio1: [
        '$℣. $Convertíos y creed en el Evangelio.',
        '$℟. $Porque está cerca el reino de Dios.'
    ],
    lectura_biblica_titulo: 'Jesús, guía de la salvación, semejante en todo a sus hermanos',
    lectura_biblica_cita: 'De la carta a los Hebreos  $Heb 2, 5-18 $',
    lectura_biblica_texto: 'Dios no sometió a los ángeles el mundo venidero, del que estamos hablando; de ello dan fe estas palabras: «¿Qué es el hombre, para que te acuerdes de él, o el hijo del hombre, para que mires por él? Lo hiciste poco inferior a los ángeles, lo coronaste de gloria y dignidad, todo lo sometiste bajo sus pies». En efecto, puesto a someterle todo, nada dejó fuera de su dominio. Pero ahora no vemos todavía que todo le esté sometido.\n' +
        '\n' +
        'Al que Dios había hecho un poco inferior a los ángeles, a Jesús, lo vemos ahora coronado de gloria y honor por su pasión y muerte. Así, por la gracia de Dios, ha padecido la muerte para bien de todos.\n',
    responsorio2: [
        '$℟. $El santificador y los santificados proceden todos del mismo; por eso Cristo tenía que parecerse en todo a sus hermanos, para ser sumo sacerdote compasivo y fiel.',
        '$℣. $Dios apareció en el mundo y vivió entre los hombres.',
        '$℟. $Para ser sumo sacerdote compasivo y fiel.'
    ],
    responsorio2B: [
        '$℟. $El santificador y los santificados proceden todos del mismo; por eso Cristo tenía que parecerse en todo a sus hermanos, para ser sumo sacerdote compasivo y fiel.',
        '$℣. $Dios apareció en el mundo y vivió entre los hombres.',
        '$℟. $Para ser sumo sacerdote compasivo y fiel.'
    ],
    lectura_patristica_titulo: 'Aunque alguno peque, tenemos un abogado ante el Padre',
    lectura_patristica_cita: 'San Juan Fisher $Salmo 129 $',
    lectura_patristica_texto: 'Cristo Jesús es nuestro sumo sacerdote, y su precioso cuerpo, que inmoló en el ara de la cruz por la salvación de todos los hombres, es nuestro sacrificio. La sangre que se derramó para nuestra redención no fue la de los becerros y los machos cabríos (como en la ley antigua), sino la del inocentísimo Cordero, Cristo Jesús, nuestro salvador. El templo en el que nuestro sumo sacerdote ofrecía el sacrificio no era hecho por manos de hombres, sino que había sido levantado por el solo poder de Dios, pues Cristo derramó su sangre a la vista del mundo: un templo ciertamente edificado por la sola mano de Dios.\n' +
        '\n' +
        'Y este templo tiene dos partes: una es la tierra, que ahora nosotros habitamos; la otra nos es aún desconocida a nosotros, mortales.\n',
    responsorio3: [
        '$℟. $Si, cuando éramos enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, ¡con cuánta más razón, estando ya reconciliados, seremos salvos por su vida!',
        '$℣. $Siendo nosotros todavía pecadores, Cristo murió por nosotros.',
        '$℟. $¡Con cuánta más razón, estando ya reconciliados, seremos salvos por su vida!'
    ],
    responsorio3B: [
        '$℟. $Si, cuando éramos enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, ¡con cuánta más razón, estando ya reconciliados, seremos salvos por su vida!',
        '$℣. $Siendo nosotros todavía pecadores, Cristo murió por nosotros.',
        '$℟. $¡Con cuánta más razón, estando ya reconciliados, seremos salvos por su vida!'
    ],
    oracion_final: 'Señor, Dios nuestro, que has permitido a tu Iglesia penetrar con mayor profundidad en los sacramentos de la salvación, por la predicación de san Cirilo, obispo de Jerusalén, concédenos, por su intercesión, llegar a conocer de tal modo a tu Hijo que podamos participar con mayor abundancia de su vida divina. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.'
}

describe("Mapper Officium", () => {
    it("mapper Officium", () => {

        const result = mapper_officium(prev);

        console.log("AAAAAA", result)
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
        /* TODO: big check lectura_biblica_cita new schema
            "lectura_biblica_titulo_a": 1216,
            "lectura_biblica_titulo_i": 216,
            "lectura_biblica_titulo_p": 1216,
            "lectura_biblica_cita_a": 1216,
            "lectura_biblica_cita_i": 216,
            "lectura_biblica_cita_p": 1216,
            "lectura_biblica_texto_a": 1216,
            "lectura_biblica_texto_i": 216,
            "lectura_biblica_texto_p": 1216,
            "lectura_patristica_titulo_a": 217,
            "lectura_patristica_titulo_i": 1217,
            "lectura_patristica_titulo_p": 217,
            "lectura_patristica_cita_a": 217,
            "lectura_patristica_cita_i": 1217,
            "lectura_patristica_cita_p": 217,
            "lectura_patristica_texto_a": 217,
            "lectura_patristica_texto_i": 1217,
            "lectura_patristica_texto_p": 217,
        * */

        expect(result.responsorio1[0]).contains(post.responsorio1[0]);
        // expect(result.responsorio2_p[0]).contains(post.responsorio2_p[0]);
        // expect(result.responsorio2B[0]).contains(post.responsorio2B[0]);
        // expect(result.responsorio3[0]).contains(post.responsorio3[0]);
        // expect(result.responsorio3B[0]).contains(post.responsorio3B[0]);
        expect(result.oracion_final).contains(post.oracion_final);

    });

});
