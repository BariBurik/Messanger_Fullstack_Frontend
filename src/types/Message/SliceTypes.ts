import { IChatroom, IChatroomQuery } from "../Chat/APITypes"
import { IUser } from "../User/APITypes"


export interface IMessage {
    id: number
    text: string
    user: IUser
    createdAt: string
    chatroom?: IChatroomQuery;
}