// import { AppDispatch, IUser } from ".."
// import { ChatsSlice, chatsSliceType } from "../Slice/ChatsSlice"

// interface IMessage {
//     id: string
//     text: string
//     createdAt: string
//     user: IUser
// }



// export const setSortedChats = (dispatch: AppDispatch, chats: chatsSliceType) => {
//     if (chats && chats.chats.length > 0) {
//         const sortedChats = [...chats.chats].sort((a, b) => {
//             const dateA = new Date(a.lastMessageTime);
//             const dateB = new Date(b.lastMessageTime);
//             return dateA.getTime() - dateB.getTime()
//         });
//         dispatch(ChatsSlice.actions.setChats(sortedChats));
//     } else {
//         dispatch(ChatsSlice.actions.setChats([]));
//     }
// };

// export const setChatslogOut = (dispatch: AppDispatch) => {
//     dispatch(ChatsSlice.actions.logout())
// }