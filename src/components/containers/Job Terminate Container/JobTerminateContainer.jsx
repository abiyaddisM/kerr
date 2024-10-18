import { ArrowLeft } from 'iconsax-react';
import style from './JobTerminateContainer.module.css'
import CommandButton from '../../buttons/Command Buttons/CommandButton';

const JobTerminateContainer = ({setIsOpen, jobID}) => {

    const handleJobTerminate = () => {
       
        console.log("Job completion requested."); 
        closePopUp();
    };

    const closePopUp = () => {
        setIsOpen(false);
    }

    return(
        <div className={style.container}>

            <button className={style.back_button} onClick={closePopUp}>
                <ArrowLeft size="20px" color="var(--primary-color)" /> Back
            </button>

            <div className={style.content}>
                {/* <p className={style.heading}>Request job termination?</p>
                <p>Reason for termination</p>
                <ul>
                    <li>Lack of communication</li>
                    <li>Change of requirements</li>

                </ul> */}

                <p className={style.verify}>
                    This action will send a termination request to the job owner. 
                    <p>Continue?</p> 
                </p>
            </div>


            <CommandButton commandTerm={"Request"} onClick={handleJobTerminate} />
            
        </div>
    )    
}

export default JobTerminateContainer