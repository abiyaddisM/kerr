import { ClipboardImport, GalleryImport, Icon, ImportCircle, ImportCurve, ImportSquare } from 'iconsax-react'
import { IconButton } from '../../buttons/Icon Button/IconButton'
import style from './SaveContainer.module.css'
import axios from 'axios'

const SaveContainer = ({setIsOpen, id}) => {

    function handleCancelClick(){
        setIsOpen(false)
    }

    function handleSave(){
        const url = "https://auth.bizawit.com/api/v1/gallery"

        const post = {
            userId: 1,
            postID: id
        }
        axios.post(url, post)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }

    return (
        <div className={style.container}>
            <h1>Save Art</h1>
            <div className={style.save_methods}>
                <div className={style.library}>
                <h2>Save in library?</h2>
                </div>
                {/* <div className={style.device}> */}
                {/* <h2>Save in device</h2>    */}
                {/* <IconButton src={} term={''}/> */}
                {/* <button className={style.save_button}><ImportCurve size="40" color="#000000"/></button> */}
                {/* </div> */}
                <div className={style.buttons}>

                    <button className={style.btn} type='button' onClick={handleCancelClick}>Cancel</button>
                    <button className={style.btn2} type="button" onClick={handleSave}><p>Save</p></button>

                </div>
            </div>
        </div>
    )
}

export default SaveContainer
