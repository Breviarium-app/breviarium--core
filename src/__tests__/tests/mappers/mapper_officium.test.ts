import {describe, expect, it} from "vitest";
import {mapper_officium} from "@/prayers/mappers/mapper_officium.ts";

const prev = [{
    "id": "lent_5_monday",
    "cycle": "ANY",
    "himno": 3365,
    "himno_latino": -1,
    "s1_c": 9996,
    "s1_a": 8219,
    "s1_t": 9997,
    "s2_c": 9997,
    "s2_a": 8220,
    "s2_t": 9998,
    "s3_c": 9998,
    "s3_a": 8221,
    "s3_t": 9999,
    "lb_tit_a": 694,
    "lb_tit_i": 1694,
    "lb_tit_p": 2694,
    "lb_cita_a": 694,
    "lb_cita_i": 1694,
    "lb_cita_p": 2694,
    "lb_texto_a": 694,
    "lb_texto_i": 1694,
    "lb_texto_p": 2694,
    "lp_tit_a": 695,
    "lp_tit_i": 1695,
    "lp_tit_p": 2695,
    "lp_cita_a": 695,
    "lp_cita_i": 1695,
    "lp_cita_p": 2695,
    "lp_texto_a": 695,
    "lp_texto_i": 1695,
    "lp_texto_p": 2695,
    "resp_1": [13658, 13659],
    "resp_2_a": [13661, 13662, 13663],
    "resp_2_i": [33661, 33662, 33663],
    "resp_2_p": [53661, 53662, 53663],
    "resp_3_a": [13664, 13665, 13666],
    "resp_3_i": [33664, 33665, 33666],
    "resp_3_p": [53664, 53665, 53666],
    "o_final": 211
}]

