import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = res.statusCode ? res.statusCode : 500;
  res.status(status);

  res.json({ message: err.message });
};

export default errorHandler;
