import mypic from './assets/mypic.jpg';
import gmaillogo from './assets/gmail.png';
import phonelogo from './assets/phone.png';
import gitlogo from './assets/gitlogo.png';
import gitlogowhite from './assets/gitwhite.png';
import Stack from './Stack'
import kinraidee from './assets/projects/kinraidee.png';
import aquaticrush from './assets/projects/aquaticrush.gif';
import expensetracker from './assets/projects/expensetracker.png';
import sojourngun from './assets/projects/sojourngun.gif';
import Slideshow from './Slideshow';
function Content() {
    // const [stack, setStack] = useState("Front End");
    // const handleStackClick = (selectedStack) => {
    //     setStack(selectedStack);
    // };
    const handleClick = () => {
        const gitUrl = 'https://github.com/yakormud';

        window.location.href = gitUrl;
    }
    const slideData = [
        { 
            url: kinraidee, 
            title: "KinRaiDee - A web application that assists users in making decisions about their meals.", 
            techStack: ['Php', 'CSS', 'Html', 'Ajax', 'JavaScript', 'Sql'], 
            info: 'Kinraidee is a website that helps users make informed decisions about food choices. which is about managing the data warehouse in the database. It is a group project done in the subject of database management, submitted as work to the teacher. It is a group work that helps to gain experience in writing websites. Even though I didn\'t really publish it in the domain, it was the first time that I learned to manage website pages together with friends. They made an appointment to work in the university\'s common library. I was given the responsibility of being the leader in managing the website, including designing the data storage structure. Website page design, all systems and features This was group work that allowed me to learn how to manage databases. And look at the overall picture of website development that has more access to data from the cloud. It is the first job where I have to be like a Product Manager that has to divide work with up to 10 team members, even though there are some periods of work. Not smooth and encountered problems Whether it\'s in terms of skills, communication, understanding of work that doesn\'t match. The division of work is not very detailed. There is rarely a plan for working. But it was considered a very good first experience.' 
        },
        { 
            url: aquaticrush, 
            title: 'Aquatic Rush - Interactive Web Development Using TreeJS', 
            techStack: ['ThreeJS', 'CSS', 'Html', 'JavaScript'], 
            info: 'During the second year of university There was a final project that required the use of TreeJS to design and develop a website in the Computer Graphics subject. I chose to design and develop a game on the website. It is a simple coin collecting game that relies on the relationship between the movement of the mouse and objects, detecting collisions between the player and coins and the player and obstacles. In which I received all duties related to the website. Whether it is managing the display of the website, Interactive objects, logic related to all objects and working in the back end for displaying the website. At that time, it can be said that it was my first work where I started writing code in Javascript and wrote more than 800 lines and spent a lot of time studying. Until finally, there was a game that was developed. Even though I didn\'t understand much of the code, it was the first work that I felt when I presented it to my friends. I feel very happy. I received a lot of encouragement. And it is a piece of work that I feel very proud of.' 
        },
        { 
            url: expensetracker, 
            title: 'Expense Tracker - Web Application that help user manage and calculate their personal finances', 
            techStack: ['Html', 'CSS', 'JavaScript'], 
            info: 'Expense tracker is an application for tracking expenses. For this project, it was created in the software development subject where the teacher asked us to search for an open source repository from Github to further develop with a group of 5 friends in the Scrum style of working, which is the second big piece of work that I took on the role of Product Owner. In working in the Scrum style, I, the Product Owner, was responsible for thinking and designing the Sprint Backlog to determine guidelines for developing additional functionality. Participated in writing code including front end, back end, and designing test cases. In addition, there was Stand-up meeting, Sprint review, which was considered the first time. Because in the past there had never been a structured way of working before. Extreme programming was used in the form of paired programming in alternating ways. There were beginning to use tools that helped design and make work easier, such as Miro, Trello, and Do the CRC class diagram until finally, when the work of both sprints is complete, the results are obtained, with all problems encountered in Sprint 1 being resolved.' 
        },
        { 
            url: sojourngun, 
            title: 'Sojourn Gun - Minecraft plugin inspired by Sojourn gun in popular fps game, Overwatch', 
            techStack: ['Java'], 
            info: 'Normally, I like playing Minecraft. So I tried to study and try writing code to develop a plug-in for the game. For this plugin, it was writing with Java, the concept of this plugin is to simulate shooting a gun that causes damage to entity units in the game. The usage style is inspired by the famous character Sojourn in the popular fps game, Overwatch.' 
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
                    <br/>
                    <div className="flex btn" onClick={handleClick}>
                        <img src={gitlogowhite} alt=""/>
                        <p>My Github</p>
                    </div>
                </div>
                <div className="mypic-image">
                    <img src={mypic} alt="" />
                </div>
            </div>

            <section id='about-me'/>
            <br></br><br></br>
            <div className="about-me flex-column-centered">
                <h1>About me</h1>
                <p>I am a third year student in the Faculty of Science and Technology, Thammasat University. I am looking for a place to do a cooperative education internship during this summer as a full stack web developer or mobile application developer or other related positions. Hoping to gain more experience in cooperative education practice. In addition, I also love playing games and interested in developing a game too.</p>
            </div>
            <section id='tech-stack'/>
            <br></br><br></br>
            <div className="flex-column-centered stack-wrap">
                <h1>Tech Stack</h1>
                <p>All of them I have used to create existing projects, none of them I am proficient in</p>
                <p>but I am looking for ways to develop myself further.</p>
                <Stack />
            </div>
            <section id='projects'/>
            <br></br><br></br>
            <div className="flex-column-centered stack-wrap">
                <h1>Projects</h1>
                {/* <Project listCard={projects} /> */}
                <Slideshow slides={slideData}/>

            </div>
            <section id='contact'/>
            <br></br><br></br>
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
