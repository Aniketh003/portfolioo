import React, { useState } from 'react';
import styles from './works.module.css';
import { projects } from './projects';
import Project from './Project';
import Button from '../button/Button';

const Works = () => {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const loadMoreProjects = () => {
        if (visibleProjects === projects.length) {
            setVisibleProjects(3)
        } else {
            setVisibleProjects(projects.length);
        }
    };

    return (
        <div className={styles.works}>
            <h1>WORKS</h1>
            <div className={styles.projects}>
                {projects.slice(0, visibleProjects).map((project) => (
                    <Project project={project} key={project.source} />
                ))}
            </div>
            <div className={styles.load_container}>
                {visibleProjects < projects.length ? (
                    <div className={styles.load} onClick={loadMoreProjects}>
                        <Button text="show more" />
                    </div>
                ) :
                    <div className={styles.load} onClick={loadMoreProjects}>
                        <Button text="show less" />
                    </div>
                }
            </div>
        </div>
    );
};

export default Works;
