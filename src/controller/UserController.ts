import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {matchedData} from "express-validator";
import {User} from "../entity/User";
import Database from "../db";

/**
 *
 */
class UserController {

    /**
     *
     * @param req
     * @param res
     */
    async find(req: Request, res: Response) {
        const UserDB = await Database.getRepository(User);

        const payload = matchedData(req);

        if (!Object.keys(payload).length) {
            const users = await UserDB.find();

            return res.send({data: users})
        }

        const user = await UserDB.findOne({
            where: payload
        })

        if (!user) {
            return res.status(404).send({error: {message: "User not found"}})
        }

        return res.send({data: user})
    }

    /**
     *
     * @param req
     * @param res
     */
    async create(req: Request, res: Response) {
        const UserDB = await Database.getRepository(User);

        const payload = matchedData(req);
        const user = await UserDB.create(payload);
        await UserDB.save(user);

        return res.status(201).send({data: user})
    }

    /**
     *
     * @param req
     * @param res
     */
    async update(req: Request, res: Response) {
        const UserDB = await Database.getRepository(User);

        const {id} = matchedData(req, { locations: ["query"]});
        const payload = matchedData(req, {locations: ["body"]})

        await UserDB.update(id, payload)

        return res.send({status: true})
    }

    /**
     *
     * @param req
     * @param res
     */
    async delete(req: Request, res: Response) {
        const UserDB = await Database.getRepository(User);
        const {id} = matchedData(req, { locations: ["query"]});

        await UserDB.delete(id);

        return res.send({status: true})
    }
}

export default new UserController();

