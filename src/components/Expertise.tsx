import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faAndroid, faSalesforce} from '@fortawesome/free-brands-svg-icons';
// import {brain} from '@fortawesome/react-fontawesome'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "PostgreSQL",
    "Prisma", 
    "Next.js",
    "Python", 
    "Flask",
    "Fast API"
];

const labelsSecond = [
    "Salesforce",
    "Apex",
    "Lightning Web Components",
    "Aura Components",
    "Heroku",
    "Javascrit",
    "Amazon Bucketeer"
];

const labelsThird = [
    "Android",
    "Java", 
    "SqLite",
    "ExoPlayer",
    "Google Api",
    "Dropbox Api",
    "Material Desing",
];

const labelsFourth = [
    "Python",
    "SQL",
    "SqlServer",
    "Pandas",
    "Numpy",
    "Scykit-learn",
    "Pytorch",
    "matplotlib",
    "Apache Spark"
];


const labelsFifth = [
    "Java", "Visual Basic"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have experience building applications from scratch using modern technologies such as React, Next.js, Prisma. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSalesforce} size="3x"/>
                    <h3>Salesforce Developer</h3>
                    <p>I builded some apps for the industry using Salesforce platform. With a <a className="link" href="https://www.salesforce.com/trailblazer/srodrigo23" target="_blank">Developer I certification</a>, I give the confidence that I know how to use this technology.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile Development</h3>
                    <p>I implemented an Android application for stream media content for files stored in cloud services like: Google Drive and Dropbox. I also explored React Native capabilities for build mobile applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science and Machine Learning</h3>
                    <p>Coursing an Artificial Intelligence and Data Science Master's  degree course, I got experience to apply Machine and Deep Learning algorihtms, Segmentation, Regresion cases uses, Natural Language Processing and Convolutional neuronal networks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Teach Experience</h3>
                    <p>I was a university lecturer during summer and winter courses at the Universidad Mayor de San Simón, Faculty of Science and Technology, teaching the subjects Information Systems II and Computer Science I.</p>
                    <div className="flex-chips"> 
                        <span className="chip-title">Tech stack:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;