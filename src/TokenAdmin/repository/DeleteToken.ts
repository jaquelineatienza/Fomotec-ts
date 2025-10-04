import { ItokenAdmin } from "TokenAdmin/types/adminToken.type";




export interface deleteToken {
    deleteTokens(token: string): Promise<void>
}

