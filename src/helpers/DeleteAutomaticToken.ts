import { DeleteTokenAdmin } from "TokenAdmin/MongoRepository/TokenAdminMongo";

export function programarEliminacionDeToken(token: string, delayMs: number = 15000) {
    const deleteService = new DeleteTokenAdmin();

    setTimeout(async () => {
        try {
            await deleteService.deleteTokens(token);
            console.log(` Token eliminado tras ${delayMs / 1000} segundos: ${token}`);
        } catch (error) {
            console.error("Error al eliminar el token:", error);
        }
    }, delayMs);
}
