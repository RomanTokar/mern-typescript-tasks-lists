import {Request, Response, Router} from 'express';
import {User} from '../models';
import bcrypt from 'bcrypt';
import {check, validationResult} from 'express-validator';

const authRouter = Router();

authRouter.post(
  '/register',
  [
    check('name', 'Maximal name length is thirty symbols.').isLength({max: 30}),
    check('email', 'Incorrect email').isEmail(),
    check('password')
      .isLength({max: 30}).withMessage('Minimal password length is six symbols.')
      .isLength({min: 8}).withMessage('Maximal password length is thirty symbols.'),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data for registration.',
        });
      }

      const {name, email, password} = req.body;
      const candidate = await User.findOne({email});

      if (candidate) {
        res.status(400).json({message: 'This user has already existed.'});
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      await User.create({name, email, password: hashedPassword});

      res.send(`User was created.`);
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  },
);

authRouter.post(
  '/login',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password must be existed').exists(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data for login',
        });
      }

      const {email, password} = req.body;
      const user = await User.findOne({email});

      if (!user) {
        return res.status(400).json({message: `Incorrect email or password`})
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({message: 'Incorrect email or password'})
      }

      res.send(user)
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  },
);

export default authRouter;