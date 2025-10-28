import styles from '@/app/not-found.module.scss';
import NavLinkArrow from '@/components/NavLinkArrow/NavLinkArrow'

export default function NotFound() {
    return (
        <section className={styles.not_found}>
            <h1 className={styles.not_found__title}>404</h1>
            <h2 className={styles.not_found__subtitle}>К сожалению такой категории не существует</h2>
            <NavLinkArrow alignSelf={'center'} link={'/portfolio'} title={'Наше портфолио'} />

        </section>
    )
}