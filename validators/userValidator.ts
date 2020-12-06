import {check, ValidationChain} from 'express-validator';

type UserValidatorMethod = 'signUp' | 'signIn'

type UserValidators = Array<ValidationChain>

const userValidator = (method: UserValidatorMethod): UserValidators => {
  const isRequiredMessage = 'Is required field';
  const maxMessage = 'Must be at most 30 characters';
  const minMessage = 'Must be at least 8 characters';

  const name = check('name')
    .notEmpty().withMessage(isRequiredMessage)
    .isLength({max: 30}).withMessage(maxMessage);

  const email = check('email')
    .notEmpty().withMessage(isRequiredMessage)
    .isEmail().withMessage('Must be a valid email');

  const password = check('password')
    .notEmpty().withMessage(isRequiredMessage)
    .isLength({min: 8}).withMessage(minMessage)
    .isLength({max: 30}).withMessage(maxMessage);

  switch (method) {
    case 'signUp':
      return [name, email, password];
    case 'signIn':
      return [email, password];
    default:
      return [];
  }
};

export default userValidator;