'use client'
import { useEffect } from "react";
import styles from './Popup.module.scss';

export default function Popup({ message, active, setClose }) {

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.code === "Escape") {
              setClose();
            }
          });
          return () => {
            document.removeEventListener("keydown", setClose);
        };
    }, [setClose]);

    useEffect(() => {
        document.body.style.overflow = active ? "hidden" : "unset";
      }, [active]);

    if (!active) return null;

    return (
        <div className={active ? `${styles.popup} ${styles.popup_active}` : `${styles.popup}`} onClick={setClose}>
            <div className={styles.popup__wrapper} onClick={e => e.stopPropagation()}>
                <h3>{message}</h3>
                <div className={styles.popup__close_button} onClick={setClose}>
                    <span className={styles.popup__button_lines}></span>
                </div>
            </div>
        </div>
    )
}