const post = {
    id: 'lent_5_monday',
    cycle: 'ANY',
    himno: 'Llorando los pecados\n' +
        'tu pueblo está, Señor.\n' +
        'Vuélvenos tu mirada\n',
    primer_salmo_cita: 'Salmo 6: Oración del afligido que acude a Dios',
    primer_salmo_antifona: '_Sálvame, Señor, por tu misericordia._',
    primer_salmo_texto: 'Señor, no me corrijas con ira,\n' +
        'no me castigues con cólera.\n',
    segundo_salmo_cita: 'Salmo 9 A-I: Acción de gracias por la victoria',
    segundo_salmo_antifona: '_El Señor es el refugio del oprimido en los momentos de peligro._',
    segundo_salmo_texto: 'Te doy gracias, Señor, de todo corazón,\n',
    tercer_salmo_cita: 'Salmo 9 A-II',
    tercer_salmo_antifona: '_Narraré tus hazañas en las puertas de Sion._',
    tercer_salmo_texto: 'Tañed en honor del Señor, que reside en Sion;\n' +
        'narrad sus hazañas a los pueblos;\n',
    lectura_biblica_titulo_a: 'Jesús, guía de la salvación, semejante en todo a sus hermanos',
    lectura_biblica_titulo_i: 'La fe de los antiguos padres',
    lectura_biblica_titulo_p: 'Exploradores israelitas son enviados a la tierra de Canaán',
    lectura_biblica_cita_a: 'De la carta a los Hebreos  $Heb 2, 5-18 $',
    lectura_biblica_cita_i: 'De la carta a los Hebreos  $Heb 11, 1-19 $',
    lectura_biblica_cita_p: 'Del libro de los Números $Nm 12, 16-13, 3.17-33$',
    lectura_biblica_texto_a: 'Dios no sometió a los ángeles el mundo venidero, del que estamos hablando; de ello dan fe estas palabras: «¿Qué es el hombre, para que te acuerdes de él, o el hijo del hombre, para que mires por él? Lo hiciste poco inferior a los ángeles, lo coronaste de gloria y dignidad, todo lo sometiste bajo sus pies». En efecto, puesto a someterle todo, nada dejó fuera de su dominio. Pero ahora no vemos todavía que todo le esté sometido.\n',
    lectura_biblica_texto_i: 'La fe es garantía de lo que se espera; la prueba de lo que no se ve. Por ella fueron alabados nuestros mayores. Por la fe, sabemos que el universo fue formado por la palabra de Dios, lo visible, de lo invisible. Por la fe, ofreció Abel a Dios un sacrificio mejor que el de Caín, por ella fue declarado justo, con la aprobación que dio <i>Dios a sus ofrendas</i>; y por ella, aunque muerto, sigue hablando. \n',
    lectura_biblica_texto_p: 'Después el pueblo partió de Jaserot y acamparon en el desierto de Parán.\n' +
        '\n' +
        'El Señor dijo a Moisés: «Envía algunos hombres, uno por cada tribu patriarcal, para que exploren la tierra de Canaán que voy a dar a los israelitas. Que sean todos príncipes entre ellos.» Los envió Moisés, según la orden del Señor, desde el desierto de Parán: todos ellos eran jefes de los israelitas.\n' +
        '\n' +
        'Moisés los envió a explorar el país de Canaán, y les dijo: «Subid ahí por el Negueb y después subiréis a la montaña. Reconoced el país, a ver qué tal es, y el pueblo que lo habita, si es fuerte o débil, escaso o numeroso; y qué tal es el país en que viven, bueno o malo; cómo son las ciudades en que habitan, abiertas o fortificadas; y cómo es la tierra, fértil o pobre, si tiene árboles o no. Tened valor y traed algunos productos del país.»\n' +
        '\n' +
        'Era el tiempo de las primeras uvas. Subieron y exploraron el país, desde el desierto de Sin hasta Rejob, a la Entrada de Jamat. Subieron por el Negueb y llegaron hasta Hebrón, donde residían Ajimán, Sesay y Talmay, descendientes de Anac. Hebrón había sido fundada siete años antes que Tanis de Egipto. Llegaron al Valle de Escol y cortaron allí un sarmiento con un racimo de uva, que transportaron con una pértiga entre dos, y también granadas e higos. Al lugar aquel se le llamó Valle del Racimo, por el racimo que cortaron allí los israelitas.\n' +
        '\n' +
        'Al cabo de cuarenta días volvieron de explorar la tierra. Fueron y se presentaron a Moisés, a Aarón y a toda la comunidad de los israelitas, en el desierto de Parán, en Cades. Les hicieron una relación a ellos y a toda la comunidad, y les mostraron los productos del país.\n' +
        '\n' +
        'Les contaron lo siguiente: «Fuimos al país al que nos enviaste, y en verdad que mana leche y miel; éstos son sus productos. Sólo que el pueblo que habita en el país es poderoso; las ciudades, fortificadas y muy grandes; hasta hemos visto allí descendientes de Anac. El amalecita ocupa la región del Negueb; el hitita, el amorreo y el jebuseo ocupan la montaña; el cananeo, la orilla del mar y la ribera del Jordán.»\n' +
        '\n' +
        'Caleb acalló al pueblo delante de Moisés, diciendo: «Subamos, y conquistaremos el país, porque sin duda podremos con él.» Pero los hombres que habían ido con él dijeron: «No podemos subir contra ese pueblo, porque es más fuerte que nosotros.» Y empezaron a desacreditar ante los israelitas el país que habían explorado, diciendo: «El país que hemos recorrido y explorado es un país que devora a sus propios habitantes. Toda la gente que hemos visto allí es gente alta. Hemos visto también gigantes, hijos de Anac, de la raza de los gigantes. Nosotros nos veíamos ante ellos como saltamontes, y eso mismo les parecíamos a ellos.»',
    lectura_patristica_titulo_a: 'Aunque alguno peque, tenemos un abogado ante el Padre',
    lectura_patristica_titulo_i: 'Por nuestra salvación, Cristo se hizo obediente al Padre',
    lectura_patristica_titulo_p: 'La Iglesia, sacramento visible de la unidad',
    lectura_patristica_cita_a: 'San Juan Fisher $Salmo 129 $',
    lectura_patristica_cita_i: 'San Cirilo de Alejandría $Homilía pascual 5 (7: PG 77, 495-498) $',
    lectura_patristica_cita_p: 'Concilio Vaticano II $Constitución dogmática Lumen gentium, sobre la Iglesia (Núm 9)$',
    lectura_patristica_texto_a: 'Cristo Jesús es nuestro sumo sacerdote, y su precioso cuerpo, que inmoló en el ara de la cruz por la salvación de todos los hombres, es nuestro sacrificio. La sangre que se derramó para nuestra redención no fue la de los becerros y los machos cabríos (como en la ley antigua), sino la del inocentísimo Cordero, Cristo Jesús, nuestro salvador. El templo en el que nuestro sumo sacerdote ofrecía el sacrificio no era hecho por manos de hombres, sino que había sido levantado por el solo poder de Dios, pues Cristo derramó su sangre a la vista del mundo: un templo ciertamente edificado por la sola mano de Dios.\n' +
        '\n' +
        'Y este templo tiene dos partes: una es la tierra, que ahora nosotros habitamos; la otra nos es aún desconocida a nosotros, mortales.\n' +
        '\n' +
        'Así, primero, ofreció su sacrificio aquí en la tierra, cuando sufrió la más acerba muerte. Luego, cuando revestido de la nueva vestidura de la inmortalidad entró por su propia sangre en el santuario, o sea, en el cielo, presentó ante el trono del Padre celestial aquella sangre de inmenso valor, que había derramado una vez para siempre en favor de todos los hombres, pecadores.\n' +
        '\n' +
        'Este sacrificio resultó tan grato y aceptable a Dios, que así que lo hubo visto, compadecido inmediatamente de nosotros, no pudo menos que otorgar su perdón a todos los verdaderos penitentes.\n' +
        '\n' +
        'Es además un sacrificio perenne, de forma que no sólo cada año (como entre los judíos se hacía), sino también cada día, y hasta cada hora y cada instante, sigue ofreciéndose para nuestro consuelo, para que no dejemos de tener la ayuda más imprescindible. Por lo que el Apóstol añade: <i>Consiguiendo la liberación eterna</i> (Hb 9,12).\n' +
        '\n' +
        'De este santo y definitivo sacrificio se hacen partícipes todos aquellos que llegaron a tener verdadera contrición y aceptaron la penitencia por sus crímenes, aquellos que con firmeza decidieron no repetir en adelante sus maldades, sino que perseveran con constancia en el inicial propósito de las virtudes. Sobre lo cual, san Juan se expresa en estos términos: <i>Hijos míos, os escribo esto para que no pequéis. Pero, si alguno peca, tenemos a uno que abogue ante el Padre: a Jesucristo, el Justo. Él es víctima de propiciación por nuestros pecados, no sólo por los nuestros, sino también por los del mundo entero</i> (1 Jn 2,1-2).',
    lectura_patristica_texto_i: 'Esta es la historia de todo lo ocurrido que, consignada en los Libros sagrados, describe, como en un cuadro, el misterio del Salvador, consumado hasta en sus más ínfimos detalles. Es incumbencia nuestra adaptar la luz espléndida de la verdad a los acontecimientos que sucedieron en figura, y explicar con mayor claridad y uno por uno todos los sucesos que hemos propuesto. De esta forma, les resultará más fácil a los creyentes captar claramente el abstruso y recóndito misterio del amor.\n',
    lectura_patristica_texto_p: '<i>Mirad que llegan días -oráculo del Señor- en que haré con la casa de Israel y la casa de Judá una alianza nueva. Meteré mi ley en su pecho, la escribiré en sus corazones; yo seré su Dios, y ellos serán mi pueblo. Todos me conocerán, desde el pequeño al grande -oráculo del Señor-. </i>Alianza nueva que estableció Cristo, es decir, el nuevo Testamento en su sangre, convocando un pueblo de entre los judíos y los gentiles, que se congregara en unidad, no según la carne, sino en el Espíritu, y constituyera el nuevo pueblo de Dios.\n',
    responsorio1: [
        '$℣. $Convertíos y creed en el Evangelio.',
        '$℟. $Porque está cerca el reino de Dios.'
    ],
    responsorio2_a: [
        '$℟. $El santificador y los santificados proceden todos del mismo; por eso Cristo tenía que parecerse en todo a sus hermanos, para ser sumo sacerdote compasivo y fiel.',
        '$℣. $Dios apareció en el mundo y vivió entre los hombres.',
        '$℟. $Para ser sumo sacerdote compasivo y fiel.'
    ],
    responsorio2_i: [
        '$℣. $Por la fe, puesto a prueba, ofreció Abrahán a Isaac; y ofrecía a su unigénito, a aquel que era el depositario de las promesas; concluyó de todo ello que Dios podía resucitarlo de entre los muertos.',
        '$℟. $Creyó en aquel que da la vida a los muertos y llama a la existencia a lo que no es.',
        '$℟. $Concluyó de todo ello que Dios podía resucitarlo de entre los muertos.'
    ],
    responsorio2_p: [
        '$℣. $ El Señor, tu Dios, te llevó en el desierto, como un hombre lleva a su hijo, pero vosotros no tuvisteis confianza en el Señor, vuestro Dios.',
        '$℟. $ Vosotros no quisisteis subir a tomar posesión de vuestra tierra, fuisteis rebeldes a la orden del Señor, vuestro Dios, y os pusisteis a murmurar.',
        '$℟. $ No tuvisteis confianza en el Señor, vuestro Dios.'
    ],
    responsorio3_a: [
        '$℟. $Si, cuando éramos enemigos, fuimos reconciliados con Dios por la muerte de su Hijo, ¡con cuánta más razón, estando ya reconciliados, seremos salvos por su vida!',
        '$℣. $Siendo nosotros todavía pecadores, Cristo murió por nosotros.',
        '$℟. $¡Con cuánta más razón, estando ya reconciliados, seremos salvos por su vida!'
    ],
    responsorio3_i: [
        '$℣. $Cristo Jesús, siendo de condición divina, no retuvo ávidamente el ser igual a Dios. Él se humilló a sí mismo, obedeciendo hasta la muerte, y muerte de cruz.',
        '$℟. $El castigo que nos trae la paz recayó sobre él; por sus heridas hemos sido curados.',
        '$℟. $Él se humilló a sí mismo, obedeciendo hasta la muerte, y muerte de cruz.'
    ],
    responsorio3_p: [
        '$℣. $ Vosotros que en un tiempo erais «no-pueblo», ahora sois el pueblo de Dios. Vosotros que en un tiempo erais excluidos de la misericordia, ahora habéis recibido misericordia.',
        '$℟. $ Dichosa la nación cuyo Dios es el Señor, el pueblo que él se escogió como heredad.',
        '$℟. $ Vosotros que en un tiempo erais excluidos de la misericordia, ahora habéis recibido misericordia.'
    ],
    oracion_final: 'Señor, Dios nuestro, cuyo amor sin medida nos enriquece con toda bendición, haz que, abandonando la corrupción del hombre viejo, nos preparemos, como hombres nuevos, a tomar parte en la gloria de tu reino. Por nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo y es Dios por los siglos de los siglos.'
}

describe("Mapper Officium", () => {
    it("mapper Officium", () => {

        const result = mapper_officium(prev);

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
