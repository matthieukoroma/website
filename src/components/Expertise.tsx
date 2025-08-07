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
                    <p>
                        Faire d'une question de recherche un paradigme scientifique.
                    </p>
                    <p>
                        J'utilise l'analyse conceptuelle et les connaissances bibliographiques pour établir un protocole qui répond à une question de recherche.
                    </p>
                </div>

                <div className="skill">
                    <h3>Projet & Financement</h3>
                    <p>
                        Transformer un paradigme scientifique en programme de financement.
                    </p>
                    <p>
                        J'évalue la pertinence et les champs d'application d'un projet pour structurer une stratégie qui assure un financement de recherche.
                    </p>
                </div>

                <div className="skill">
                    <h3>Ouverture & Interdisciplinarité</h3>
                    <p>
                        Étendre un programme de financement en champ interdisciplinaire.
                    </p>
                    <p>
                        J'adopte une approche systémique dans le cadre de la science ouverte pour fédérer un réseau d'acteurs qui favorise le décloisonnement des découvertes.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;