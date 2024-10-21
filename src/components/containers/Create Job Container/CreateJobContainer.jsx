import axios from 'axios';
import styles from './CreateJobContainer.module.css';
import { ArrowLeft } from 'iconsax-react';
import StyleInputs from '../../Job Filter/StyleInputs/StyleInputs';
import { useState } from 'react';

const CreateJobContainer = ({ setIsOpen }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const keywords = ['Public', 'Private'];
    const [selectedType, setSelectedType] = useState('Public');
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState(0);
    const [isNegotiable, setIsNegotiable] = useState(false);
    const [errors, setErrors] = useState({});

    function submitJob(event) {
        event.preventDefault();
        // Validation
        const validationErrors = validateFields();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        const newJob = {
            userID: 1,
            jobTitle: title,
            jobDescription: description,
            jobPrice: price,
            jobNegotiation: isNegotiable,
            jobPublic: selectedType === 'Public',
        };

        console.log(newJob);

        axios.post('https://auth.bizawit.com/api/v1/job', newJob)
            .then(res => {
                console.log('posted', res.data);
                // Optionally clear the form after successful submission
                clearForm();
            })
            .catch(err => {
                console.error(err);
            });
    }

    function validateFields() {
        const newErrors = {};
        
        if (!title) {
            newErrors.title = 'Title is required.';
        } else if (title.split(' ').length > 8) {
            newErrors.title = 'Title must be at most 8 words.';
        }

        if (!description) {
            newErrors.description = 'Description is required.';
        } else if (description.split(' ').length > 40) {
            newErrors.description = 'Description must be at most 40 words.';
        }

        if (price <= 0) {
            newErrors.price = 'Price must be greater than 0.';
        }

        return newErrors;
    }

    function isFormValid() {
        const validationErrors = validateFields();
        return Object.keys(validationErrors).length === 0; // True if no errors
    }

    function clearForm() {
        setTitle('');
        setDescription('');
        setSelectedType('Public');
        setTags([]);
        setPrice(0);
        setIsNegotiable(true);
        setErrors({});
        setIsOpen(false);
    }

    function handleCancelClick() {
        setIsOpen(false);
    }

    function handleTagChange(newTag) {
        setTags(newTag);
    }

    return (
        <div className={styles.container}>
            <button className={styles.back_button} onClick={handleCancelClick}>
                <ArrowLeft size="20px" color="var(--primary-color)" /> Back
            </button>

            <div className={styles.job_info}>
                <input
                    className={styles.job_title}
                    type="text"
                    name="job_title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <span className={styles.error}>{errors.title}</span>}

                <textarea
                    className={styles.job_description}
                    name="job_description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && <span className={styles.error}>{errors.description}</span>}

                <div className={styles.type_buttons}>
                    <div className={`${styles.bt} ${selectedType === 'Public' ? styles.selected : ''}`}
                        onClick={() => setSelectedType("Public")}>
                        Public
                    </div>
                    <div className={`${styles.bt} ${selectedType === 'Private' ? styles.selected : ''}`}
                        onClick={() => setSelectedType("Private")}>
                        Private
                    </div>
                </div>
            </div>

            <div className={styles.style_tags}>
                <StyleInputs keys={tags} onChange={handleTagChange} />
            </div>

            <div className={styles.price_info}>
                <input
                    className={styles.job_price}
                    type="number"
                    name="job_price"
                    placeholder="Price"
                    value={price > 0 ? price : ''}
                    onChange={(e) => setPrice(Math.max(0, parseFloat(e.target.value)))}
                />
                {errors.price && <span className={styles.error}>{errors.price}</span>}
                <div className={styles.negotiate}>
                    <input
                        type="checkbox"
                        name="job_negotiate"
                        id=""
                        checked={isNegotiable}
                        onChange={() => setIsNegotiable(!isNegotiable)}
                    />
                    <label htmlFor="">
                        Negotiate Price
                    </label>
                </div>
            </div>

            <button 
                className={styles.create_button} 
                onClick={submitJob} 
                // disabled={!isFormValid()} 
            >
                Create
            </button>
        </div>
    );
}

export default CreateJobContainer;
