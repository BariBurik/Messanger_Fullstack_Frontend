import { gql } from "@apollo/client";

export const MESSAGE_SUBSCRIPTION = gql`
  subscription ChatroomMessage($chatroomName: String!) {
    chatroomMessage(chatroomName: $chatroomName) {
      id
      chatroom {
        id
        name
      }
      user {
        id
        name
      }
      text
      createdAt
    }
  }
`;

export const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessage($chatroomName: String!, $text: String!) {
    sendMessage(chatroomName: $chatroomName, text: $text) {
      id
      text
      createdAt
      user {
        id
        name
      }
    }
  }
`;

export const GET_MESSAGES= gql`
  query GetMessages($chatroomName: String!) {
    getMessages(chatroomName: $chatroomName) {
      id
      text
      createdAt
      user {
        id
        name
      }
      chatroom {
        id
        name
      }
    }
  }
`