// routes/heroes-route.ts

import { Request, Response, NextFunction } from 'express';
import Hero from '../models/heroes';
import UserHero from '../models/user-heroes';


export class HeroesRoute {
    HeroesRoute(app): void {

        // Create Hero
        app.route('/api/heroes').post(async (req: Request, res: Response, next: NextFunction) => {
            await Hero.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        });

        // Get All Heroes
        app.route('/api/heroes').get((req: Request, res: Response, next: NextFunction) => {
            Hero.find((error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })

        // Get Hero
        app.route('/api/heroes/:name').get((req: Request, res: Response, next: NextFunction) => {
            Hero.findOne({ name: req.params.name}, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        })

         //Save User Hero
        app.route('/api/heroes/:name').post(async (req: Request, res: Response, next: NextFunction) => {
            const username = req.body.username;
            const hero = req.body.hero;
            const userHero = await UserHero.findOne({username, hero})
            if(userHero){
                return res.status(400).send('User alredy has this hero in list.')
            }
            else{
                await UserHero.create(req.body, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        res.json(data)
                    }
                })
            }
        });
        
        // Delete user hero from list
        app.route('/api/heroes/:name').put(async (req: Request, res: Response, next: NextFunction) => {
            const username = req.body.username;
            const hero = req.body.hero;
            const userHero = await UserHero.findOne({username, hero})
            if(!userHero){
                return res.status(400).send('User has not this hero in list')
            }
            else{
                await UserHero.deleteOne({username, hero}, (error, data) => {
                    if (error) {
                        return next(error)
                    } else {
                        return res.status(200).send('Hero correctly deleted.')
                    }
                })
            }
        })
    }
}