import { ID } from "@config/id.type";
import { UpdateEquipo } from "Equipos/mongoRepository/EquiposMongo.repository";
import { IUpdateEquipo } from "Equipos/repositories/UpadateEquipo";
import { UpdateEquipoService } from "Equipos/services/updateEquipo.Service";
import { Equipos } from "Equipos/types/EquiposTypes";
import { Request, Response } from "express";

const updateEquipoMongo: IUpdateEquipo = new UpdateEquipo();
const updateEquipoService = new UpdateEquipoService(updateEquipoMongo);

export const updateEquipoController = async (req: Request, res: Response) => {
    try {

        const { equipo } = req.body;
        const id = req.params.id;
        const idUser = req.session.user?.id;
        if (!idUser) {
            return res.status(401).json({ msg: "Usuario no autenticado" });
        }
        console.log("the id user", idUser)
        const result = await updateEquipoService.updateEquipo(id, idUser, equipo);

        if (!result) {
            return res.status(404).json({ msg: "El equipo no se pudo actualizar o no existe" });
        }

        res.status(200).json({
            msg: "Equipo actualizado con éxito",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};
