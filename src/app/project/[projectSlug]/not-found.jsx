import NavLinkArrow from '@/components/NavLinkArrow/NavLinkArrow';
import Form from '@/components/Form/Form';
import { inputs } from "@/data/data";
import styles from '@/app/not-found.module.scss'

export default function NotFound() {
    return (
        <section className={styles.not_found}>
            <h1 className={styles.not_found__title}>404</h1>
            <h2 className={styles.not_found__subtitle}>Этот проект еще не создан, но у Вас есть шанс!</h2>
            <NavLinkArrow alignSelf={'center'} link={'/portfolio'} title={'Наше портфолио'} />
            <Form title={"Давайте обсудим Вашу идею!"} inputs={inputs} buttonText={'Отправить'} />

        </section>
    )
}