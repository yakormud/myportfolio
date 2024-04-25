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
import threejslogo from './assets/techstacks/threejs.png';
import { useState } from 'react';
function Stack() {

    const [stack, setStack] = useState("Front End");
    const handleStackClick = (selectedStack) => {
        setStack(selectedStack);
    };
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
        "Miro": mirologo,
        "ThreeJS": threejslogo
    };
    const stackLists = {
        "Front End": ["HTML", "JavaScript", "CSS", "React"],
        "Back End": ["Node.js", "Java", "Sql", "ThreeJS"],
        "Other": ["Jira", "Trello", "Figma", "Miro"]
    };
    return (
        <>
            <div className="flex stack-menu">
                <a onClick={() => handleStackClick("Front End")} className={stack === "Front End" ? "active" : "notactive"}>Front End</a>
                <a onClick={() => handleStackClick("Back End")} className={stack === "Back End" ? "active" : "notactive"}>Back End</a>
                <a onClick={() => handleStackClick("Other")} className={stack === "Other" ? "active" : "notactive"}>Other</a>
            </div>
            <div className="tech-stack">
                <div className="tech-stack">
                    <div className="stack-cards">
                        {stackLists[stack].map((tech, index) => (
                            <div key={index} className="card">
                                <img src={stackImages[tech]} alt={tech} />
                                <p>{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stack
