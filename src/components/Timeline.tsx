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
            <h3 className="vertical-timeline-element-title">Low Tech Liège ASBL</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre de ressources et de créativité de la Province de Liège</h4>
            <p>
            Recherche et Documentation, Équité et résilience numérique, Rénovation Low-Tech, Ecole Low-Tech Santé 
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
              Collaboration Internationale, Financement Science Ouverte, Prix Bettencourt Jeunes Chercheurs, Prix Post-doctorant de l'Université de Cambridge 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2024"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Coordinateur ALIUS</h3>
            <h4 className="vertical-timeline-element-subtitle">Groupe de recherche International</h4>
            <p>
              Coordination du groupe de recherche, Conférences internationales, Co-édition du Bulletin, Entretiens sur la conscience
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#FFD300', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Docteur CNRS en Neuroscience</h3>
            <h4 className="vertical-timeline-element-subtitle">Ecole Normale Supérieure</h4>
            <p>
              Monitorat "Ingénerie Cognitive", Licence de Philosophie, Licence de Biologie, Classes préparatoires Biologie
            </p>
          
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;