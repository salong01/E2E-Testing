import { Request, Response, NextFunction } from 'express';
import UserHero from '../models/user-heroes';

export class UserHeroesRoute {
    private userHeroesUrl = '/api/userList/:user';  // URL to web api

    UserHeroesRoute(app): void {

        // Get all user heroes
        app.route(this.userHeroesUrl).get((req: Request, res: Response, next: NextFunction) => {
            UserHero.find({username: req.params.user}, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        });
    }
}