import {NextFunction, Request, Response} from 'express';
import {ValidationError, validationResult} from 'express-validator';

const errorFormat = ({msg, param}: ValidationError) => {
  return {
    message: msg,
    param
  };
};

const customValidation = (message: string) =>  (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(422).json({
      error: {
        errors: result.formatWith(errorFormat).array({onlyFirstError: true}),
        message
      }
    });
  }

  next();
};

export default customValidation;