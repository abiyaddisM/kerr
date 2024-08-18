import styles from './ChatContainer.module.css'
import ChatCard from "../../cards/Chat Card/ChatCard.jsx";
export function ChatContainer() {
    const data = [
        {
            id:'1',
            image:'https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
            state:false,
            name:'Gary Mave',
            lastSentMessage:'Would you like to see...',
            lastSentTime:'5 min'
        },
        {
            id:'2',
            image:'https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
            state:true,
            name:'Gary Mave',
            lastSentMessage:'Would you like to see...',
            lastSentTime:'5 min'
        },
        {
            id:'3',
            image:'https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
            state:false,
            name:'Gary Mave',
            lastSentMessage:'Would you like to see...',
            lastSentTime:'5 min'
        },
    ]
    return (
        <div className={styles.container}>
            {data.map((value=>{
                return <ChatCard
                    key={value.id}
                    image={value.image}
                    state={value.state}
                    name={value.name}
                    lastSentMessage={value.lastSentMessage}
                    lastSentTime={value.lastSentTime}
                />
            }))}
        </div>
    )
}
