import styles from "./ViewContainer.module.css"

function ViewContainer({images}){
    return(
        <div className={styles.container}>
            {images.map((img,index)=>{
                return <div key={(img)}>
                    <img  src={`https://auth.bizawit.com/api/v1/upload/original/${img}`}
                         className={styles.img}/>
                </div>

            })}
        </div>
    );
}

export default ViewContainer
