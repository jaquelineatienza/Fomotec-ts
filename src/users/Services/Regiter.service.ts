import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { IUser } from "users/types/UserType";
import * as bcrypt from "bcrypt-ts";
import { FindTokenAdminMongo } from "TokenAdmin/MongoRepository/TokenAdminMongo";
import { fakeEmail } from "helpers/fakeEmails";
import { IFindByEmail } from "users/repositories/FindByEmail";


export class Register implements IRegisterRepoAdmin {
    constructor(
        private readonly registAdminRepo: IRegisterRepoAdmin,
        private readonly uniqueEmail: IFindByEmail
    ) { }

    async createUser(user: IUser, token?: string): Promise<IUser> {
        console.log(user)
        console.log(token)
        if (!token) {
            throw new Error("Persona no proporcionado");
        }

        const tokens = new FindTokenAdminMongo();
        const result = await tokens.findToken(token);

        if (!result) {
            throw new Error("Token incorrecto o inexistente");
        }

        const findEmail = await this.uniqueEmail.findByEmail(user.email);
        if (findEmail) {
            throw new Error("Email no disponible ");

        }
        const hashedPassword = await bcrypt.hash(user.password, 10);

        return this.registAdminRepo.createUser({
            ...user,
            rol: "admin",
            password: hashedPassword,
        });
    }
}
