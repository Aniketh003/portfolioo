import React, { useEffect, useRef } from 'react';
import styles from './works.module.css';
import { projects } from './projects';
import Project from './Project';

const Works = () => {
    return (
        <div className={styles.works}>
            <h1>WORKS</h1>
            <div className={styles.projects}>
                {projects.map((project) => (
                    <div
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
