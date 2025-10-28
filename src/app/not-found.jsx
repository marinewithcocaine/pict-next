import styles from './not-found.module.scss';
import NavLinkArrow from '../components/NavLinkArrow/NavLinkArrow'

export default function NotFound() {
    return (
        <div className={styles.not_found}>
            <h1>Такой страницы еще нет...</h1>
            <NavLinkArrow alignSelf={'center'} link={'/portfolio'} title={'Наше портфолио'} />
        </div>
    )
}