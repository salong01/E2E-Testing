// routes/song-route.ts

import { Request, Response, NextFunction } from 'express';
import User from '../models/users';


export class UsersRoute {
    UsersRoute(app): void {

        // Create User
        app.route('/api/register').post((req: Request, res: Response, next: NextFunction) => {
            User.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        });

        // Get All Users
        app.route('/api/login').get((req: Request, res: Response, next: NextFunction) => {
            User.find((error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })

        // Get User
        app.route('/api/login:user').get((req: Request, res: Response, next: NextFunction) => {
            User.findById(req.params.id, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })

        // Update Song
        app.route('/login').put((req: Request, res: Response, next: NextFunction) => {
            User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                    console.log('Data updated successfully')
                }
            })
        })

        // Delete User
        app.route('/login').delete((req: Request, res: Response, next: NextFunction) => {
            User.findOneAndRemove(req.params.id, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.status(200).json({
                        msg: data
                    })
                }
            })
        })
    }
}