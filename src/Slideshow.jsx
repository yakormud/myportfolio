import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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

function Slideshow({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
    };
    const goToPreviousSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(prevIndex);
    };
    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, 30000);

        return () => clearInterval(timer);
    }, [currentIndex]);
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
    return (
        <div className="slideshow-wrap">
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.url})` }}
                    >
                        {/* <span className="caption">{slide.caption}</span> */}
                    </div>
                ))}
                <div className="button-container">
                    <button onClick={goToPreviousSlide}><FontAwesomeIcon icon={faChevronLeft} style={{ color: "#63E6BE" }} /></button>
                    <button onClick={goToNextSlide}><FontAwesomeIcon icon={faChevronRight} style={{ color: "#63E6BE" }} /></button>
                </div>
            </div>
            <div className="slideshow-info">
                <h3>{slides[currentIndex].title}</h3>
                <div className="stackribbon-wrap">
                    {slides[currentIndex].techStack.map((stack, index) => (
                        <div className="tag" key={index}>
                            <img src={stackImages[stack]} alt="" />
                            <p>{stack}</p>
                        </div>
                    ))}
                </div>
                <br></br>
                <p>{slides[currentIndex].info}</p>
            </div>
        </div>
    )
}

export default Slideshow