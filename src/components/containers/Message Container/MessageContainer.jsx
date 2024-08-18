import MessageCard from "../../cards/Message Card/MessageCard.jsx";
import style from './MessageContainer.module.css'
import {useEffect, useRef} from "react";
// eslint-disable-next-line react/prop-types
export function MessageContainer({data}) {
    const myId = '1'
    const scrollView = useRef();
    useEffect(()=>{
        scrollView.current?.scrollIntoView({ behavior: 'smooth',block: 'start'  });
    },[data])

    // eslint-disable-next-line react/prop-types
    const message = data.map((value,index,array)=>{
        const visibility = index === array.length - 1 || array[index + 1].id !== value.id;
        return <MessageCard
            key = {index}
            time={value.time}
            text={value.text}
            images={value.images}
            left={value.id !== myId}
            visible={visibility}

        />
    })

    return (
        <div className={style.container} >
            {message}
            <div ref={scrollView}/>
        </div>
    )
}
