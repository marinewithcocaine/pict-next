import Link from "next/link";

export default function ServicePost({ post }) {

    const { title, slug, acf } = post;

    return (
        <li className="service-post">
                <img
                    className="service-post__image"
                    src={acf.service_portfolio}
                    alt={title.rendered}
                />
            <Link href={`/project/${slug}`} className="service-post__link">
                <div className="service-post__info">
                    <h3 className="service-post__title">{title.rendered}</h3>
                    <div
                        className="service-post__excerpt"
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}
                    />
                </div>
            </Link>
        </li>
    );
}