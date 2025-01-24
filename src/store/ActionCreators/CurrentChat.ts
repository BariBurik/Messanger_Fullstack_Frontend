import { ICurrentChatSlice } from "@/types/Chat/SliceType"
import { AppDispatch } from ".."
import { CurrentChatSlice } from "../Slice/CurrentChatSlice"
import { IMessage } from "@/types/Message/SliceTypes"
import { IUser } from "@/types/User/APITypes"


export const initChat = (dispatch: AppDispatch, chat: ICurrentChatSlice) => {
    if (chat) {
        dispatch(CurrentChatSlice.actions.clear())
        dispatch(CurrentChatSlice.actions.setId(chat.id))
        dispatch(CurrentChatSlice.actions.setName(chat.name))
        dispatch(CurrentChatSlice.actions.setAvatar(chat.avatar))
        dispatch(CurrentChatSlice.actions.setParticipants(chat.participants))
        dispatch(CurrentChatSlice.actions.setMessages(chat.messages))
    }
}

export const addParticipantToChat = (dispatch: AppDispatch, participant: IUser) => {
    if (participant) {
        dispatch(CurrentChatSlice.actions.addParticipant(participant))
    }
}

export const addMessagesToChat = (dispatch: AppDispatch, messages: IMessage[]) => {
    if (messages) {
        dispatch(CurrentChatSlice.actions.addMessages(messages))
    }
}

export const addMessageToChat = (dispatch: AppDispatch, message: IMessage) => {
    if (message) {
        dispatch(CurrentChatSlice.actions.addMessage(message))    
    }
}

export const clearChat = (dispatch: AppDispatch) => {
    dispatch(CurrentChatSlice.actions.clear())
}