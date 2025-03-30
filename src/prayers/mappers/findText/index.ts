import * as commons from "@/prayers/db/es/commons/";
import {TableCommon, TableCommonName} from "./types";

export const findText = (tableName: TableCommonName, idToFind: number | string): string => {
    if (typeof (idToFind) === "string") return `id ${idToFind} Not fount in ${tableName}`

    const tableCommon: TableCommon[] = commons[tableName] as TableCommon[];
    const textFound = tableCommon.find(({id}) => id === idToFind);
    if (textFound) {
        return textFound.val;
    }
    return `id ${idToFind} Not fount in ${tableName}`;
};
