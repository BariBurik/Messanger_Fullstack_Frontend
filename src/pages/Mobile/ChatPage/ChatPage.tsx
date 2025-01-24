import Chat from "@/components/Chat/Chat";
import { useState } from "react";

function ChatPage() {
    const [messageText, setMessageText] = useState('');

    return ( 
        <Chat value={messageText} setValue={setMessageText}/>
    );
}

export default ChatPage;