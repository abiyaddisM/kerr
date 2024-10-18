import style from "./signature.module.css"

function Signature({state=false}){

    


    

    return(
        <div className={style.signaturecontainer}>
                <p className={style.dhead}>Signature</p>
                <div className={style.sign}>
                    <div className={style.signature}>
                        <label className={style.orderdesc} htmlFor="comm">Client:</label><input type="text" name='comm'/>
                    </div>

                </div>
                <button className={style.pbuttons}>Agree</button>

                
                

            </div>
    )
}

export default Signature