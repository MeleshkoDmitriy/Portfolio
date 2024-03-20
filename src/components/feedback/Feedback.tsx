"use client"
import { createRef, useState } from 'react';
import styles from './Feedback.module.scss';
import { createFeedback } from '@/lib/api/api';
import { calcDate } from '@/lib/utils/utils';


export const Feedback = () => {

    const initialFormData = {
        name: '',
        contact: '',
        text: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const ref = createRef<HTMLFormElement>();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nameValue = formData.name.trim() === '' ? 'user unknown' : formData.name;
        const contactValue = formData.contact.trim() === '' ? 'without contacts' : formData.contact;
        await createFeedback({
          ...formData,
          name: nameValue,
          contact: contactValue,
          date: calcDate(),
        });

        setFormData(initialFormData);
        ref.current?.reset();
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Feedback
            </h3>
            <div className={styles.description}>
                <p>You are always welcome to leave your comments and suggestions about me and my projects. Your feedback is valuable to me as it helps me improve and grow. Feel free to share your thoughts, whether it is constructive criticism, advice or even recommendations for future work opportunities. Your input is greatly appreciated.</p>
                <p>Please use the form below to submit your feedback. You can provide your name and any contact links if you wish, but it is completely optional. The feedback section is your space to express your thoughts.</p>
                <p>Thank you for taking the time to provide your feedback. Your contribution is vital in helping me become a better developer. </p>
            </div>
            <form   ref={ref}
                    onSubmit={handleSubmit} 
                    className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        name='name'
                        placeholder='Your name'
                        className={`${styles.input} ${styles.name}`}
                        onChange={handleChange}
                    />
                    <input
                        name='contact'
                        placeholder='Your contact link'
                        className={`${styles.input} ${styles.contact}`}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    name='text'
                    placeholder='Your comments and suggestions*'
                    className={styles.textarea}
                    required
                    onChange={handleChange}
                    />
                <div className={styles.buttonWrapper}>
                    <button type='submit' className={styles.button}>
                        Send feedback
                    </button>
                </div>
            </form>
        </div>
  );
};
