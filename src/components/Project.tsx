import React from "react";
import mock00 from '../assets/images/mock00.png';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project(){
    return(
    <div className="projects-container" id="projects">
        <h1>Accomplissements</h1>
        <div className="projects-grid">
        <div className="project">
                <a href="https://heyzine.com/flip-book/523d8844bf.html⁩" target="_blank" rel="noreferrer"><img src={mock00} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://heyzine.com/flip-book/523d8844bf.html⁩" target="_blank" rel="noreferrer"><h2>Action-recherche : sur la piste de Luhan</h2></a>
                <p>Festival Low-Tech Liège "De la déconstruction à la reconstruction" 2024 à la forêt de Luhan.</p>
            </div>
            <div className="project">
                <a href="https://heyzine.com/flip-book/523d8844bf.html⁩" target="_blank" rel="noreferrer"><img src={mock00} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://heyzine.com/flip-book/523d8844bf.html⁩" target="_blank" rel="noreferrer"><h2>Action-recherche : sur la piste de Luhan</h2></a>
                <p>Festival Low-Tech Liège "De la déconstruction à la reconstruction" 2024 à la forêt de Luhan.</p>
            </div>
            <div className="project">
                <a href="https://www.renolow.be" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.renolow.be" target="_blank" rel="noreferrer"><h2>Rénovation low-tech</h2></a>
                <p>Fonds Renobatex pour la Recherche et Documentation du projet Renolow sur la rénovation écologique du batiment.</p>
            </div>
            <div className="project">
                <a href="https://neuroscience.cam.ac.uk/camneuro-events/cns2024-sleep-consciousness-cognition/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://neuroscience.cam.ac.uk/camneuro-events/cns2024-sleep-consciousness-cognition/" target="_blank" rel="noreferrer"><h2>Coeur conscient</h2></a>
                <p>Prix Post-Doctorant de l'Université de Cambridge sur les corrélats cardiaques des marqueurs de la conscience.</p>
            </div>
            <div className="project">
                <a href="https://www.fondationbs.org/notre-communaute/laureats-et-projets/matthieu-koroma" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.fondationbs.org/notre-communaute/laureats-et-projets/matthieu-koroma" target="_blank" rel="noreferrer"><h2>Sentience corporelle</h2></a>
                <p>Prix Bettencourt pour la recherche sur les marqueurs corporels de la sentience en état de faible vigilance.</p>
            </div>
            <div className="project">
                <a href="https://www.giga.uliege.be/cms/c_12409181/fr/entendre-des-mots-relaxants-dans-son-sommeil-ralentit-le-rythme-cardiaque" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.giga.uliege.be/cms/c_12409181/fr/entendre-des-mots-relaxants-dans-son-sommeil-ralentit-le-rythme-cardiaque" target="_blank" rel="noreferrer"><h2>Relaxation Cardiaque</h2></a>
                <p>Publication sur les réponses cardiaques aux stimulations auditives durant le sommeil.</p>
            </div>
            <div className="project">
                <a href="https://www.aliusresearch.org/bulletin.html" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.aliusresearch.org/bulletin.html" target="_blank" rel="noreferrer"><h2>Bulletin ALIUS</h2></a>
                <p>Co-édition des bulletins ALIUS et conduction d'une dizaine d'interviews de chercheur-se-s sur la conscience.</p>
            </div>
            <div className="project">
                <a href="https://theses.fr/2020UPSLE043" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://theses.fr/2020UPSLE043" target="_blank" rel="noreferrer"><h2>Décodage neuronal</h2></a>
                <p>Thèse de doctorat sur le décodage électroencéphalographique des états de vigilance au cours de l'éveil et du sommeil.</p>
            </div>
            <div className="project">
                <a href="https://theconversation.com/hypnopedie-peut-on-apprendre-une-langue-etrangere-en-dormant-184113" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://theconversation.com/hypnopedie-peut-on-apprendre-une-langue-etrangere-en-dormant-184113" target="_blank" rel="noreferrer"><h2>Apprentissage sommeil</h2></a>
                <p>Publication sur l'apprentissage d'une langue étrangère pendant le sommeil et ses corrélats neuronaux.</p>
            </div>
            <div className="project">
                <a href="https://www.cnrs.fr/sites/default/files/press_info/2019-02/CP_Kouider_sommeilFRWeb.pdf" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cnrs.fr/sites/default/files/press_info/2019-02/CP_Kouider_sommeilFRWeb.pdf" target="_blank" rel="noreferrer"><h2>Sommeil Paradoxal</h2></a>
                <p>Publication sur l'orientation de l'attention pendant le sommeil et sa relation avec les mouvements occulaires rapides.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;