import { Request, Response } from "express";

export const responseSuccess = (
  res: Response,
  data: object,
  status: number = 200
) => {
  res.status(status).json({
    data,
    error: "",
  });
};

export const responseError = (
  res: Response,
  error: string,
  message: unknown,
  status: number = 500
) => {
  console.log(message);
  res.status(status).json({
    data: "",
    error,
  });
};
