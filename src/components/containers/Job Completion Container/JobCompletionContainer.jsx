import { ArrowLeft } from 'iconsax-react';
import style from './JobCompletionContainer.module.css'
import CommandButton from '../../buttons/Command Buttons/CommandButton';

const JobCompletionContainer = ({setIsOpen, jobID}) => {

    const handleJobComplete = () => {
       
        console.log("Job completion requested."); 
        closePopUp();
    };

    const closePopUp = () => {
        setIsOpen(false);
    }

    return (
        <div className={style.container}>

            <button className={style.back_button} onClick={closePopUp}>
                <ArrowLeft size="20px" color="var(--primary-color)" /> Back
            </button>
            <p className={style.verify}>
                This action will notify the job owner that the job is completed. 
                <p>Continue?</p>
            </p>
            {/* <div></div> */}

            <CommandButton commandTerm={"Request"} onClick={handleJobComplete} />

        </div>
    )
}

export default JobCompletionContainer;