import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlBaseQuery } from "./apiSetup";
import { IMessage } from "@/types/Message/SliceTypes";
import { IGetMessages } from "@/types/Message/APIType";


export const messageAPI = createApi({
  reducerPath: "messageAPI",
  baseQuery: graphqlBaseQuery({ baseUrl: "http://95.163.230.130:8000/graphql/strawberry/" }),
  tagTypes: ["Chatroom", "User", "Message"],
  endpoints: (builder) => ({
    sendMessage: builder.mutation<IMessage, { accessToken: string; chatroomName: string; text: string }>({
      query: ({ accessToken, chatroomName, text }) => ({
        body: JSON.stringify({
          query: `
            mutation SendMessage($accessToken: String!, $chatroomName: String!, $text: String!) {
              sendMessage(accessToken: $accessToken, chatroomName: $chatroomName, text: $text) {
                id
                text
                createdAt
                user {
                  id
                  name
                }
              }
            }
          `,
          variables: { accessToken, chatroomName, text },
        }),
      })
    }),
    changeMessage: builder.mutation<string, { messageId: number; text: string }>({
      query: ({ messageId, text=null }) => ({
        body: JSON.stringify({
          query: `
            mutation ChangeMessage($accessToken: String!, $messageId: String!, $text: String) {
              changeMessage(messageId: $messageId, text: $text) {
                message
              }
            }
          `,
          variables: { messageId, text },
        }),
      })
    }),
    deleteMessage: builder.mutation<string, { messageId: number}>({
      query: ({ messageId }) => ({
        body: JSON.stringify({
          query: `
            mutation DeleteMessage($messageId: String!) {
              deleteMessage(messageId: $messageId) {
                message
              }
            }
          `,
          variables: { messageId },
        })
      })
    }),
    getMessages: builder.query<IGetMessages, { chatroomName: string; limit?: number, beforeId?: number }>({
      query: ({ chatroomName, limit = 100, beforeId = null }) => ({
        body: JSON.stringify({
          query: `
            query GetMessages($chatroomName: String!, $limit: Int!, $beforeId: Int) {
              getMessages(chatroomName: $chatroomName, limit: $limit, beforeId: $beforeId) {
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
          `,
          variables: { chatroomName, limit, beforeId },
        }),
      })
    }),
  }),
});

export const { useSendMessageMutation, useChangeMessageMutation, useDeleteMessageMutation, useGetMessagesQuery } = messageAPI;
