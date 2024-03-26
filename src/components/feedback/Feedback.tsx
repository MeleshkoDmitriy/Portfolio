"use client"
import { ChangeEvent, FormEvent, MutableRefObject, createRef, useState } from 'react';
import styles from './Feedback.module.scss';
import { createFeedback } from '@/lib/api/api';
import { calcDate } from '@/lib/utils/utils';
import { RxCross1 } from "react-icons/rx";
import { Snackbar } from '../snackbar/Snackbar';
import { Spinner } from '../spinner/Spinner';
import { TFormData } from '@/lib/types/types';

const initialFormData: TFormData = {
    name: '',
    contact: '',
    text: '',
    date: '',
};

export const Feedback = () => {
    const [formData, setFormData] = useState<TFormData>(initialFormData);

    const [isNameActive, setNameActive] = useState<boolean>(false);
    const [isContactActive, setContactActive] = useState<boolean>(false);
    const [isAreaActive, setAreaActive] = useState<boolean>(false);

    const [isSnackbar, setSnackbar] = useState<boolean>(false);
    const [isSendClicked, setSendClicked] = useState<boolean>(false);

    const ref = createRef<HTMLFormElement>();

    const refName = createRef<HTMLInputElement | null>() as MutableRefObject<HTMLInputElement | null>;
    const refContact = createRef<HTMLInputElement | null>() as MutableRefObject<HTMLInputElement | null>;
    const refArea = createRef<HTMLTextAreaElement | null>() as MutableRefObject<HTMLTextAreaElement | null>;
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      
        setSnackbar(true);
        setSendClicked(true);
      
        ref.current?.reset();
        setNameActive(false);
        if (refName.current) {
          refName.current.value = refName.current?.value ?? '';
        }
        setContactActive(false);
        if (refContact.current) {
          refContact.current.value = refContact.current?.value ?? '';
        }
        setAreaActive(false);
        if (refArea.current) {
          refArea.current.value = '';
        }
      
        setTimeout(() => {
          setSnackbar(false);
          setSendClicked(false);
        }, 2000);
    };
    
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.target.name === 'name') {
            setNameActive(!!event.target.value);
          } else if (event.target.name === 'contact') {
            setContactActive(!!event.target.value);
          } else if (event.target.name === 'text') {
            setAreaActive(!!event.target.value);
          }

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handlerNameDelete = () => {
        setFormData({ ...formData, name: '' });
        setNameActive(false);
        if (refName.current) {
          refName.current.value = '';
        }
      };
      
      const handlerContactDelete = () => {
        setFormData({ ...formData, contact: '' });
        setContactActive(false);
        if (refContact.current) {
          refContact.current.value = '';
        }
      };
      
      const handlerAreaDelete = () => {
        setFormData({ ...formData, text: '' });
        setAreaActive(false);
        if (refArea.current) {
          refArea.current.value = '';
        }
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
                        {isSendClicked ? <Spinner heightSize='100%' fontSize='14px'/>
                                       : 'Send feedback'}
                    </button>
                </div>
            </form>
        </div>
        </>
  );
};
