import React from "react";
import '@fortawesome/free-regular-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faClipboardList, faMoneyBillWave, faBezierCurve } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Savoir-faire</h1>
            <div className="skills-grid">

                <div className="skill">
                    <h3>Protocole & Analyse</h3>
                    <h4>Établir un paradigme</h4>
                    <p>
                        J'utilise l'analyse conceptuelle et bibliographique pour permettre la conception d'un protocole qui répond à une question.
                    </p>
                </div>

                <div className="skill">
                    <h3>Projet & Financement</h3>
                    <h4>Pérenniser un programme</h4>
                    <p>
                        J'évalue la pertinence et l'application d'un projet pour identifier une stratégie de financement qui assure la conduite des recherches.
                    </p>
                </div>

                <div className="skill">
                    <h3>Ouverture & Interdisciplinarité</h3>
                    <h4>Transformer un domaine</h4>
                    <p>
                        J'adopte une approche systémique et ouverte pour fédérer un réseau d'acteurs interdisciplinaire qui décloisonne les découvertes.
                    </p>
                </div>

                <div className="skill">
                    <h3>Formation & Évaluation</h3>
                    <h4>Encadrer l'apprentissage</h4>
                    <p>
                       J'accompagne des personnes dans leur formation pour fournir des critères d'évaluation qui favorise l'autonomisation des étudiants.
                    </p>
                </div>

                <div className="skill">
                    <h3>Publication & Communication</h3>
                    <h4>Diffuser des connaissances</h4>
                    <p>
                        J'écris des articles vers différents publics pour développer des outils de communication qui rendent accessible le savoir. 
                    </p>
                </div>

                <div className="skill">
                    <h3>Coordination & Facilitation</h3>
                    <h4>Co-construire une communauté</h4>
                    <p>
                        J'interviens dans la coordination de structures pour conduire la facilitation d'échanges qui stimule l'intelligence collective.
                    </p>
                </div>


            </div>
        </div>
    </div>
    );
}

export default Expertise;