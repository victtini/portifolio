import React from "react";
import styles from './Home.module.css'; // Certifique-se do nome correto

const Home = () => {
    return (
        <section className={styles.home_container}>
            <header className={styles.header}>
                <h1>Seu Nome</h1>
                <h2>Desenvolvedor Front-End</h2>
            </header>
            <div className={styles.me}>
                
                <div className={styles.description}>
                    <h1>sobre mim</h1>
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
                    <p>
                        Possuo experiência prática com diversas tecnologias, incluindo 
                        <strong> C#, MongoDB, Arduino</strong> e <strong>desenvolvimento web</strong>. Adicionalmente, finalizei 
                        cursos complementares que reforçaram minhas habilidades, como o domínio de jogos 2D com Unity e 
                        desenvolvimento Android, com uma carga horária de mais de 240 horas acumuladas.
                    </p>
                    <p>
                        Valorizo o trabalho em equipe e mantenho uma mentalidade multifunção, sempre aberto a aprender e 
                        me adaptar a novos desafios. Meu objetivo é unir criatividade e técnica para desenvolver soluções 
                        inovadoras e impactantes na área de tecnologia e jogos.
                    </p>
                </div>
                <img src='./eu.jpg' className={styles.profile}></img>
            </div>
            <div className={styles.skills}>
                <h3>Habilidades</h3>
                <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git & GitHub</li>
                </ul>
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
