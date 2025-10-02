import { EquipoModel } from "@models/Equipos.Model";
import { UserModel } from "@models/User.Models";
import { ICreateEquipo } from "@repositories/createEquipo";
import { IDeleteEquipo } from "@repositories/DeleteEquipo";
import { IFindEquipo } from "@repositories/FindEquipo";
import { IUpdateEquipo } from "@repositories/UpadateEquipo";
import { Equipos } from "types/EquiposTypes";

export class CreateEquipo implements ICreateEquipo {
    async createEquipo(equipo: Equipos): Promise<Equipos> {
        const newEquipo = new EquipoModel(equipo);
        return await newEquipo.save()
    }
}

export class FindEquipo implements IFindEquipo {
    async findEquipoByID(id: any): Promise<Equipos | null> {
        return await EquipoModel.findById(id)
    }
    async findEquipos(): Promise<Equipos[]> {
        return await EquipoModel.find()
    }
}
export class UpdateEquipo implements IUpdateEquipo {
    async updateEquipo(id: any, equipo: Partial<Equipos>): Promise<Equipos | null> {
        return await EquipoModel.findByIdAndUpdate(id, equipo, { new: true })
    }
}
export class DelteEquipoMongo implements IDeleteEquipo {
    async deleteEquipo(id: any): Promise<void> {
        await EquipoModel.findByIdAndDelete(id)
    }
}