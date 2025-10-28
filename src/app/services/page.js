import { mainApi } from "@/Utils/api";
import Banner from "@/components/Banner/Banner";
import BannerInfo from "@/components/BannerInfo/BannerInfo";
import styles from './page.module.scss';

export async function generateMetadata() {
    const meta = await mainApi.getMeta('services');
    return meta;
}

export default async function Services() {

    const services = (await mainApi.getServices()).services;
    
    return (
        <>
            <section className={styles.services}>
                <div className={styles.services__title_wrapper}>
                    <h1>Услуги</h1>
                </div>
                <ul className={styles.banner_list}>
                    {services.map((service, i) => {
                        return (
                            <li key={i}>
                                <Banner service={service} />
                                <BannerInfo service={service} />
                            </li>
                        );
                    })}
                </ul>
            </section >
        </>
    )
};