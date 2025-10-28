'use client'

import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({link, title}) => {

  const router = useTransitionRouter();

  const pathname = usePathname();
  
  return(
    <Link href={link} className={`navigation__link ${pathname === `/${link}` ? 'navigation__link_active' : ''}`}>
      {title}
    </Link>
  )
}

export default NavigationLink;