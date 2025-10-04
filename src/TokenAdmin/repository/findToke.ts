import { ItokenAdmin } from "TokenAdmin/types/adminToken.type";


export interface findTokenAdmin {
    findToken(token: string): Promise<ItokenAdmin | null>
}