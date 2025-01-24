import { ICurrentChatSlice } from "@/types/Chat/SliceType";
import { createSlice } from "@reduxjs/toolkit"



const initialState: ICurrentChatSlice = {
    id: null,
    name: '',
    avatar: '',
    participants: [],
    messages: [],
    isLoading: false
}

export const CurrentChatSlice = createSlice({
    name: 'currentChat',
    initialState,
    reducers: {
        setId(state, action) {
            state.id = action.payload
        },
        setName(state, action) {
            state.name = action.payload
        },
        setAvatar(state, action) {
            state.avatar = action.payload
        },
        setParticipants(state, action) {
            state.participants = action.payload
        },
        addParticipant(state, action) {
            state.participants.push(action.payload)
        },
        setMessages(state, action) {
            state.messages = action.payload
        },
        addMessages(state, action) {
            state.messages = [...state.messages, ...action.payload]
        },
        addMessage(state, action) {
            state.messages = [action.payload, ...state.messages]
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        clear(state) {
            state.id = null
            state.name = '',
            state.avatar = ''
            state.participants = []
            state.messages = []
            state.isLoading = false
        }
    }
})

export const { setId, setName, setAvatar, setParticipants, clear } = CurrentChatSlice.actions;

export default CurrentChatSlice.reducer