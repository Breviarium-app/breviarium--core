import {InvitatoriumSchema} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_invitatorium (item: any): InvitatoriumSchema | undefined {

    // console.log("prev", item);
    item.val = findText('invitatorios', item.val);
    // console.log("post", item);
    return item;
}