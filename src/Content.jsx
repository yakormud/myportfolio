import mypic from './assets/mypic.jpg';
import linelogo from './assets/line.png';
import gmaillogo from './assets/gmail.png';
import phonelogo from './assets/phone.png';
import { useState } from 'react';
import Stack from './Stack'
function Content() {
    // const [stack, setStack] = useState("Front End");
    // const handleStackClick = (selectedStack) => {
    //     setStack(selectedStack);
    // };
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
            <div className="flex-column-centered stack-wrap">
                <h1>Tech Stack</h1>
                <p>All of them I have used to create existing projects, none of them I am proficient in</p>
                <p>but I am looking for ways to develop myself further.</p>
                <Stack />
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
                    <div className="flex logo">
                        <img src={linelogo} alt="" />
                        <p>yakor925</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
