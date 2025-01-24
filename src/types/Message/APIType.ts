import { IChatroomQuery } from "../Chat/APITypes";
import { IUserQuery } from "../User/APITypes";

export interface IMessageQuery {
    id: string;
    text: string;
    createdAt: string;
    user: IUserQuery;
    chatroom: IChatroomQuery;
    isRead: boolean;
}

export interface IGetMessages {
    getMessages: IMessageQuery[]
}