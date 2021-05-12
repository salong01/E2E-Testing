import { Request, Response, NextFunction } from 'express';
import UserHero from '../models/user-heroes';

export class UserHeroesRoute {
    private userHeroesUrl = '/api/userList/:user';  // URL to web api

    UserHeroesRoute(app): void {

        //Save User Hero
        // app.route(this.userHeroesUrl).post((req: Request, res: Response, next: NextFunction) => {
        //     UserHero.create(req.body, (error, data) => {
        //         if (error) {
        //             return next(error)
        //         } else {
        //             res.json(data)
        //             console.log('Hero saved successfully')
        //         }
        //     })
        // });

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

        // Delete user hero from list
        // app.route(this.userHeroesUrl).delete(async (req: Request, res: Response, next: NextFunction) => {
        //     const username = req.body.username;
        //     const hero = req.body.hero;
        //     const userHero = await UserHero.findOne({username, hero})
        //     if(!userHero){
        //         return res.status(404).send('User has not the hero with that name.')
        //     }
        //     else{
        //         UserHero.deleteOne({username, hero}, (error, data) => {
        //             if (error) {
        //                 return next(error)
        //             } else {
        //                 return res.status(200).send('Hero correctly deleted.')
        //             }
        //         })
        //     }
        // })
    }
}