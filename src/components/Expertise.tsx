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
                    <h4>Établir un paradigme</h4>
                    <p>
                        Formuler des concepts en mobilisant des connaissances bibliographiques qui répondent à une question scientifique.
                    </p>
                </div>

                <div className="skill">
                    <h4>Pérenniser un programme</h4>
                    <p>
                       Établir des stratégies en ciblant des sources de financement qui assurent la conduite des projets.
                    </p>
                </div>

                <div className="skill">
                    <h4>Transformer un domaine</h4>
                    <p>
                       Fédérer des réseaux en adoptant des approches systémiques qui décloisonnent les découvertes.
                    </p>
                </div>

             <div className="skill">
                    <h4>Encadrer l'apprentissage</h4>
                    <p>
                       Accompager des formations en fournissant des outils d'évaluation qui favorisent l'autonomie.
                    </p>
                </div>

                <div className="skill">
                    <h4>Diffuser des connaissances</h4>
                    <p>
                        Publier de ressources en créant des supports de communication qui rendent accessible le savoir. 
                    </p>
                </div>

                <div className="skill">
                    <h4>Co-construire une communauté</h4>
                    <p>
                        Coordiner des structures en facilitant des échanges ouverts qui stimulent l'intelligence collective.
                    </p>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;