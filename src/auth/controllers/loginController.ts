import { generarJWT } from "auth/helpers/generarJWT";
import { LoginService } from "auth/Services/Login.Service";
import { Request, Response } from "express";
import { findByEmail } from "users/mongoRepository/UserMongo.Repository";
import { IFindByEmail } from "users/repositories/FindByEmail";

const loginMongo: IFindByEmail = new findByEmail()
const loginService = new LoginService(loginMongo)




export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const result = await loginService.login(email, password)
        if (!result) {
            res.status(400).json({ msg: 'Credenciales incorrectas' });
        } else {
            const id = result.id
            const token = await generarJWT(id, result.rol);


            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
            });

            res.status(200).json({
                msg: 'Authentication successful',
                token,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server error", error });
    }
}
