// import { chatsSliceType } from "@/types/Chat/SliceType"
// import { createSlice } from "@reduxjs/toolkit"

// interface IParticipant {
//     name: string
// }



// const initialState: chatsSliceType = {
//     chats: [],
//     isLoading: false
// }

// export const ChatsSlice = createSlice({
//     name: 'chats',
//     initialState,
//     reducers: {
//         setChats(state, action) {
//             state.chats = action.payload
//         },
//         addChat(state, action) {
//             state.chats.push(action.payload)
//         },
//         logout(state) {
//             state.chats = []
//             state.isLoading = false
//         }
//     }
// })

// export const { setChats, addChat, logout } = ChatsSlice.actions;

// export default ChatsSlice.reducer