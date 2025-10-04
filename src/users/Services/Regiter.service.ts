import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { IAdmin } from "users/types/UserType";
import * as bcrypt from "bcrypt-ts";
import { FindTokenAdminMongo } from "TokenAdmin/MongoRepository/TokenAdminMongo";
import { fakeEmail } from "helpers/fakeEmails";


export class Register implements IRegisterRepoAdmin {
    constructor(
        private readonly registAdminRepo: IRegisterRepoAdmin
    ) { }

    async createUser(user: IAdmin, token?: string): Promise<IAdmin> {
        fakeEmail(user.email);

        if (!token) {
            throw new Error("Persona no autorizada para registrarse");
        }

        const tokens = new FindTokenAdminMongo();
        const result = await tokens.findToken(token);

        if (!result) {
            throw new Error("Token incorrecto o inexistente");
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);

        return this.registAdminRepo.createUser({
            ...user,
            password: hashedPassword,
        });
    }
}
