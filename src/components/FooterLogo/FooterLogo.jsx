import React from "react";
import Image from "next/image";
import logo from '/public/logo.svg';
import Link from "next/link";

const FooterLogo = () => {

  return (
    <div className="logo_footer">
      <Link href="/">
        <Image src={logo} 
        height={90}
        alt="Логотип Pict.design" 
        className="footer__logo" />
      </Link>
    </div>
  );
};

export default FooterLogo;
