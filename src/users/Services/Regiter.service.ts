import { IRegisterRepository } from "users/repositories/regirter.repositoty";
import { IUser } from "users/types/UserType";
import * as bcrypt from "bcrypt-ts";




export class Register implements IRegisterRepository {
    constructor(
        private readonly registerRepo: IRegisterRepository
    ) { }
    async createUser(user: IUser): Promise<IUser> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return await this.registerRepo.createUser({
            ...user,
            password: hashedPassword
        });
    }
}