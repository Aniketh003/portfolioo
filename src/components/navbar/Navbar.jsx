import React, { useEffect, useRef, useState } from 'react'
import styles from './navbar.module.scss'
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const pathname = useLocation();
  const hamburgerRef = useRef(null)

  useEffect(() => {
    if (isActive) setIsActive(!isActive)
  }, [pathname])

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.hamburger} ref={hamburgerRef} onClick={() => setIsActive(!isActive)}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`} ></div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}

export default Navbar