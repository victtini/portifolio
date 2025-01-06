// src/components/Home.js
import React from "react";
import Skills from "../layout/Skills"; // Certifique-se do nome correto
import styles from './Home.module.css'; // Certifique-se do nome correto

const frontEndSkills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Bootstrap", level: 60 },
];

const backEndSkills = [
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 65 },
    
    { name: "Python", level: 67 },
    { name: "C#", level: 85 },
];

const hardwareSkills = [
    { name: "Arduino", level: 50 },
   ,
];

const gameDevSkills = [
    { name: "Unity", level: 90 },
    { name: "C#", level: 85 }, // Repetido propositalmente devido ao uso em Unity
    { name: "Game Design", level: 80 },
    { name: "Pixel Art", level: 70 },
    { name: "Blender", level: 60 },
];

const outrasHabilidades = [
    { name: "Git & GitHub", level: 70 },
    { name: "Figma", level: 60 },
    { name: "Agile (Scrum & Kanban)", level: 75 },
];


const Home = () => {
    return (
        <section className={styles.home_container}>
            <header className={styles.header}>
                <h1>victor santana santos</h1>
                <h2>Desenvolvedor em Início de Carreira | Experiência em Programação Web, Unity, C#, Python e Desenvolvimento Mobile</h2>
            </header>
            <div className={styles.me}>
                <div className={styles.description}>
                    <h1>Sobre Mim</h1>
                    <p>
                        Sou apaixonado por tecnologia, desenvolvimento de sistemas e a criação de jogos. 
                        Atualmente, estou me especializando em Desenvolvimento de Sistemas pela 
                        <strong> Etec de Embu</strong>, onde conquistei o <strong>3º lugar no vestibulinho</strong>. 
                    </p>
                    <p>
                        Durante minha formação, desenvolvi projetos que combinam criatividade e impacto, como 
                        meu trabalho de conclusão de curso, onde liderei como Scrum Master a criação de um jogo voltado para a 
                        conscientização ambiental. Meu portfólio reflete meu compromisso com a inovação e o aprendizado contínuo.
                    </p>
                </div>
                <img src='./eu.jpg' className={styles.profile} alt="Profile"></img>
            </div>
                    <h2>Skills</h2>
            <div className={styles.skillsSection}>
                
            <Skills title="Front-End " skills={frontEndSkills} />
            <Skills title="Back-End " skills={backEndSkills} />
            <Skills title="Hardware " skills={hardwareSkills} />
            <Skills title="Game Development " skills={gameDevSkills} />
            <Skills title="Outras Habilidades " skills={outrasHabilidades} />

            </div>
            <footer className={styles.contact}>
                <h3>Contato</h3>
                <p>Email: seuemail@example.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a href="https://github.com/seu-github" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
            </footer>
        </section>
    );
};
export default Home;
