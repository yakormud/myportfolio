import csslogo from './assets/techstacks/css.png';
import figmalogo from './assets/techstacks/figma.png';
import htmllogo from './assets/techstacks/html.png';
import jiralogo from './assets/techstacks/jira.png';
import jslogo from './assets/techstacks/js.png';
import javalogo from './assets/techstacks/java.png';
import mirologo from './assets/techstacks/miro.png';
import nodejslogo from './assets/techstacks/nodejs.png';
import reactlogo from './assets/techstacks/react.png';
import sqllogo from './assets/techstacks/sql.png';
import trellologo from './assets/techstacks/trello.png';
import { useState } from 'react';
function Stack({ stack}) {
    const stackImages = {
        "React": reactlogo,
        "JavaScript": jslogo,
        "HTML": htmllogo,
        "CSS": csslogo,
        "Node.js": nodejslogo,
        "Java": javalogo,
        "Jira": jiralogo,
        "Trello": trellologo,
        "Figma": figmalogo,
        "Sql": sqllogo,
        "Miro": mirologo
    };
    const stackLists = {
        "Front End": ["React", "JavaScript", "HTML", "CSS"],
        "Back End": ["Node.js", "Java", "Sql"],
        "Other": ["Jira", "Trello", "Figma", "Miro"]
    };
    return (
        <div className="tech-stack">
            <div className="stack-cards">
                {stackLists[stack].map((tech, index) => (
                    <div key={index} className="card">
                        <img src={stackImages[tech]} alt={tech} />
                        <span>{tech}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stack
