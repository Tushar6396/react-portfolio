import { NavLink, Outlet } from "react-router-dom";

// import './Header.css'

export default function Header(){
    return(
        <>
            <header className="header">
                <h2 className="port">Port <span className="folio">folio</span></h2>
                <nav className="navbar">
                    <a href="#home">
                        <NavLink to="/">Home</NavLink> 
                    </a>
                    <a href="#about">
                        <NavLink to="/about">About</NavLink>
                    </a>
                    <a href="#services">
                        <NavLink to="/services">Services</NavLink>
                    </a>
                    {/* <a href="#projects">
                        <NavLink to="/projects">Projects</NavLink> */}
                    {/* </a> */}
                    <a href="#contact">
                        <NavLink to="/contact">Contact</NavLink>
                    </a>
                </nav>
            </header>
            <Outlet />
        </>
    )
}