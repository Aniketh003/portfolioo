import React from 'react'
import styles from "./hero.module.css"
import Button from '../button/Button'

const CurrentInfo = () => {
  return (
    <div className={styles.currentInfo}>
      <Button link="https://drive.google.com/file/d/1bzCXMH_j-_PKojQk4-HIA9yGYLeswBrT/view?usp=sharing" text="RESUME" />
      <p>Web Devloper Intern at CDK Global</p>
    </div>
  )
}

export default CurrentInfo
