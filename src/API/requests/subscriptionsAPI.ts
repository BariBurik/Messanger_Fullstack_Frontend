import { gql } from "@apollo/client";


export const MESSAGE_SUBSCRIPTION = gql`
  subscription ChatroomMessage($chatroomNames: [String!]!) {
    chatroomMessage(chatroomNames: $chatroomNames) {
      id
      text
      createdAt
      user {
        id
        name
        avatar
      }
      chatroom {
        id
        name
      }
    }
  }
`;

export const NEW_CHATROOM_SUBSCRIPTION = gql`
  subscription NewChatroom($accessToken: String!) {
    newChatroom(accessToken: $accessToken) {
      id
      name
      avatar
      participants {
        id
        name
      }
    }
  }
`;

export const CHATROOM_UPDATE_SUBSCRIPTION = gql`
  subscription UpdatedChatroom($accessToken: String!) {
    updatedChatroom(accessToken: $accessToken) {
      id
      name
      avatar
      participants {
        id
        name
      }
    }
  }
`;

export const CHATROOM_DELETE_SUBSCRIPTION = gql`
  subscription DeletedChatroom($accessToken: String!) {
    deletedChatroom(accessToken: $accessToken) {
      id
      name
      avatar
      participants {
        id
        name
      }
    }
  }
`;