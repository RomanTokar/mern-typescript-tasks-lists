import {Router} from 'express';
import userValidator from '../validators/userValidator';
import customValidation from '../middlewares/customValidation';
import {signIn, signUp} from '../controllers/userController';

const authRouter = Router();

authRouter.post(
  '/signUp',
  userValidator('signUp'),
  customValidation('Incorrect data for sign up'),
  signUp
)

authRouter.post(
  '/signIn',
  userValidator('signIn'),
  customValidation('Incorrect data for sign in'),
  signIn
);

export default authRouter;