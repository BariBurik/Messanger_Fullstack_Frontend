import Chat from "@/components/Chat/Chat";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./ChatPage.module.scss";
import { useState, useEffect } from "react";
import Template from "@/components/UI/Template/Template";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux";
import { useChatroomQuery } from "@/API/requests/chatroomApi";
import { useGetMessagesQuery } from "@/API/requests/messagesApi";
import Loader from "@/components/UI/Loader/Loader";
import { initChat } from "@/store/ActionCreators/CurrentChat";
import { IMessage } from "@/types/Message/SliceTypes";
import { ICurrentChatSlice } from "@/types/Chat/SliceType";

function ChatPage() {
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
                    id: Number(message.user.id),
                    name: message.user.id,
                    avatar: message.user.avatar
                },
                createdAt: message.createdAt
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
            <div className={styles.chat_page}>
                <Navbar/>
                {isChatroomLoading || isMessagesLoading ? <Loader/> : <Chat value={messageText} setValue={setMessageText}/>}
            </div>
        </Template>
    );
}

export default ChatPage;