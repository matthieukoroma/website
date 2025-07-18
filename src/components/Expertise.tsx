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
                        Faire de votre question de recherche un paradigme scientifique; j'utilise l'analyse conceptuelle et la connaissance bibliographique pour établir un paradigme qui répond à votre question de recherche.
                    </p>
                </div>

                <div className="skill">
                    <h3>Projet & Financement</h3>
                    <p>
                        Transformer votre paradigme scientifique en programme de financement; j'évalue la pertinence et les champs d'application de votre paradigme pour structurer une stratégie qui assure le financement de votre recherche.
                    </p>
                </div>

                <div className="skill">
                    <h3>Ouverture & Interdisciplinarité</h3>
                    <p>
                        Étendre votre programme de financement en champ interdisciplinaire; j'offre une approche systémique sur l'impact de vos découvertes pour identifier le réseau d'acteurs qui favorise le décloisonnement de votre secteur.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;