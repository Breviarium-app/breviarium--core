import * as commons from "@/prayers/db/es/commons/";
import {TableCommon, TableCommonName} from "./types";

export const findText = (tableName: TableCommonName, idToFind: number | string | any): string => {
    if (typeof (idToFind) === "string") {
        console.log(`id ${idToFind} Not fount in ${tableName}`);
        return '';
    }

    const tableCommon: TableCommon[] = commons[tableName] as TableCommon[];
    const textFound = tableCommon.find(({id}) => id === idToFind);
    if (textFound) {
        return textFound.val;
    } else {
        console.log(`id ${idToFind} Not fount in ${tableName}`);
        return '';
    }

};
