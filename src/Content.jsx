import mypic from './assets/mypic.jpg';
import gmaillogo from './assets/gmail.png';
import phonelogo from './assets/phone.png';
import gitlogo from './assets/gitlogo.png';
import gitlogowhite from './assets/gitwhite.png';
import { useState } from 'react';
import Stack from './Stack'
import Project from './Project'
function Content() {
    // const [stack, setStack] = useState("Front End");
    // const handleStackClick = (selectedStack) => {
    //     setStack(selectedStack);
    // };
    const projects = [
        {
            gif: mypic,
            title: 'Project 1',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            techStack: ['React', 'Node.js', 'Express']
        },
        {
            gif: mypic,
            title: 'Project 2',
            info: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            techStack: ['HTML', 'CSS', 'JavaScript']
        },

    ];
    return (
        <div>
            <div className="flex-content main-content">
                <div className="paragraph">
                    <h1>Hi, My name is</h1>
                    <h1>Nunthakorn Lamor</h1>
                    <h3>my interest is <span className='rainbow'>Full-Stack Web Development</span></h3>
                    <h4>I studied at Thammasat University.</h4>
                    <div className="flex btn">
                        <img src={gitlogowhite} alt="" />
                        <p>My Github</p>
                    </div>
                </div>
                <div className="mypic-image">
                    <img src={mypic} alt="" />
                </div>
            </div>
            <div className="about-me flex-column-centered">
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit deserunt quo sequi, inventore sunt cupiditate iusto, natus at consectetur modi nulla similique sapiente deleniti explicabo, harum accusantium? Delectus distinctio consectetur dicta natus tempora similique dolorem repudiandae eaque expedita. Ad quae in soluta facere a accusamus sunt ullam mollitia libero.</p>
            </div>
            <div className="flex-column-centered stack-wrap">
                <h1>Tech Stack</h1>
                <p>All of them I have used to create existing projects, none of them I am proficient in</p>
                <p>but I am looking for ways to develop myself further.</p>
                <Stack />
            </div>
            <div className="flex-column-centered stack-wrap">
                <h1>Projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque repellat dolore exercitationem praesentium fugiat necessitatibus assumenda saepe ut distinctio.</p>
                <Project listCard={projects} />
            </div>

            <div className="flex-column-centered">
                <h1>Contact</h1>
                <div className="contact-wrap">
                    <div className="flex logo">
                        <img src={gmaillogo} alt="" />
                        <p>iamyakormud@gmail.com</p>
                    </div>
                    <div className="flex logo">
                        <img src={phonelogo} alt="" />
                        <p>(+66)958837438</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
