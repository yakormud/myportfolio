import logo from './assets/mylogo.png';

function Navbar() {
    return (
        <div className="navbar flex">
            <div className="flex logo">
                <img src={logo} alt="" />
                <p>Nunthakorn</p>
            </div>
            <div className="flex navbar-menu">
                <a>About</a>
                <a>Projects</a>
                <a>Contact</a>
                <div className="flex highlight-btn">
                    <img src={logo} alt="" />
                    <p>My Github</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar