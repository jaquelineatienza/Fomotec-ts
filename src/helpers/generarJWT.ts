import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.CLAVE_SECRETA || "clave_secreta";
export const generarJWT = (id: any, rol: string) => {
    return new Promise((resolve, reject) => {
        const payload = { id, rol };
        console.log(payload);
        jwt.sign(payload, SECRET_KEY as string, { expiresIn: "1h" }, (err, token) => {
            if (err) {
                console.error("Error generating JWT:", err);
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};
