import { UserModel } from "@models/User.Models";
import { IRegisterRepository } from "@repositories/regirter.repositoty";
import { IUser } from "types/UserType";

export class register implements IRegisterRepository {
    async createUser(user: IUser): Promise<IUser> {
        const newUser = new UserModel(user);
        return await newUser.save()
    }
}