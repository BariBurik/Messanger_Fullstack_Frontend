import { gql } from "@apollo/client";

export const USERS_WITHOUT_CHATS_WITH_CURRENT_USER = gql`
    query($searchQuery: String!) {
        usersWithoutChatWithThisUser(searchQuery: $searchQuery) {
            name
        }
    }
`;

export const USERS_CHATROOMS = gql`
    query {
        userChatrooms {
            name
            participants {
                name
            }
        }
    }
`

export const CHATROOM = gql`
    query($id: Int!) {
        chatroom(id: $id) {
            name
            participants {
                name
            }
        }
    }
`

export const FILTERED_CHATROOMS = gql`
    query($searchQuery: String!) {
        filteredChatrooms(searchQuery: $searchQuery) {
            name
        }
    }
`;

