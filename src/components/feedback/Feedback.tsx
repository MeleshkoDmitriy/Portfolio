"use client"
import { createRef, useState } from 'react';
import styles from './Feedback.module.scss';
import { createFeedback } from '@/lib/api/api';
import { calcDate } from '@/lib/utils/utils';
import { RxCross1 } from "react-icons/rx";
import { Snackbar } from '../snackbar/Snackbar';


export const Feedback = () => {

    const initialFormData = {
        name: '',
        contact: '',
        text: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const [isNameActive, setNameActive] = useState(false);
    const [isContactActive, setContactActive] = useState(false);
    const [isAreaActive, setAreaActive] = useState(false);

    const [isSnackbar, setSnackbar] = useState(false);

    const ref = createRef<HTMLFormElement>();

    const refName = createRef<HTMLFormElement>();
    const refContact = createRef<HTMLFormElement>();
    const refArea = createRef<HTMLFormElement>();


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
        setNameActive(false);
        refName.current.value = '';
        setContactActive(false);
        refContact.current.value = '';
        setAreaActive(false);
        refArea.current.value = '';

        setSnackbar(true);

        setTimeout(() => {
            setSnackbar(false);
        }, 2500)
    };

    const handleChange = (event) => {
        if(event.target.name === 'name') {
            if(event.target.value) {
                setNameActive(true);
            } else {
                setNameActive(false);
            }
        } else if(event.target.name === 'contact') {
            if(event.target.value) {
                setContactActive(true);
            } else {
                setContactActive(false);
            }
        } else if(event.target.name === 'text') {
            if(event.target.value) {
                setAreaActive(true);
            } else {
                setAreaActive(false);
            }
        }
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handlerNameDelete = () => {
        setFormData({...formData, name: ''});
        setNameActive(false);
        refName.current.value = '';
    };

    const handlerContactDelete = () => {
        setFormData({...formData, contact: ''});
        setContactActive(false);
        refContact.current.value = '';
    };

    const handlerAreaDelete = () => {
        setFormData({...formData, text: ''});
        setAreaActive(false);
        refArea.current.value = '';
    };


    return (
        <>
        { isSnackbar && <Snackbar message='Thanks for your feedback!' /> }
        <div className={styles.container}>
            <h3 className={styles.title}>
                Feedback
            </h3>
            <div className={styles.description}>
                <p>You are always welcome to leave your comments and suggestions about me and my projects. Your feedback is valuable to me as it helps me improve and grow. Feel free to share your thoughts, whether it is constructive criticism, advice or even recommendations for future work opportunities. Your input is greatly appreciated.</p>
                <p>Please use the form below to submit your feedback. You can provide your name and any contact links if you wish, but it is completely optional, hence you may stay incognito. The feedback section is your space to express your thoughts. And remember - your comment will be seen only by me.</p>
                <p>Thank you for taking the time to provide your feedback. Your contribution is vital in helping me become a better developer. </p>
            </div>
            <form   ref={ref}
                    onSubmit={handleSubmit} 
                    className={styles.form}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputWrapper}>
                        <input
                            name='name'
                            placeholder='Your name'
                            className={`${styles.input} ${styles.name}`}
                            onChange={handleChange}
                            ref={refName}
                        />
                        <RxCross1   className={`${styles.crossInput} ${isNameActive ? styles.active : ''}`}
                                    onClick={handlerNameDelete}/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input
                            name='contact'
                            placeholder='Your contact link'
                            className={`${styles.input} ${styles.contact}`}
                            onChange={handleChange}
                            ref={refContact}
                        />
                        <RxCross1   className={`${styles.crossInput} ${isContactActive ? styles.active : ''}`}
                                    onClick={handlerContactDelete}/>
                    </div>

                </div>
                <div className={styles.textareaWrapper}>
                    <textarea
                        name='text'
                        placeholder='Your comments and suggestions*'
                        className={styles.textarea}
                        required
                        onChange={handleChange}
                        ref={refArea}
                        />
                    <RxCross1   className={`${styles.crossInput} ${isAreaActive ? styles.active : ''}`}
                                onClick={handlerAreaDelete}/>
                </div>
                <div className={styles.buttonWrapper}>
                    <button type='submit' className={styles.button}>
                        Send feedback
                    </button>
                </div>
            </form>
        </div>
        </>
  );
};
