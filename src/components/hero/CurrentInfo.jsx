import React, { useEffect, useRef } from 'react'
import styles from "./hero.module.css"
import gsap from 'gsap'
import Button from '../button/Button'

const CurrentInfo = () => {
  const currentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(currentRef.current, {
      y: '100%',
      opacity: 0,
    }, {
      y: "0%",
      delay: 1.3,
      duration: 0.5,
      opacity: 1,
    })
  }, [])
  return (
    <div className={styles.currentInfo} ref={currentRef}>
      <Button link="https://drive.google.com/file/d/1bzCXMH_j-_PKojQk4-HIA9yGYLeswBrT/view?usp=sharing" text="RESUME" />
      <p>Web Devloper Intern at CDK Global</p>
    </div>
  )
}

export default CurrentInfo
