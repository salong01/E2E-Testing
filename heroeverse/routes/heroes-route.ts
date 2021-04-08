// routes/heroes-route.ts

import { Request, Response, NextFunction } from 'express';
import Hero from '../models/heroes';


export class HeroesRoute {
    HeroesRoute(app): void {

        // Create Hero
        app.route('/api/heroes').post((req: Request, res: Response, next: NextFunction) => {
            Hero.create(req.body, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                    console.log('Hero created successfully')
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
    }
}