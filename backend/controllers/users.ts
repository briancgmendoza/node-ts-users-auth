import * as Users from "../models/users";
import {
    NextFunction,
    Request as ExpressRequest,
    Response as ExpressResponse
} from "express";

export const all = async (
    _: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
) => {
    try {
        const docs = await Users.all();

        res.send(docs);

    } catch (error) {
        next();
    }
};

export const create = async (
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
) => {
    try {
        const {
            userName,
            password,
            firstName,
            middleName,
            lastName,
            position
        } = req.body;

        const doc = await Users.create({
            userName,
            password,
            firstName,
            middleName,
            lastName,
            position
        });

        res.send(doc);

    } catch (error) {
        next();
    }
};

export const findById = async (
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
) => {
    try {
        const doc = await Users.findById(req.params.id);

        res.send(doc);

    } catch (error) {
        next();
    }
};

export const update = async (
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
) => {
    try {
        const {
            userName,
            password,
            firstName,
            middleName,
            lastName,
            position
        } = req.body;

        const doc = await Users.update(req.params.id, {
            userName,
            password,
            firstName,
            middleName,
            lastName,
            position
        });

        res.send(doc);

    } catch (error) {
        next();
    }
};

export const deleteId = async (
    req: ExpressRequest,
    res: ExpressResponse,
    next: NextFunction
) => {
    try {
        await Users.deleteById(req.params.id);
        res.sendStatus(200);

    } catch (error) {
        next();
    }
};