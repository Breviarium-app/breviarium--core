import {InvitatoriumSchemaOutput} from "@/prayer-manager-interface.ts";
import {findText} from "@/prayers/mappers/findText";

export function mapper_invitatorium(item: any): InvitatoriumSchemaOutput | undefined {
    return {'id': item.id, 'val': findText('invitatorios', item.val)};
}