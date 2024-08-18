import {MessageContainer} from "../../components/containers/Message Container/MessageContainer.jsx";
import {ChatContainer} from "../../components/containers/Chat Container/ChatContainer.jsx";
import styles from './ChatPage.module.css'
import {InputContainer} from "../../components/containers/Input Container/InputContainer.jsx";
import {useState} from "react";
import {IconButton} from "../../components/buttons/Icon Button/IconButton.jsx";
import themeIcon from "../../assets/icons/moon.svg";

function ChatPage(){
    const data = [{
        id:'1',
        time:'2:34 pm',
        text:'I was looking for an artist to paint me a portrait of my cat. Tell me the story',
        images:['https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg']
    },
        {
            id:'2',
            time:'2:34 pm',
            text:'I was looking for an artist to paint me a portrait of my cat. Tell me the story',
            images:['https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg']
        },
        {
            id:'2',
            time:'2:34 pm',
            text:'I was looking for an artist to',
        },
        {
            id:'2',
            time:'2:34 pm',
            text:'I was looking for an artist to dfdf ewrg fr r ',
        },
        {
            id:'1',
            time:'2:34 pm',
            text:'I was looking for an artist to dfdf ewrg fr r ',
        },
        {
            id:'1',
            time:'2:34 pm',
            text:'I was looking for an artist to dfdf ewrg fr rsadsdsad fd ',
        },
        {
            id:'2',
            time:'2:34 pm',
            text:'I was looking for an artist to dfdf ewrg fr rsadsdsad fd ',
        },
        {
            id:'1',
            time:'2:34 pm',
            text:'I was looking for an artist to dfdf ewrg fr rsadsdsad fd ',
        },
        {
            id:'1',
            time:'2:34 pm',
            text:'I was looking for an artist to dfdf ewrg fr rsadsdsad fd ',
        }

    ]
    const [messages,setMessages] = useState(data)
    const sendMessage = (data)=>{
        const newMessage = { id: '1', time: '2:25 pm', text: data.message,images:data.images };
        const updatedMessages = [...messages, newMessage]; // Create a new array
        setMessages(updatedMessages);
    }
    const changeTheme = ()=>{
        const root = document.documentElement;
        root.style.setProperty('--primary-color', 'var(--white-color)');
        root.style.setProperty('--secondary-color', 'var(--light-gray-color)');
        root.style.setProperty('--background-color', 'var(--blue-black)');
        root.style.setProperty('--border-color', 'var(--dark-navy-color)');
        root.style.setProperty('--dark-border-color', 'var()');
        root.style.setProperty('--text-heavy-color', 'var(--gray-0)');
        root.style.setProperty('--text-medium-color', 'var(--gray-200)');
        root.style.setProperty('--text-light-color', 'var(--gray-400)');
        root.style.setProperty('--text-counter-color', 'var(--gray-1000)');
    }
    return (
        <div className={styles.container}>
            
            {/*<IconButton src={themeIcon} padding={'5px'} backgroundColor={'transparent'} backgroundColorHover={'transparent'} onClick={changeTheme}/>*/}

            <div className={styles.message_container}>
                <MessageContainer data={messages}/>
            </div>
            <div className={styles.chat_container}>
                <ChatContainer/>
            </div>
            <div className={styles.input_container}>
                <InputContainer onClick={sendMessage}/>
            </div>
        </div>
    )
}

export default ChatPage;
