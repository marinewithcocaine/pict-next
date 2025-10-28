'use client'
import { useState } from "react";
import { useFormWithValidation } from "../../lib/useForm";
import Popup from "../Popup/popup";
import { IMaskInput } from "react-imask";
import Link from "next/link";
import styles from './Form.module.scss';

const Form = ({ inputs, buttonText, error, clearError, title }) => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleCloseError = (evt) => {
    evt.preventDefault();
    clearError();
  }

  const FormAction = async (formData) => {
    formData.append('_wpcf7_unit_tag', '_wpcf7_unit_tag');
    const res = await fetch('http://api.pictdesign.ru/wp-json/contact-form-7/v1/contact-forms/5/feedback', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    setMessage(data.message);
    setPopupOpen(true);
    resetForm();
  }

  function handleClose() {
    setPopupOpen(false);
    document.body.style.overflow = 'unset';
    setMessage('');
  }

  return (
    <section className={styles.contact_form}>
      <div className={styles.contact_form__wrapper}>
        <h2 className={styles.contact_form__title}>{title}</h2>
        <Popup active={isPopupOpen} message={message} setClose={handleClose} />
        <form className={styles.form} action={FormAction}>
          <div className={styles.form__inputs}>
            {inputs.map((input) => {
              return (
                <div className="form__input-container" key={input.id}>
                  <IMaskInput
                    name={input.name}
                    mask={input.mask}
                    id={input.id}
                    value={values[input.name] || ""}
                    onChange={handleChange}
                    className={styles.form__input}
                    type={input.type}
                    required={input.required}
                    pattern={input.pattern}
                    minLength={input.minLength}
                    placeholder={input.placeholder}
                  />
                  <span className="form__error">{errors[input.name]}</span>
                </div>
              );
            })}
            <label className={styles.container}>
            <IMaskInput
              name={'checkbox'}
              id={'checkbox'}
              onChange={handleChange}
              className={`${styles.form__input} ${styles.form__input_checkbox}`}
              type={'checkbox'}
              required={'required'}
            />
            <span className={styles.checkmark} />
            <p className={styles.text}>Согласие на обработку персональных данных в соответствии с <Link href={'http://api.pictdesign.ru/wp-content/uploads/2025/02/Privacy.pdf'} target="_blank">правилами сайта</Link></p>
            </label>
            
          </div>
          {error && (
            <button onClick={handleCloseError} className="form__submit-error">
              Что-то пошло не так... {error}
              <span className="form__error-close">
                <div></div>
                <div></div>
              </span>
            </button>
          )}
          <button className={styles.form__submit} type="submit" disabled={!isValid}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
