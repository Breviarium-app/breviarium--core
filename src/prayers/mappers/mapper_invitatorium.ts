import {InvitatoriumSchemaOutput} from "@/prayer-manager-interface.ts";
import type {FindText} from "@/prayers/mappers/findText";

export function mapper_invitatorium(item: any, findText: FindText): InvitatoriumSchemaOutput | undefined {
    return {'id': item.id, 'val': findText('invitatorios', item.val)};
}