import {loadBundledDataset} from "@/dataset/bundled.ts";
import {createFindText} from "@/prayers/mappers/findText";

/** Text lookup over the bundled dataset, for testing mappers in isolation. */
export const findText = createFindText((await loadBundledDataset()).commons);
