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
    _id: string,
}

export type UserSignUp = {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string
}

export type Credentials = {
    email: string,
    password: string
} 

export type Project = {
    name: string,
    description: string,
    icon: string,
}

export type SideBar2Props = {
    projectList: Project[];
  };