import React from "react";
import styles from './BannerInfo.module.scss';

const BannerInfo = ({service}) => {

  const {excerpt, _embedded} = service;

  return (
    <article className={styles.banner_info}>
      <div className={styles.banner_info__text_wrapper}>
        <div
          className={styles.project__excerpt}
          dangerouslySetInnerHTML={{
            __html: excerpt.rendered,
          }}
        />
      </div>
      <span className={styles.banner_info__span}>
        Мы&nbsp;можем:
      </span>
      <ul>
        {_embedded["wp:term"]["0"].map((item, i) => {
          return (
            <li key={i}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </article>
  );
};

export default BannerInfo;
