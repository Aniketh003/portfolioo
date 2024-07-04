import React, { useEffect, useRef } from 'react';
import styles from './works.module.css';
import { projects } from './projects';
import Project from './Project';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
    const projectsRef = useRef([]);

    useEffect(() => {
        projectsRef.current.forEach((project, index) => {
            const direction = index % 2 === 0 ? 'fromLeft' : 'fromRight';
            const fromVars = direction === 'fromLeft' ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 };
            const toVars = { x: 0, opacity: 1, duration: 1, ease: 'power2.out' };

            gsap.fromTo(project, fromVars, {
                ...toVars,
                scrollTrigger: {
                    trigger: project,
                    start: 'top center',
                    end: 'bottom center',
                    
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }, []);

    return (
        <div className={styles.works}>
            <h1>WORKS</h1>
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <div
                        ref={el => projectsRef.current[index] = el}
                        key={project.source}
                        className={styles.project_card}
                    >
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
