import axios from 'axios'
import styles from './CreateJobContainer.module.css'

const CreateJobContainer = ({setIsOpen}) => {

    function submitJob(event){
        event.preventDefault()

        const newJob = {
            userID: 1,
            jobTitle: event.target.job_title.value,
            jobDescription: event.target.job_description.value,
            jobPrice: parseFloat(event.target.job_price.value),
            jobNegotiation: event.target.isNegotiable.checked,
            jobPublic: event.target.isPublic.checked,
        }

        console.log(newJob)
        
        axios.post('https://auth.bizawit.com/api/v1/job', newJob)
        .then(res=>{
            console.log('posted', res.data)
        })
        .catch(err=>{
            console.error(err)
        })

    }

     function handleCancelClick(){
        setIsOpen(false)
    }

    return (
        <div className={styles.container}>
            <h1>New Job</h1>
            <form onSubmit={submitJob} className={styles.job_form}>
                <fieldset className={styles.job_info}>
                    <legend>Job information</legend>
                    <label>Job Title:</label>
                    <input type="text" name="job_title" className={styles.title} placeholder='Job title...'/>
                    <label>Job Description:</label>
                    <textarea type="text" name="job_description" className={styles.description} placeholder='Describe the job' rows='5'/>
                    <label>Job Price:</label>
                    <input type="number" name="job_price" className={styles.price} placeholder='ex: 10'/>
                </fieldset>
                <div className={styles.optional}>
                    <div className={styles.checks}>
                        {/* <label htmlFor="negotiate">Bidders can negotiate</label> */}
                        {/* <input type="checkbox" name="isNegotiable" id="negotiate" />Bidders can negotiate */}
                        <label htmlFor="negotiate" className={styles.checkboxLabel}>
                        <input 
                            type="checkbox" 
                            name="isNegotiable" 
                            id="negotiate" 
                            // checked={isPublic} 
                            // onChange={(e) => setIsPublic(e.target.checked)} 
                        />
                        Bidders can negotiate
                        </label>
                    </div>
                    <div className={styles.checks}>
                        <label htmlFor="public" className={styles.checkboxLabel}>
                        <input 
                            type="checkbox" 
                            name="isPublic" 
                            id="public" 
                            // checked={isPublic} 
                            // onChange={(e) => setIsPublic(e.target.checked)} 
                        />
                        Job is public
                        </label>

                    </div>
                </div>

                <div className={styles.buttons}>

                    <button className={styles.btn} type='button' onClick={handleCancelClick}>Cancel</button>
                    <button className={styles.btn2} type="submit"><p>Post</p></button>

                </div>
            </form>
        </div>
    )
}

export default CreateJobContainer