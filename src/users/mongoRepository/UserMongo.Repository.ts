import { UserModel } from "users/models/User.Models";
import { IFindByEmail } from "users/repositories/FindByEmail";
import { IRegisterRepository } from "users/repositories/regirter.repositoty";
import { IUser } from "users/types/UserType";

export class RegisterMongo implements IRegisterRepository {
    async createUser(user: IUser): Promise<IUser> {
        const newUser = new UserModel(user);
        return await newUser.save()
    }
}

export class findByEmail implements IFindByEmail {
    async findByEmail(email: string): Promise<IUser | null> {
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            return null
        }
        return user
    }
}