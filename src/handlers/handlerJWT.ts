import {sign, verify} from "jsonwebtoken"
const JWTkey = process.env.KEY_JWT;

export const signToken = (payload:object)=>{
    return sign(payload, JWTkey!,{
        expiresIn:"2hr"
    })
}


export const verifyToken = async (token:string)=>{
    return verify(token, JWTkey!)
}

