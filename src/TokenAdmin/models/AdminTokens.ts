import mongoose, { Schema } from "mongoose";
import { ItokenAdmin } from "TokenAdmin/types/adminToken.type";


const TokenAdminSchema = new Schema<ItokenAdmin>({
    token: {
        type: String,
        required: true
    }
})


export const TokenAdminMode = mongoose.model<ItokenAdmin>("TokenAdmin", TokenAdminSchema)