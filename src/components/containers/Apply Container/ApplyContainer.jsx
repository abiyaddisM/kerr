import { func } from 'prop-types';
import CommandButton from '../../buttons/Command Buttons/CommandButton';
import styles from './ApplyContainer.module.css'
import { useState } from 'react';
import axios from 'axios';

const ApplyContainer = ({setIsOpen, jobID}) => {

    const [fieldsFilled, setFieldsFilled] = useState(false);


    function submitApplication(event){
        event.preventDefault()
        
        const application = {
            userID: 1,
            jobID: jobID,
            bidPitch: event.target.bidPitch.value ,
            bidCounterPitch:  parseFloat(event.target.bidCounterPitch.value)
        }

        axios.post('https://auth.bizawit.com/api/v1/job-bid', application)
        .then(res=>{
            console.log('posted', res.data)
            // setIsOpen(false)
        })
        .catch(err=>{
            console.error(err)
        })
    }

    function handleCancelClick(){
        setIsOpen(false)
    }

    return(
        <div className={styles.container}>
            <h2>Apply</h2>

            <form className={styles.form} onSubmit={submitApplication}>
                <input type='text' className={styles.pitch_text} name='bidPitch' required/>
                  <input
                    type='number'
                    name='bidCounterPitch'  // Set the name attribute for counter pitch
                    className={styles.pitch_text}
                    required
                    placeholder="Enter your counter offer"
                />
                
            <div className={styles.buttons}>

                    <button className={styles.btn} type='button' onClick={handleCancelClick}>Cancel</button>
                    <button className={styles.btn2} type="submit"><p>Apply</p></button>

                </div>
            </form>
            
            {/* <div className={styles.buttons}> */}
                {/* <button className={styles.btn} disabled={!fieldsFilled} onClick={sendApplication}>Apply</button> */}
                {/* <CommandButton commandTerm={'Apply'} /> */}
                {/* <CommandButton commandTerm={'Cancel'} onClick={handleCancelClick}/> */}
            {/* </div> */}
        </div>
    )
}

export default ApplyContainer;