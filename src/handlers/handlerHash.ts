import {compare, hash } from "bcrypt"

export const hashPassword = async (textPlain:string)=>{
    return await hash(textPlain, 10)
}

export const compareHash = async (textPlain:string, passwordHashed:string)=>{
    return await compare(textPlain, passwordHashed)
}

