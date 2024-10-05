import style from './NotificationContainer.module.css'

const NotificationContainer = ({notifications}) => {
    return(
        <div className={style.container}>
            <h3>Notifications</h3>
            <div className={style.list}>
                {notifications.map((notification, index)=>
                    <div key={index} className={style.notification}>   
                        <p className={style.message}>
                            {notification}
                        </p>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default NotificationContainer