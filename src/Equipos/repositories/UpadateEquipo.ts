import { ID } from "@config/id.type";
import { Equipos } from "Equipos/types/EquiposTypes";

export interface IUpdateEquipo {
    updateEquipo(id: ID, idUser: string, equipo: Partial<Equipos>): Promise<Equipos | null>
}