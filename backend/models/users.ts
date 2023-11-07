import { User, UserWithoutId } from "../types/users";
import * as db from "../config/db";
import { DeleteResult, ObjectId } from "mongodb";

export const all = (): Promise<User[]> => {
    return db.get().collection("users").find<User>({}).toArray();
};

export const create = async (user: UserWithoutId): Promise<User> => {
    await db.get().collection("users").insertOne(user);
    return user as User;
};

export const findById = (id: string): Promise<User | null> => {
    return db
        .get()
        .collection("users")
        .findOne<User>({ _id: new ObjectId(id) });
};

export const update = async (id: string, newData: UserWithoutId): Promise<User> => {
    await db
        .get()
        .collection("users")
        .updateOne({ _id: new ObjectId(id) }, { $set: newData });

    return {
        ...newData,
        _id: id
    };
};

export const deleteById = (id: string): Promise<DeleteResult> => {
    return db
        .get()
        .collection("users")
        .deleteOne({ _id: new ObjectId(id) });
};