import logo from './assets/mylogo.png';
import gitlogo from './assets/gitlogo.png';

function Navbar() {
    const handleClick = () => {
        const gitUrl = 'https://github.com/yakormud';

        window.location.href = gitUrl;
    }
    const scrollToSection = (sectionID) => {
        // Get the section element by its id 
        let section = document.getElementById(sectionID);
    
        // Scroll to the section smoothly
        section.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div className="navbar flex">
            <div className="flex logo">
                <img src={logo} alt="" />
                <p>Nunthakorn</p>
            </div>
            <div className="flex navbar-menu">
                <a onClick={() => scrollToSection("about-me")}>About</a>
                <a onClick={() => scrollToSection("tech-stack")}>Tech Stack</a>
                <a onClick={() => scrollToSection("projects")}>Projects</a>
                <a onClick={() => scrollToSection("contact")}>Contact</a>
                <div className="flex highlight-btn" onClick={handleClick}>
                    <img src={gitlogo} alt="" />
                    <p>My Github</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar