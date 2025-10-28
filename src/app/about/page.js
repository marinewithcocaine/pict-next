import { facts } from "@/data/data";
import { mainApi } from "@/Utils/api";
import NavLinkArrow from "@/components/NavLinkArrow/NavLinkArrow";
import styles from './about.module.scss';

export async function generateMetadata() {
    const meta = await mainApi.getMeta('about');
    return meta;
  }


export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.about__info}>
                <h1>О нас</h1>
                <div className={styles.about__text}>
                    <p>
                        Мы — небольшая команда, которая любит свое дело и живет им! За
                        нашими плечами более 10 лет работы в графическом дизайне, свыше 100
                        реализованных проектов в сфере полиграфии, айдентики и веб-дизайне,
                        десятки лояльных заказчиков, большинство из которых возвращаются к
                        нам снова и снова. Среди них ГТЛК, Марс, PepsiCo, ВДНХ, Росбанк,
                        благотворительный фонд Константа, РА «Навигатор» и другие. Нас
                        отличает аккуратность и лаконичность линий, европейский современный
                        дизайн. Мы тщательно следим за мировыми трендами, при этом всегда
                        сохраняем свой уникальный стиль. Ответственный подход и точность в
                        каждой детали — залог успешного сотрудничества.
                    </p>
                    <NavLinkArrow
                        title={'Скачать презентацию'}
                        link={
                            "http://pictdesign.ru/wp-content/uploads/2023/03/pict_pres.pdf"
                        }
                        alignSelf={true}
                    />
                </div>
                {facts.map((fact, i) => {
                    return (
                        <div className={styles.about__fact} key={i}>
                            <strong>{fact.number}</strong>
                            {fact.fact.ru}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}