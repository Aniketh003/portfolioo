import React from 'react';
import styles from "./works.module.css"
import view from "../../assets/tech/view.svg"
import github from "../../assets/socialIcons/github.svg"

const Project = ({ project }) => {
    return (
        <div className={styles.project_card}>
            <a href={project.source} target='_blank'>
                <video width="100%" autoPlay loop muted >
                    <source src={project.videoUrl} type="video/mp4" />
                </video>
            </a>
            <div className={styles.project_description}>
                <div className={styles.tech_stack}>
                    {project.techStack.map((ele) => (
                        <span>{ele}</span>
                    ))}
                </div>
                <div className={styles.heading}>
                    <p>{project.title}</p>
                    <div className={styles.links}>
                        <a href=""><img src={view} alt="Live" /></a>
                        <a href=""><img src={github} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;