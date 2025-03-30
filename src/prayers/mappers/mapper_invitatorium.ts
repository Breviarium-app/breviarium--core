import {InvitatoriumSchema} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_invitatorium(item: any): InvitatoriumSchema | undefined {

    item.val = findText('invitatorios', item.val);

    return item;
}