import { useMutation, useQuery } from "@apollo/client";
import { CHATROOM, FILTERED_CHATROOMS, USERS_CHATROOMS, USERS_WITHOUT_CHATS_WITH_CURRENT_USER } from "../Requests/Chatrooms/query";
import { CHAT_CREATE, CHATROOM_CREATE, CHATROOM_DELETE, CHATROOM_UPDATE, FAVORITE_CREATE } from "../Requests/Chatrooms/mutation";

export const useUsersChatroom = () => {
    return useQuery(USERS_CHATROOMS);
};
  
export const useChatroom = (id: number) => {
    return useQuery(CHATROOM, {
        variables: { id },
    });
};
  
export const useFilteredChatrooms = (searchQuery: string) => {
    return useQuery(FILTERED_CHATROOMS, {
        variables: { searchQuery },
    });
};
  
export const useUsersWithoutChatsWithCurrentUser = (searchQuery: string) => {
    return useQuery(USERS_WITHOUT_CHATS_WITH_CURRENT_USER, {
        variables: { searchQuery },
    });
};
  
export const useChatroomCreate = () => {
    return useMutation(CHATROOM_CREATE);
};
  
export const useChatCreate = () => {
    return useMutation(CHAT_CREATE);
};
  
export const useFavoriteCreate = () => {
    return useMutation(FAVORITE_CREATE);
};
  
export const useChatroomUpdate = () => {
    return useMutation(CHATROOM_UPDATE);
};
  
export const useChatroomDelete = () => {
    return useMutation(CHATROOM_DELETE);
};