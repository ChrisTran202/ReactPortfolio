import React, {useState, useEffect} from "react";
import './Navbar.css'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth =  () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
            <ul className="list"> 
                <li className="items"><a>Home</a></li>
                <li className="items"><a>About</a></li>
                <li className="items"><a>Skills</a></li>
                <li className="items"><a>Projects</a></li>
                <li className="items"><a>Contact</a></li>
            </ul>
            )}
            <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    )
};

