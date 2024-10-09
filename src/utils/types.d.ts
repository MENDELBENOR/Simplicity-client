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

export type UserUpdate = {
    firstName: string,
    lastName: string,
    phone: string,
    _id: strung,
}

export type Credentials = {
    email: string,
    password: string
} 