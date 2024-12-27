import { useMutation, useSubscription } from "@apollo/client";
import { MESSAGE_SUBSCRIPTION, SEND_MESSAGE_MUTATION } from "../Requests/Messages/subscription";

// Subscriptions
export const useChatroomSubscription = (chatroomName: string) => {
    return useSubscription(MESSAGE_SUBSCRIPTION, {
      variables: { chatroomName },
      onError: (error) => {
        console.error("Subscription error: ", error);
      },
    });
};
  
// Mutations
export const useSendMessage = () => {
    return useMutation(SEND_MESSAGE_MUTATION);
};