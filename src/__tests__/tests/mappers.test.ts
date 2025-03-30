import {describe, it} from "vitest";
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


describe("Mappers", () => {
    it("mapper laudes - laudes_pre_0", () => {

        const result = mapper_laudes(laudes_pre_0);

        assert(result !== undefined);
    });

});
