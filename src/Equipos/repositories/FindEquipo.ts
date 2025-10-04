import { Equipos } from "Equipos/types/EquiposTypes";



export interface IFindEquipo {
    findEquipos(): Promise<Equipos[]>
    findEquipoByID(id: any): Promise<Equipos | null>
    findEquipoByUserID(id: string): Promise<Equipos[] | null>
}