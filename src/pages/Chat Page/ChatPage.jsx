import ChatCard from "../../components/Chat Card/ChatCard.jsx";


function ChatPage(){
    return (
        <>
            <ChatCard
                image={'https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg'}
                state={false}
                name={'Gary Mave'}
                lastSentMessage={'Would you like to see...'}
                lastSentTime={'5 min'}
            />
        </>
    )
}

export default ChatPage;
