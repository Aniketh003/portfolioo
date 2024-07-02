import React, { useEffect, useRef, useState } from 'react';
import styles from "./loader.module.css";
import { gsap } from 'gsap';

const Loader = ({ isLoading, setIsLoading, mainRef }) => {
    const counterRef = useRef(null);
    const barsRef = useRef([]);
    const overlayRef = useRef(null);
    const headerRef = useRef(null)

    const startLoader = () => {
        let currentValue = 0;
        const updateCounter = () => {
            if (currentValue >= 100) {
                counterRef.current.textContent = 100;
                startAnimations();
                return;
            }

            currentValue += Math.floor(Math.random() * 5) + 1;

            if (currentValue > 100) {
                currentValue = 100;
            }

            counterRef.current.textContent = currentValue;

            setTimeout(updateCounter, 50);
        }

        updateCounter();
    }

    const startAnimations = () => {
        gsap.to(counterRef.current, {
            opacity: 0,
            duration: 0.25,
        });

        gsap.to(barsRef.current, {
            height: 0,
            duration: 1.5,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut",
            onComplete: () => setIsLoading(false)
        });

        gsap.to(headerRef.current, {
            delay: 0.5,
            x: "100%",
            opacity: 0
        })

        gsap.fromTo(mainRef.current, {
            opacity: 0
        }, {
            delay:1,
            opacity: 1,
        })

        gsap.to(overlayRef.current, {
            opacity: 0,
            delay: 1.5,
            duration:0.5,
            onComplete: () => {
                setIsLoading(false);
                revealMainContent();
            }
        });
    }

    useEffect(() => {
        startLoader();
    }, []);

    return (
        <>
            {isLoading && (
                <div className={styles.overlay} ref={overlayRef}>
                    <div className={styles.header} ref={headerRef}>
                        <h1>Aniketh</h1>
                        <h1>Busavale</h1>
                        <p>Web developer | UI Designer | Competitive Programmer</p>
                    </div>
                    <h1 className={`${styles.counter} counter`} ref={counterRef}>0</h1>
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.bar} bar`}
                            ref={el => barsRef.current[i] = el}
                        ></div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Loader;
