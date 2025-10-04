import mongoose, { Schema } from "mongoose";
import { Equipos } from "../types/EquiposTypes";

const EquipoSchema = new Schema<Equipos>({

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
    encargado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    mejora: {
        type: String,
    },
    Ram: {
        type: Number,
        required: true
    },
    Modelo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

})

export const EquipoModel = mongoose.model<Equipos>("Equipos", EquipoSchema)