import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: 'Oooops.. Unexpected error occured.' });
};

export { errorHandler };