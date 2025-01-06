import React from "react";
import styles from './Skills.module.css';

const Skills = ({ title, skills }) => {
    return (
        <div className={styles.skills}>
            <h3>{title}</h3>
            <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                        <span>{skill.name}</span>
                        <div className={styles.skillBar}>
                            <div
                                className={styles.skillLevel}
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
