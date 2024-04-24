import logo from './assets/mylogo.png';
import gitlogo from './assets/gitlogo.png';

function Navbar() {
    return (
        <div className="navbar flex">
            <div className="flex logo">
                <img src={logo} alt="" />
                <p>Nunthakorn</p>
            </div>
            <div className="flex navbar-menu">
                <a>About</a>
                <a>Tech Stack</a>
                <a>Projects</a>
                <a>Contact</a>
                <div className="flex highlight-btn">
                    <img src={gitlogo} alt="" />
                    <p>My Github</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar