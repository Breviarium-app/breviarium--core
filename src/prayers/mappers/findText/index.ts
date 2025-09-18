import * as commons from "@/prayers/db/es/commons/";
// Add type assertion to ensure commons contains all table names
type CommonsType = Record<TableCommonName, TableCommon[]>;
import {TableCommon, TableCommonName} from "./types";

export const findText = (tableName: TableCommonName, idToFind: number | string | any): string => {
    if (typeof (idToFind) === "string") {
        console.log(`id ${idToFind} Not found in ${tableName}`);
        return '';
    }

    const tableCommon: TableCommon[] = (commons as any as CommonsType)[tableName];
    const textFound = tableCommon.find(({id}) => id === idToFind);
    if (textFound) {
        return textFound.val;
    } else {
        console.log(`id ${idToFind} Not found in ${tableName}`);
        return '';
    }

};
