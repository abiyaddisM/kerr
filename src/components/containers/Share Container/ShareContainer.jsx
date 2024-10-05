import { useLocation } from 'react-router-dom'
import style from './ShareContainer.module.css'
import { Copy, Snapchat, Whatsapp } from 'iconsax-react'
import ProfileContainer from '../Profile Container/ProfileContainer'


const profiles = [
    {
        id: '1',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Aaron Mesfin'
    },
    {
        id:'2',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Some Guy'
    },
    {
        id: '3',
        image: '//miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg',
        name: 'Kate Smith'
    }
]


const ShareContainer = () => {

const location = useLocation()
const currentUrl = window.location.href

function handleCopyClick(){
     navigator.clipboard.writeText(currentUrl)
            .then(() => {
                alert('URL copied to clipboard! You can paste it elsewhere.');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
}

    return (
        <div className={style.container}>
            <h1>Share Art</h1>
            <div className={style.share}>
                <div className={style.internal_share}>
                    <ProfileContainer profiles={profiles}/>
                </div>
                <div className={style.external_share}>
                    <div className={style.app_buttons}>
                        <Whatsapp size={"50px"}/>
                        <Snapchat size={"50px"} variant="Bold"/>

                    </div>
                </div>
                <div className={style.link_box}>
                    <a href={currentUrl} target="_blank" >{currentUrl}</a>
                    <Copy size={"30px"} onClick={handleCopyClick}/>
                </div>

            </div>
        </div>
    )
}

export default ShareContainer
