import Link from "next/link";
import styles from './project.module.scss';

export default function ProjectPar(project) {

    return (
        <>
            <section className={styles.project}>
                <h1 className={styles.project__title}>
                    {project.project.title.rendered}
                </h1>
                <div
                    className={styles.project__excerpt}
                    dangerouslySetInnerHTML={{
                        __html: project.project.excerpt.rendered,
                    }}
                />
                <ul className={styles.project__tags}>
                    <li className={styles.project__tag}>#</li>
                    {project.project._embedded["wp:term"]["0"].map((tag, i) => {
                        return (
                            <li className={styles.project__tag} key={i}>
                                <Link href={`/portfolio/${tag.slug}`}>
                                    {tag.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section
                className={styles.project__content}
                dangerouslySetInnerHTML={{
                    __html: project.project.content.rendered,
                }}
            />
        </>
    )
}