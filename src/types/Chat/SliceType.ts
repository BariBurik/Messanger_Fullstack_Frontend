import { IMessage } from "../Message/SliceTypes";
import { IUser } from "../User/APITypes";


export interface ICurrentChatSlice {
    id: number;
    name: string
    avatar: string
    participants: IUser[]
    messages: IMessage[] | null
    isLoading?: boolean
}

export interface IChat {
    id: number
    name: string
    avatar: string
    lastMessage: string
    unreadedMessages: number
    lastMessageTime: string | Date
    participants: IUser[]
}

export interface chatsSliceType {
    chats: IChat[]
    isLoading: boolean
}