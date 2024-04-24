import mypic from './assets/mypic.jpg';
import { useState } from 'react';
function Content() {
    const [stack, setStack] = useState("Front End");
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
            <div className="tech-stack flex-column-centered">
                <h1>Tech Stack</h1>

            </div>
        </div>
    )
}

export default Content
