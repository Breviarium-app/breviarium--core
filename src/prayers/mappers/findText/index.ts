import type {CommonsTables} from "@/dataset/types.ts";
import type {TableCommon, TableCommonName} from "./types";

export type FindText = (tableName: TableCommonName, idToFind: number | string | any) => string;

/** Builds the text lookup used by every mapper over the `commons` tables of one dataset. */
export const createFindText = (commons: CommonsTables): FindText => (tableName, idToFind) => {
    if (typeof (idToFind) === "string") {
        printSearchError(tableName, idToFind);
        return '';
    }

    const tableCommon: TableCommon[] | undefined = (commons as Record<string, TableCommon[]>)[tableName];
    const textFound = tableCommon?.find(({id}) => id === idToFind);
    if (textFound) {
        return textFound.val;
    } else {
        printSearchError(tableName, idToFind);
        return '';
    }
};

function printSearchError(tableName: TableCommonName, idToFind: any) {
    if (idToFind !== undefined) {
        console.log(`id ${idToFind} Not found in ${tableName}`);
    }
}
