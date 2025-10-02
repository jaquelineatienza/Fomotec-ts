import { IDeleteEquipo } from "@repositories/DeleteEquipo";



export class DeleteEquipoService implements IDeleteEquipo {
    constructor(private readonly deleteRepo: IDeleteEquipo) { }

    async deleteEquipo(id: any): Promise<void> {
        await this.deleteRepo.deleteEquipo(id);
    }
}