import React, { useState } from 'react'
import styles from "./footer.module.css"
import line from '../../assets/arrow-line.svg'

const Footer = () => {
  const [emailCopied,setEmailCopied] = useState("anikethbusavale03@gmail.com")
  const socialMediaLinks = [
    {
      icon: line,
      link: "https://google.com",
      text: 'Twitter',
      className: styles.icon1
    },
    {
      icon: line,
      link: 'https://github.com/Aniketh003',
      text: 'GitHub',
      className: styles.icon3
    },
    {
      icon: line,
      link: 'https://instagram.com/aniketh03_',
      text: 'Instagram',
      className: styles.icon4
    },
  ];

  const contactLinks = [
    {
      icon: line,
      link: "https://drive.google.com/file/d/1bzCXMH_j-_PKojQk4-HIA9yGYLeswBrT/view",
      text: "Resume",
      className: styles.icon8
    },
    {
      icon: line,
      link: 'https://linkedin.com/in/aniketh03',
      text: 'LinkedIn',
      className: styles.icon5
    },
    {
      icon: line,
      link: 'mailto:anikethbusavale03@gmail.com',
      text: 'Mail Icon',
      className: styles.icon2
    },
  ]

  const pageLinks = [
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
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailCopied)
      .then(() => {
        setEmailCopied("Email copied")
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <a href="/">अनिकेत भुसावळे</a>
        <div className={styles.links_container}>
          <div className={`${styles.social} ${styles.link_container}`}>
            <p>social</p>
            <div className={styles.links}>
              {socialMediaLinks.map((link) => (
                <a href={link.link} target='_blank'>
                  <p>{link.text}</p>
                  <img src={link.icon} alt={link.text} />
                </a>
              ))}
            </div>
          </div>
          <div className={`${styles.contact} ${styles.link_container}`}>
            <p>contact</p>
            <div className={styles.links}>
              {contactLinks.map((link) => (
                <a href={link.link} target='_blank'>
                  <p>{link.text}</p>
                  <img src={link.icon} alt={link.text} />
                </a>
              ))}
            </div>
          </div>
          <div className={`${styles.pages} ${styles.link_container}`}>
            <p>pages</p>
            <div className={styles.links}>
              {pageLinks.map((link) => (
                <a href={link.href} target='_blank'>
                  <p>{link.title}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Aniketh Busavale 2024</p>
        <div className={styles.email}>
          <h3>Get in touch (Click to copy)</h3>
          <h1 onClick={copyToClipboard}>{emailCopied}</h1>
        </div>
      </div>
      <div className={styles.heading}>
        <h1>アニケス・ブサバリ</h1>
      </div>
    </div>
  )
}

export default Footer
