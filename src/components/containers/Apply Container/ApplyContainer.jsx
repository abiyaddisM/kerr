import CommandButton from '../../buttons/Command Buttons/CommandButton';
import styles from './ApplyContainer.module.css';
import { ArrowLeft } from "iconsax-react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../utils/AuthContext';
import { useParams } from 'react-router-dom';

const ApplyContainer = ({ setIsOpen, jobID, is_negotiable=false, job_price, onSuccess }) => {
    const [pitch, setPitch] = useState('');
    const [price, setPrice] = useState( job_price);
    const [submitAllowed, setSubmitAllowed] = useState(false);
    const {user} = useAuth();
    const {id} = useParams()

    useEffect(()=>console.log(user.id),[])

    function validate(pitch, price) {
        return pitch.trim() !== '' && !isNaN(price) && price > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (validate(pitch, price)) {
            submitApplication(pitch, price);
        } else {
            Window.alert("Please fill in all fields correctly.");
        }
    }

    function submitApplication(pitch, price) {
        const application = {
            userID: user.id,
            jobID: id,
            bidPitch: pitch,
            bidCounterPitch: price,
        };

        axios.post('https://auth.bizawit.com/api/v1/job-bid', application)
            .then(res => {
                console.log('posted', res.data);
                setIsOpen(false); // Close the form on success
            })
            .catch(err => {
                console.error(err);
            });
        onSuccess()
    }

    function handleCancelClick() {
        setIsOpen(false);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;

        if (name === 'counterPrice') {
            const updatedPrice = parseFloat(value);
            setPrice(updatedPrice);
            setSubmitAllowed(validate(pitch, updatedPrice));
        } else {
            setPitch(value);
            setSubmitAllowed(validate(value, price));
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.back_button} onClick={handleCancelClick}>
                <ArrowLeft size="20px" color="var(--primary-color)" /> Back
            </button>
            <div className={styles.application}>
                {is_negotiable?
                <input
                    type='number'
                    className={styles.counter_pitch}
                    name='counterPrice'
                    required
                    placeholder='Counter Price'
                    value={price}
                    onChange={handleInputChange}
                />
                :
                <p className={styles.price}>
                    The price of this listing is fixed
                    <p>Br.{job_price}</p>
                </p>
                
                }

                <textarea
                    className={styles.pitch_text}
                    name='bidPitch'
                    required
                    placeholder="Pitch"
                    value={pitch}
                    onChange={handleInputChange}
                />
            </div>
            <CommandButton 
                commandTerm={"Send"} 
                onClick={handleSubmit} 
                disabled={!submitAllowed} 
            />
        </div>
    );
};

export default ApplyContainer;
