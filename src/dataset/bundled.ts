import {loadDataset} from "./files.ts";
import type {Dataset} from "./types.ts";

/**
 * The dataset shipped inside the npm package. It is loaded with dynamic imports so that consumers
 * who always provide their own (downloaded) dataset can keep this out of their critical path.
 * It is the offline baseline and the fallback when a downloaded dataset is missing or corrupt.
 */
const BUNDLED_FILES: Record<string, () => Promise<unknown>> = {
    "all_invitatorium.json": () => import("@/prayers/db/all_invitatorium.json"),
    "all_laudes.json": () => import("@/prayers/db/all_laudes.json"),
    "all_vesperae.json": () => import("@/prayers/db/all_vesperae.json"),
    "all_tertia.json": () => import("@/prayers/db/all_tertia.json"),
    "all_sexta.json": () => import("@/prayers/db/all_sexta.json"),
    "all_nona.json": () => import("@/prayers/db/all_nona.json"),
    "all_lectures.json": () => import("@/prayers/db/all_lectures.json"),
    "all_officium.json": () => import("@/prayers/db/all_officium.json"),
    "es/completorium/1.json": () => import("@/prayers/db/es/completorium/1.json"),
    "es/completorium/2.json": () => import("@/prayers/db/es/completorium/2.json"),
    "es/completorium/3.json": () => import("@/prayers/db/es/completorium/3.json"),
    "es/completorium/4.json": () => import("@/prayers/db/es/completorium/4.json"),
    "es/completorium/5.json": () => import("@/prayers/db/es/completorium/5.json"),
    "es/completorium/6.json": () => import("@/prayers/db/es/completorium/6.json"),
    "es/completorium/7.json": () => import("@/prayers/db/es/completorium/7.json"),
    "es/commons/invitatory_psalms.json": () => import("@/prayers/db/es/commons/invitatory_psalms.json"),
    "es/commons/cantico_evangelico_antifonas.json": () => import("@/prayers/db/es/commons/cantico_evangelico_antifonas.json"),
    "es/commons/himnos.json": () => import("@/prayers/db/es/commons/himnos.json"),
    "es/commons/invitacion_padrenuestro.json": () => import("@/prayers/db/es/commons/invitacion_padrenuestro.json"),
    "es/commons/invitatorios.json": () => import("@/prayers/db/es/commons/invitatorios.json"),
    "es/commons/lectura_breve_citas.json": () => import("@/prayers/db/es/commons/lectura_breve_citas.json"),
    "es/commons/lectura_breve_textos.json": () => import("@/prayers/db/es/commons/lectura_breve_textos.json"),
    "es/commons/lecturas_referencia.json": () => import("@/prayers/db/es/commons/lecturas_referencia.json"),
    "es/commons/lecturas_texto.json": () => import("@/prayers/db/es/commons/lecturas_texto.json"),
    "es/commons/oficio_citas.json": () => import("@/prayers/db/es/commons/oficio_citas.json"),
    "es/commons/oficio_textos.json": () => import("@/prayers/db/es/commons/oficio_textos.json"),
    "es/commons/oficio_titulos.json": () => import("@/prayers/db/es/commons/oficio_titulos.json"),
    "es/commons/oraciones_finales.json": () => import("@/prayers/db/es/commons/oraciones_finales.json"),
    "es/commons/preces_contenido.json": () => import("@/prayers/db/es/commons/preces_contenido.json"),
    "es/commons/preces_intro.json": () => import("@/prayers/db/es/commons/preces_intro.json"),
    "es/commons/preces_respuesta.json": () => import("@/prayers/db/es/commons/preces_respuesta.json"),
    "es/commons/responsorios.json": () => import("@/prayers/db/es/commons/responsorios.json"),
    "es/commons/salmos_antifonas.json": () => import("@/prayers/db/es/commons/salmos_antifonas.json"),
    "es/commons/salmos_citas.json": () => import("@/prayers/db/es/commons/salmos_citas.json"),
    "es/commons/salmos_textos.json": () => import("@/prayers/db/es/commons/salmos_textos.json"),
    "es/commons/titulo_hora_liturgica.json": () => import("@/prayers/db/es/commons/titulo_hora_liturgica.json"),
};

let bundled: Promise<Dataset> | undefined;

export function loadBundledDataset(): Promise<Dataset> {
    bundled ??= loadDataset(path => {
        const loader = BUNDLED_FILES[path];
        if (!loader) return Promise.reject(new Error(`No bundled file for "${path}"`));
        return loader();
    }).catch(e => {
        bundled = undefined; // allow a retry
        throw e;
    });
    return bundled;
}
