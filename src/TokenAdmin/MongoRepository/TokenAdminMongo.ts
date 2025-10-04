import { programarEliminacionDeToken } from "helpers/DeleteAutomaticToken";
import { generateCustomToken } from "helpers/generarToken";
import { TokenAdminMode } from "TokenAdmin/models/AdminTokens";
import { createToken } from "TokenAdmin/repository/createToken";
import { deleteToken } from "TokenAdmin/repository/DeleteToken";
import { findTokenAdmin } from "TokenAdmin/repository/findToke";
import { ItokenAdmin } from "TokenAdmin/types/adminToken.type";




export class CreateAdminToken implements createToken {
    async createAdminToken(): Promise<ItokenAdmin> {
        const tokenValue = generateCustomToken();
        const tokenDoc = new TokenAdminMode({ token: tokenValue });
        const result = await tokenDoc.save();
        programarEliminacionDeToken(result.token)
        return result;
    }
}

export class FindTokenAdminMongo implements findTokenAdmin {
    async findToken(token: string): Promise<ItokenAdmin | null> {
        const result = await TokenAdminMode.findOne({ token: token })
        if (!result) {
            return null
        } else {
            return result;
        }
    }
}

export class DeleteTokenAdmin implements deleteToken {
    async deleteTokens(token: string): Promise<void> {
        const result = await TokenAdminMode.findOneAndDelete({
            token: token
        })
    }
}