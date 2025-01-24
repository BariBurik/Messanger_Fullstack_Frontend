import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from "./Slice/UserSlice"
import { userAPI } from '@/API/requests/userApi'
import { messageAPI } from '@/API/requests/messagesApi'
import { chatAPI } from '@/API/requests/chatroomApi'
// import ChatsReducer from './Slice/ChatsSlice'
import CurrentChatReducer from './Slice/CurrentChatSlice'

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [messageAPI.reducerPath]: messageAPI.reducer,
    [chatAPI.reducerPath]: chatAPI.reducer,
    user: userReducer,
    // chats: ChatsReducer,
    currentChat: CurrentChatReducer
})

export const setupStore = () => { 
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(
        userAPI.middleware,
        messageAPI.middleware,
        chatAPI.middleware,
      ),
  });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export * from '@/API/requests/chatroomApi';
export * from '@/API/requests/messagesApi';
export * from '@/API/requests/userApi'