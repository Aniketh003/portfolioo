import React from 'react'
import styles from "./button.module.css"

const Button = ({ link, text }) => {
    return (
        <span className={styles.coustom_button}>
            {link ? (
                <a href={link} target='_blank'>{text}</a>
            )
                : (
                    <button>{text}</button>
                )}
        </span>
    )
}

export default Button
