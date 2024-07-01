import React from 'react'
import styles from "./hero.module.css"

const SocialIcon = ({ link, icon, alt ,className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <a href={link} target='_blank'>
                <img src={icon} alt={alt} />
            </a>
        </div>
    )
}

export default SocialIcon
