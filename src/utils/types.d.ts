export interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    workSpaceList: string[],
    icon: string,
}

export interface IGroup {
    _id: string;
    name: string;
    description: string;
    projectId: string;
}

export type UserUpdate = {
    firstName: string,
    lastName: string,
    phone: string,
    _id: strung,
}

export type UserSignUp = {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: strung
}

export type Credentials = {
    email: string,
    password: string
}

