export type User = {
    _id: string;
    userName: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    position: string;
};

export type UserWithoutId = Omit<User, "_id">;