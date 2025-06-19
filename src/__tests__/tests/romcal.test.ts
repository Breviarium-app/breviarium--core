import {describe, expect, it} from "vitest";
import Breviarium from "@/breviarium.ts";

describe("Romcal module", () => {

    it("getLiturgyInformation OK", async () => {
        const breviarium = new Breviarium();
        const result = await breviarium.getLiturgyInformation(new Date(2025, 0, 1))
        console.log(result)
        const expected = {
            psaltery_week: 'I',
            cycle: 'C',
            color: 'WHITE',
            color_hex: '#bdbdbd66',
            celebration: 'María, Madre de Dios',
            rank: 'SOLEMNITY',
            periods: [
                "CHRISTMAS_OCTAVE",
                "CHRISTMAS_TO_PRESENTATION_OF_THE_LORD",
            ],
            precedence: "GENERAL_SOLEMNITY_3",
            seasons: [
                "CHRISTMAS_TIME",
            ],
            calendar: {
                endOfLiturgycalSeason: "2025-11-29",
            }

        }

        assert(result !== undefined);
        expect(result).to.deep.equal(expected);
        expect(expected.psaltery_week).to.be.equal(result.psaltery_week);
        expect(expected.cycle).to.be.equal(result.cycle);
        expect(expected.color).to.be.equal(result.color);
        expect(expected.celebration).to.be.equal(result.celebration);
    });

});