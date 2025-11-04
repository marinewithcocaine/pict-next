import { mainApi } from "@/Utils/api";
import { inputs } from "@/data/data";
import Form from "@/components/Form/Form";
import { notFound } from "next/navigation";
import NavLinkArrow from "@/components/NavLinkArrow/NavLinkArrow";
import ServicePosts from "@/components/ServicePosts/ServicePosts";
import styles from './page.module.scss';
import './wp-styles.scss';

// export async function generateMetadata({ params }) {
//     const meta = await mainApi.getService(params.serviceSlug);
//     return meta.meta;
// }

export async function generateStaticParams() {
    const services = (await mainApi.getServices()).services;
    const data = services.map(service => ({
        slug: service.slug,
    }));
    return data;
}

export async function Service({ params }) {

    const service = await mainApi.getService(params.serviceSlug);
    const servicePosts = await mainApi.getServicePosts();
    const filter = servicePosts.filter((post) => post.acf.service_type[0].post_name === params.serviceSlug);

if (!service) {
    notFound();
}

return (
    <div className="service">
        <section className={styles.service}>
            <div className={styles.service__banner}>
                <img className={styles.service__image} src={service.service.acf.banner_image} alt={service.title} />
                <h1 className={styles.service__title}>{service.service.title.rendered}</h1>
                <p className={styles.service__subtitle}>{service.service.acf.banner_subtitle}</p>
            </div>
            <div
                className={styles.service__content}
                dangerouslySetInnerHTML={{
                    __html: service.service.content.rendered,
                }}
            />
            <ServicePosts posts={filter} />
            <NavLinkArrow title={'посмотреть все'} link={`/portfolio/${params.serviceSlug}`} />
        </section>
        <Form title={"Нужно обсудить проект? Мы вам перезвоним!"} inputs={inputs} buttonText={'Отправить'} />
    </div>

)
}

export default Service;