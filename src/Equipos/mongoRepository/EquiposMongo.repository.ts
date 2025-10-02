import { EquipoModel } from "Equipos/Models/Equipos.Model";
import { ICreateEquipo } from "Equipos/repositories/createEquipo";
import { IDeleteEquipo } from "Equipos/repositories/DeleteEquipo";
import { IFindEquipo } from "Equipos/repositories/FindEquipo";
import { IUpdateEquipo } from "Equipos/repositories/UpadateEquipo";
import { Equipos } from "Equipos/types/EquiposTypes";

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