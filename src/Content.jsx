import mypic from './assets/mypic.jpg';
import { useState } from 'react';
import Stack from './Stack'
function Content() {
    const [stack, setStack] = useState("Front End");
    const handleStackClick = (selectedStack) => {
        setStack(selectedStack);
    };
    const stackImages = {
        "React": mypic,
        "JavaScript": mypic,
        "HTML": mypic,
        "CSS": mypic,
        "Node.js": mypic,
        "Java": mypic,
        "Jira": mypic,
        "Trello": mypic,
        "Figma": mypic
    };
    const stackLists = {
        "Front End": ["React", "JavaScript", "HTML", "CSS"],
        "Back End": ["Node.js", "Java"],
        "Other": ["Jira", "Trello", "Figma"]
    };
    return (
        <div>
            <div className="flex-content main-content">
                <div className="paragraph">
                    <h1>Hi, My name is</h1>
                    <h1>Nunthakorn Lamor</h1>
                    <h3>my interest is <span className='rainbow'>Full-Stack Web Development</span></h3>
                    <h4>I studied at Thammasat University.</h4>
                </div>
                <div className="mypic-image">
                    <img src={mypic} alt="" />
                </div>
            </div>
            <div className="about-me flex-column-centered">
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit deserunt quo sequi, inventore sunt cupiditate iusto, natus at consectetur modi nulla similique sapiente deleniti explicabo, harum accusantium? Delectus distinctio consectetur dicta natus tempora similique dolorem repudiandae eaque expedita. Ad quae in soluta facere a accusamus sunt ullam mollitia libero.</p>
            </div>
            <div className="flex-column-centered">
                <h1>Tech Stack</h1>
                <div className="flex stack-menu">
                    <a onClick={() => handleStackClick("Front End")} className={stack === "Front End" ? "active" : "notactive"}>Front End</a>
                    <a onClick={() => handleStackClick("Back End")} className={stack === "Back End" ? "active" : "notactive"}>Back End</a>
                    <a onClick={() => handleStackClick("Other")} className={stack === "Other" ? "active" : "notactive"}>Other</a>
                </div>
                <div className="tech-stack">
                    <Stack stack={stack} stackLists={stackLists} stackImages={stackImages}/>
                </div>
            </div>
        </div>
    )
}

export default Content
