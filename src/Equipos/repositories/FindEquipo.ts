import { ID } from "@config/id.type";
import { Equipos } from "Equipos/types/EquiposTypes";



export interface IFindEquipo {
    findEquipos(): Promise<Equipos[]>
    findEquipoByID(id: ID): Promise<Equipos | null>
    findEquipoByUserID(id: ID): Promise<Equipos[] | null>
}