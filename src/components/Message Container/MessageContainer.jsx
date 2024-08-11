import MessageCard from "../Message Card/MessageCard.jsx";

export function MessageContainer() {
    const myId = '1'
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
        }

    ]

    const message = data.map((value,index,array)=>{
        const visibility = index === array.length - 1 || array[index + 1].id !== value.id;
        return <MessageCard
            key = {value.id}
            time={value.time}
            text={value.text}
            images={value.images}
            left={value.id !== myId}
            visible={visibility}
        />
    })

    return (
        message
    )
}
