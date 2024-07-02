import React from 'react';
import styles from "./works.module.css"
import code from "../../assets/code.svg"

const Project = ({ project }) => {
    return (
        <div className={styles.project_card}>
            <div className={styles.project_description}>
                <h2>{project.title}</h2>
                <div className={styles.tech_stack}>
                    {project.techStack.map((ele, index) => (
                        <img src={ele} alt="icon" key={index} />
                    ))}
                    <hr />
                    <a href={project.code} target='_blank'>
                        <img src={code} alt="" />
                    </a>
                </div>
            </div>
            <a href={project.source} target='_blank'>
                <video width="100%" autoPlay loop muted >
                    <source src={project.videoUrl} type="video/mp4" />
                </video>
            </a>
        </div>
    );
};

export default Project;