import { ClipboardImport, GalleryImport, Icon, ImportCircle, ImportCurve, ImportSquare } from 'iconsax-react'
import { IconButton } from '../../buttons/Icon Button/IconButton'
import style from './SaveContainer.module.css'

const SaveContainer = () => {
    return (
        <div className={style.container}>
            <h1>Save Art</h1>
            <div className={style.save_methods}>
                <div className={style.library}>
                <h2>Save in library</h2>
                </div>
                <div className={style.device}>
                <h2>Save in device</h2>   
                {/* <IconButton src={} term={''}/> */}
                <button className={style.save_button}><ImportCurve size="40" color="#000000"/></button>
                </div>
            </div>
        </div>
    )
}

export default SaveContainer
