import { IUser } from "../User/APITypes";

export interface IChatroom {
    id: string;
    name: string,
    participants: IUser[];
    avatar: File | null
}
export interface IChatroomQuery {
    id: number
    name: string;
    participants: IUser[];
    avatar?: string
}

export interface IUsersChatrooms {
    userChatrooms: IChatroomQuery[]
}

export interface IChatroom {
    chatroom: IChatroomQuery
}
