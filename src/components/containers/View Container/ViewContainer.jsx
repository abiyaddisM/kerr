import styles from "./ViewContainer.module.css"

function ViewContainer({images}){
    return(
        <div className={styles.container}>
            {images.map((img,index)=>{
                return<img key={(index)} src={img} className={styles.img}/>
                    
            })}

        </div>
    );


}

export default ViewContainer