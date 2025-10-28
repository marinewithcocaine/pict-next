import React from "react";
import NavLinkArrow from "../NavLinkArrow/NavLinkArrow";
import styles from './Banner.module.scss';

const Banner = ({ service }) => {

  const { _embedded, title, slug, banner_color } = service;

  return (
    <div className={styles.banner}>
      <img src={_embedded["wp:featuredmedia"]["0"]["source_url"]} alt={service.title} />
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__info}>
          <NavLinkArrow title={'об услуге'} link={`/services/${slug}`} color={banner_color} />
          <h2>
            {title.rendered}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
