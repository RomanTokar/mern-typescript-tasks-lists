import {Request, Response} from 'express';
import {User} from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from 'config';

const jwtSecretKey: string = config.get('jwtSecretKey');

export const signUp = async (req: Request, res: Response) => {
  try {
    const {name, email, password} = req.body;
    const candidate = await User.findOne({email});

    if (candidate) {
      res.status(400).json({error: {message: 'This user has already existed.'}});
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    await User.create({name, email, password: hashedPassword});

    res.end('User was created.');
  } catch (e) {
    res.status(500).json({error: {message: e.message}});
  }
}

export const signIn = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
      return res.status(400).json({error: {message: `User isn't exist`}});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({error: {message: 'Incorrect email or password'}});
    }

    const token = jwt.sign(
      {userId: user.id},
      jwtSecretKey,
      {expiresIn: '1h'}
    );

    res.json({token, userId: user.id});
  } catch (e) {
    res.status(500).json({error: {message: e.message}});
  }
}