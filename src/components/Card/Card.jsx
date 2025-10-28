import Link from "next/link";
import styles from './card.module.scss';

const Card = ({ card }) => {

  const { title, slug, _embedded } = card;

  return (
    <li className={styles.card}>
      <Link href={`/project/${slug}`} className={styles.card__link}>
        <div className={styles.image_block}>
            <img
              className={styles.card__image}
              src={_embedded["wp:featuredmedia"]["0"]["source_url"]}
              alt={title.rendered}
            />
        </div>
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title.rendered}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.901"
            height="20.369"
          >
            <g
              fill="none"
              stroke="#231f20"
              strokeLinecap="round"
              strokeMiterlimit="10"
              data-name="Сгруппировать 141"
            >
              <path d="M.5 10.184h22.761" data-name="Линия 16" />
              <path
                d="m14.716.707 9.478 9.478-9.478 9.478"
                data-name="Контур 174"
              />
            </g>
          </svg>
          <p className={styles.card__category}>{_embedded["wp:term"]["0"]["0"]["name"]}</p>
        </div>
      </Link>
    </li>
  );
};

export default Card;
