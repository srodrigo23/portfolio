import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPen } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        
        <h1>Career History</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec. 2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPen} />}
          >
            <h3 className="vertical-timeline-element-title">Data science and Intelligence technologies Master's Degree - UTO</h3>
            <h4 className="vertical-timeline-element-subtitle">Oruro, BO</h4>
            <p>
              Python, Machine Learning, Data analysis, Data visualitation, Deep Learning, Regresion. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug. 2024 - Dec. 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst - Alicorp</h3>
            <h4 className="vertical-timeline-element-subtitle">Cochabamba, BO</h4>
            <p>
              Segmentation, data visualization, database queries, database management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec. 2021 - Feb. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software FullStack Engineer - Oktana Corp.</h3>
            <h4 className="vertical-timeline-element-subtitle">Santa Cruz, BO</h4>
            <p>
              Full-stack Development, API Development, Salesforce development, Salesforce Training.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan. 2017 - Dec. 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPen} />}
          >
            <h3 className="vertical-timeline-element-title">Informátic Engineering - UMSS</h3>
            <h4 className="vertical-timeline-element-subtitle">Cochabamba, BO</h4>
            <p>
              Bachelor's Degree
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan. 2011 - Dec. 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPen} />}
          >
            <h3 className="vertical-timeline-element-title">System's Engineering - UMSS</h3>
            <h4 className="vertical-timeline-element-subtitle">Cochabamba, BO</h4>
            <p>
              Bachelor's Degree
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;