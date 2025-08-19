import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Parcours</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - aujourd'hui"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Chercheur Low Tech Liège</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre de ressources et de créativité de la Province de Liège</h4>
            <p>
             Recherche et Documentation, Rénovation Low-Tech, Équité et résilience numérique, Ecole Low-Tech Santé 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2020 - 2024"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Chargé de Recherche FNRS</h3>
            <h4 className="vertical-timeline-element-subtitle">Université de Liège</h4>
            <p>
             Corrélats corporels de la vigilance, Sentience et perte de conscience, Activité cardiaque du sommeil, Science ouverte et écologie 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2024"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Coordinateur ALIUS</h3>
            <h4 className="vertical-timeline-element-subtitle">ALIUS Research Group</h4>
            <p>
             Etats altérés de conscience, Conférences internationales, Co-édition du Bulletin, Entretiens interdisciplinaires
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Docteur en Neuroscience CNRS</h3>
            <h4 className="vertical-timeline-element-subtitle">Ecole Normale Supérieure</h4>
            <p>
             Corrélats cérébraux de la vigilance, Apprentissage et sommeil lent, Décodage neuronal de la parole, Attention et sommeil paradoxal     
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2016"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Responsable Environnement</h3>
            <h4 className="vertical-timeline-element-subtitle">Solidarité Normalienne</h4>
            <p>
             Potager collectif, Journal de vulgarisation, Association pour le maintien d'une agriculture paysanne, Événements de sensibilisation écologique      
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011-2016"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Formation Interdisciplinaire</h3>
            <h4 className="vertical-timeline-element-subtitle">Ecole Normale Supérieure Paris-Saclay</h4>
            <p>
             Master Sciences Cognitives, Licence de Biologie, Licence de Philosophie, Année Pleine de Recherche à l'Étranger     
            </p>
          </VerticalTimelineElement>



        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;