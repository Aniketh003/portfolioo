import React, { useState } from "react";
import styles from "./style.module.scss";
import twitter from '../../../assets/socialIcons/twitter.svg'
import resume from "../../../assets/socialIcons/mail.svg"
import github from "../../../assets/socialIcons/github.svg"
import instagram from "../../../assets/socialIcons/instagram.svg"
import linkedin from "../../../assets/socialIcons/linkedin.svg"
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Curve from "./curve";
import Link from "./link";
import { useLocation } from "react-router-dom";
const navItems = [
  {
    title: "Home",

    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const socialMediaLinks = [
  {
    icon: twitter,
    link: "",
    alt: 'Twitter Icon',
    className: styles.icon1
  },
  {
    icon: resume,
    link: 'mailto:anikethbusavale03@gmail.com',
    alt: 'Mail Icon',
    className: styles.icon2
  },
  {
    icon: github,
    link: 'https://github.com/Aniketh003',
    alt: 'GitHub Icon',
    className: styles.icon3
  },
  {
    icon: linkedin,
    link: 'https://linkedin.com/in/aniketh03',
    alt: 'LinkedIn Icon',
    className: styles.icon5
  },
  {
    icon: instagram,
    link: 'https://instagram.com/aniketh03_',
    alt: 'Instagram Icon',
    className: styles.icon4
  },
];
export default function index() {
  const pathname = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>

        <div className={styles.footer}>
          {socialMediaLinks.map((link) => (
            <a href={link.link} key={link.className} target="_blank">
              <img src={link.icon} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
