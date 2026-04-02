import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [showNavbarTitle, setShowNavbarTitle] = useState(false);

    // Mostrar u ocultar el titulo deel header y del navbar segun el scroll
    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = 171 - 80; // misma altura que tu header

            if (window.scrollY > headerHeight) {
                setShowNavbarTitle(true);
            } else {
                setShowNavbarTitle(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Abrir o cerrar menu
    const handleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // Cerrar menu cuando se pasa a desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Cerrar menu cuando cambio de pagina
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <>
            <header className="header">
                <h1 className="header__title">
                    Dua
                </h1>
            </header>
            <nav className="navbar">
                <div className="navbar__content">
                    <h1 className={`navbar__content__title ${showNavbarTitle ? "navbar__title__visible" : ""}`}>
                        Dua
                    </h1>

                    <div className={isMenuOpen ? "navbar__links navbar__links__mobile__active" : "navbar__links"}>
                        <div className="navbar__links__inner">
                            <NavLink to="/" className={({ isActive }) => isActive ? "navbar__link navbar__link__active" : "navbar__link"}>HOME</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "navbar__link navbar__link__active" : "navbar__link"}>ABOUT</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar__link navbar__link__active" : "navbar__link"}>CONTACT</NavLink>
                            <NavLink to="/credits" className={({ isActive }) => isActive ? "navbar__link navbar__link__active" : "navbar__link"}>CREDITS</NavLink>
                        </div>
                    </div>

                    <button className={`navbar__hamburger__button ${isMenuOpen ? "active" : ""}`} onClick={handleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </>
    );
}