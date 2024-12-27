import { useChatroomSubscription, useSendMessage } from "@/API/hooks/messageHooks";
import { useEffect, useState } from "react";

 
export const App = () => {

    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState(['']);

    const subscriptionMessagesResp = useChatroomSubscription('ДАУНЫ');

    const [sendMessage, messageResp] = useSendMessage()
    console.log(messageResp)
   

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                sendMessage({variables: {
                    text: messageText, 
                    chatroomName: "ДАУНЫ"
                    },
                    context: {
                        server: "strawberry"
                    },
                });
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })

    return ( 
        <div>
            <input value={messageText} onChange={(e) => setMessageText(e.target.value)} type="text" />
            <div>{messages}</div>
        </div>
    );
}

export default App;