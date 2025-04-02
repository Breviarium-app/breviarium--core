import {InvitatoriumSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_invitatorium(item: any): InvitatoriumSchemaOutput | undefined {

    item.val = findText('invitatorios', item.val);

    return item;
}