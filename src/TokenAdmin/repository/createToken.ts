import { ItokenAdmin } from "TokenAdmin/types/adminToken.type";



export interface createToken {
    createAdminToken(): Promise<ItokenAdmin>
}