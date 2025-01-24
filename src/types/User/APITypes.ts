  export interface IUserQuery {
    id: string;
    name: string;
    avatar?: string
}

export interface IUser {
    id: number;
    name: string;
    email?: string;
    avatar?: string;
}

export interface ReLogin {
    userReLogin: {
        message: string;
        tempToken: string
        user: IUser
    }
}

export interface IUserRegister {
    id?: number;
    name: string;
    email: string;
    password: string;
    avatar?: File | null;
}

export interface IUserUpdate {
    id?: number;
    name: string;
    email: string;
    password?: string;
    avatar?: File | null;
}

export interface IUserGet {
  id?: number
  name: string
  avatar: string
}

export interface IGetUsersPerQuery {
  getUsersPerQuery: IUser[]
}