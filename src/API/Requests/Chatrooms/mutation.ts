import { gql } from "@apollo/client";

export const CHATROOM_CREATE = gql`
    mutation($name: String!, $users: ChatroomCreateUsersType!) {
        chatroomCreate(name: $name, users: $users) {
            name
            participants {
                name
            }
        }
    }
`;

export const CHAT_CREATE = gql`
    mutation($userName: String!) {
        chatCreate(userName: $userName) {
            name
            participants {
                name
            }
        }
    }
`;

export const FAVORITE_CREATE = gql`
    mutation {
        favoriteCreate {
            name
        }
    }
`;

export const CHATROOM_UPDATE = gql`
    mutation($id: Int!, $name: String!, $users: ChatroomCreateUsersType!) {
        chatroomUpdate(id: $id, name: $name, users: $users) {
            name
            participants {
                name
            }
        }
    }
`;

export const CHATROOM_DELETE = gql`
    mutation($id: Int!) {
        chatroomDelete(id: $id) {
            name
        }
    }
`;