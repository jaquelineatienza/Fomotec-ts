import mongoose, { Schema } from "mongoose";
import { Equipos } from "../types/EquiposTypes";

const EquipoSchema = new Schema<Equipos>({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    fechaEntrega: {
        type: Date,
        default: Date.now
    },
    motivo: {
        type: String,
        enum: ["distribucion", "mantenimiento"],
        required: true
    },
    necesidad: {
        type: String,
    },
    fechaIngreso: {
        type: Date
    }

})

export const EquipoModel = mongoose.model<Equipos>("Equipos", EquipoSchema)