import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { User } from "../models";
import { responseError } from "../handlers/handlerResponses";

/**
 *  
 * @param atributte  Field in the Db to match
 * @param field && exist      if exist is false , the function's returning error if  exist an user whit this field, however if exist, is true (default), this will return error if the user doesn't exist , whit that field in the db
 * @returns 
 */
const validateAttributelDb = (atributte:string, exist:boolean = true)=>async (value: string | number | boolean) => {
  const user = await User.findOne({
    where: {
        [atributte]:value
    },
  });
  if (user && !exist) throw new Error("Exist this email");
  if (!user && exist) throw new Error("Not Exist this User");
};


export const userValidator = [
  check("email").exists().notEmpty().isLength({ min: 2, max: 50 }),
  check("firstName").exists().notEmpty().isString().isLength({ min: 2, max: 50 }),
  check("lastName").exists().notEmpty().isString().isLength({ min: 2, max: 50 }),
  check("email").isEmail().custom(validateAttributelDb("email", false)),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {
      responseError(res, "ERROR_USER_VALIDATOR", "Already exist this user");
    }
  },
];

export const updateValidator = [
    check("id").exists().notEmpty(),
    check("id").custom(validateAttributelDb("id")),
    (req:Request, res:Response, next:NextFunction)=>{
        try {
            validationResult(req).throw();
            next();
        } catch (error) {
            responseError(res, "ERROR_VALIDATION_UPDATE", error)
        }
    }
]
