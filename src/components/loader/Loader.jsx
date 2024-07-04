import React, { useLayoutEffect } from 'react'
import styles from "./loader.module.css"
import gsap from 'gsap'

const Loader = ({comp}) => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .from(".main-container", {
                    opacity: 0,
                    duration: 0.5,
                })
        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div
            id="intro-slider"
            className={styles.loader}
        >
            <h1 id="title-1">
                Web Developer
            </h1>
            <h1 id="title-2">
                UI Designer
            </h1>
            <h1 id="title-3">
                Competitive Programmer
            </h1>
        </div>
    )
}

export default Loader
