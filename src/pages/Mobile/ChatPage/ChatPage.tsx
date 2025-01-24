import Chat from "@/components/Chat/Chat";
import Loader from "@/components/UI/Loader/Loader";
import Template from "@/components/UI/Template/Template";
import { useAppDispatch } from "@/hooks/redux";
import { useChatroomQuery, useGetMessagesQuery } from "@/store";
import { initChat } from "@/store/ActionCreators/CurrentChat";
import { ICurrentChatSlice } from "@/types/Chat/SliceType";
import { IMessage } from "@/types/Message/SliceTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ChatPageMobile() {
    const [messageText, setMessageText] = useState('');
    
        const {name} = useParams()
        const dispatch = useAppDispatch()
    
        const {data: chatroom, isLoading: isChatroomLoading} = useChatroomQuery(String(name))
        const {data: messages, isLoading: isMessagesLoading} = useGetMessagesQuery({chatroomName: name, limit: 100})
    
        useEffect(() => {
            if (chatroom && messages && !isChatroomLoading && !isMessagesLoading) {
                const messagesData: IMessage[] = messages.getMessages.map(message => ({
                    id: Number(message.id),
                    text: message.text,
                    user: {
                        ...message.user,
                        id: Number(message.user.id)
                    },
                    createdAt: message.createdAt,
                    isRead: message.isRead
                }))
                const chat: ICurrentChatSlice = {
                    id: chatroom.chatroom.id,
                    name: chatroom.chatroom.name,
                    avatar: chatroom.chatroom.avatar,
                    participants: chatroom.chatroom.participants,
                    messages: messagesData
                }
                initChat(dispatch, chat)
            } 
        }, [chatroom, messages, isChatroomLoading, isMessagesLoading])

    return ( 
        <Template>
            {isChatroomLoading || isMessagesLoading ? <Loader/> : <Chat value={messageText} setValue={setMessageText}/>}
        </Template>
    );
}

export default ChatPageMobile;