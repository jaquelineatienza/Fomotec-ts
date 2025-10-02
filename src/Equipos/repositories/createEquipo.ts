import { Equipos } from "Equipos/types/EquiposTypes";


export interface ICreateEquipo {
    createEquipo(equipo: Equipos): Promise<Equipos>
}