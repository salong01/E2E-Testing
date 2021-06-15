import { Request, Response, NextFunction } from 'express';
import User from '../models/users';

export class UsersRoute {
    UsersRoute(app): void {
        const jwt = require('jsonwebtoken')
        const secretkey = 'secretKey'

        // Register User
        app.route('/api/register').post(async (req: Request, res: Response, next: NextFunction) => {
            const username = req.body.username;
            const user = await User.findOne({username})
            if(user){
                return res.status(400).send('User already exists with that username. Try with another username')
            }else {
                await User.create(req.body, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        const token = jwt.sign({ _id : req.body._id}, secretkey)
                        res.status(200).json({token})
                    }
                })
            }
        });

        // Loggin User
        app.route('/api/login').post(async (req: Request, res: Response, next: NextFunction) => {
            const username = req.body.username;
            const pass = req.body.password;
            const user = await User.findOne({username})
            if(!user){
                alert('User with that username does not exists. Try with another username')
                return res.status(404).send('User with that username does not exists. Try with another username')
            }else if(user.password != pass){
                alert('Wrong password')
                return res.status(404).send('Wrong password')
            }else {
                const token = jwt.sign({ _id : req.body._id}, secretkey)
                res.status(200).json({token})
            }
        });
    }
}