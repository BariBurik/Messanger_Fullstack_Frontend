import ChatLink from "../ChatLink/ChatLink";
import avatar from "../../../public/avatar.png"
import styles from "./Chatbar.module.scss";
import Search from "../UI/Search/Search";

interface ChatProps {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

function Chatbar({query, setQuery}: ChatProps) {
    const isMobile = __PLATFORM__ === "mobile"

    return ( 
        <div className={`${isMobile ? styles.mobile_chatbar_and_search : styles.chatbar_and_search}`}>
            <div className={styles.search}><Search value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search"/></div>
            <div className={`${isMobile ? styles.mobile_chatbar : styles.chatbar}`}>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdsdfsdfsdfdsafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
                <ChatLink avatar={avatar} username="username" lastMessage="last messaasdgfEQAGwefEQAFqwdQWAFfsdafsdfdsfdsafsdafdsfadsge" time="00:00 AM" unread="123"/>
            </div>
        </div>
    );
}

export default Chatbar;