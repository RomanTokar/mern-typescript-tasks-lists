import {Request, Response, Router} from 'express';
import {User} from '../models';
import bcrypt from 'bcrypt';

const authRouter = Router();

authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const {name, email, password} = req.body;
    const candidate = await User.findOne({email});

    if (candidate) {
      res.status(400).json({message: 'This user has already existed.'});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({name, email, password: hashedPassword});

    res.send(`User was created.`);
  } catch (e) {
    res.status(500).json({message: e.message,})
  }
});

authRouter.post('/login', async (req: Request, res: Response) => {
  try {

  } catch (e) {

  }
});

export default authRouter;