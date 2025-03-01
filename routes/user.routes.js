import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', (res, req) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (res, req) => res.send({ title: 'UPDATE user' }));

userRouter.delete('/:id', (res, req) => res.send({ title: 'DELETE user' }));

export default userRouter;
