import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import { mainApi } from "@/Utils/api";
import CategoryList from "../CategoryList/CategoryList";
import ServicesList from "../ServicesList/ServicesList";
import { contacts } from "../../data/data";
import FooterLogo from "../FooterLogo/FooterLogo";
import styles from './footer.module.scss';

export default async function Footer({ categories }) {

  const services = (await mainApi.getServices()).services;

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav_list}>
        <h3 className={styles.footer__list_title}>
          <NavigationLink title={'Портфолио'} link="/portfolio" />
        </h3>
        <CategoryList categories={categories} />
      </nav>
      <nav className={styles.footer__nav_list}>
        <h3 className={styles.footer__list_title}>
          <NavigationLink title={'Услуги'} link="/services" />
        </h3>
        <ServicesList services={services} />
      </nav>
      <nav className={styles.footer__nav_list}>
        <h3 className={styles.footer__list_title}>
          <NavigationLink title={'Контакты'} link="/contact" />
        </h3>
        <ul className={styles.footer__list}>
          {contacts.map((contact, i) => {
            return (
              <li key={i}>
                <NavigationLink
                  title={contact.title}
                  link={contact.link}
                  target="_blank"
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={styles.footer__nav_list}>
        <h3 className={styles.footer__list_title}>
          <NavigationLink title={'О нас'} link="/about" />
        </h3>
        <ul className={styles.footer__list}>
          <li>
            <NavigationLink
              title={'Скачать презентацию'}
              link={'http://api.pictdesign.ru/wp-content/uploads/2025/02/pict_pres.pdf'}
              target="_blank"
            />
          </li>
        </ul>

      </nav>
      <div className={styles.footer__column}>
        <FooterLogo />

        <ul className="footer__list footer__list_mobile">
          <li>ИП Вохмянина М.А.</li>
          <li>ИНН 501006590538</li>
          <li>ОГРНИП 316435000087993</li>
        </ul>
      </div>
    </footer>
  );
};
