import React, { useState, useEffect } from "react";

import "../../styles/Navbar.css";

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile , setIsMobile] = useState(false);

    function handleOpenMenu() {
        setIsOpen(!isOpen);
    };
    
    const handleIsMobile = () => {
        // console.log(window.innerWidth);
        if (window.innerWidth > 510) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }
    useEffect(() => {
        handleIsMobile();
        window.addEventListener("resize", handleIsMobile);
        return () => {
            window.removeEventListener("resize", handleIsMobile);
        };
    }, []);


    return (
        <>
            <div className={`nav__background ${isOpen ? "open" : ""}`}></div>
            <nav className="nav__container">
                <div className="nav__logo">
                    <a href="/">
                        &&
                    </a>
                </div>
                {!isMobile ? (
                    <>
                        <div className="nav__links">
                            <a href="#home">Home</a>
                            <a href="#projects">Projects</a>
                            <a href="#about-me">About Me</a>
                            <a href="#lest-talk">Lest Talk!</a>
                        </div>
                        <div className="equalizer">
                            <div className="equalizer__bar"></div>
                            <div className="equalizer__bar"></div>
                            <div className="equalizer__bar"></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div onClick={handleOpenMenu} className={`nav__button--open__menu ${isOpen ? "open" : ""}`}>
                            <span className="nav__button--open__menu-word">
                                {!isOpen? "Menu" : "Close"}
                            </span>
                        </div>
                        <div className={`nav__content ${isOpen ? "open" : ""}`}>
                            <div className="nav__links">
                                <a href="#home">Home</a>
                                <a href="#projects">Projects</a>
                                <a href="#about-me">About Me</a>
                                <a href="#lest-talk">Lest Talk!</a>
                            </div>
                            <div className="equalizer">
                                <div className="equalizer__bar"></div>
                                <div className="equalizer__bar"></div>
                                <div className="equalizer__bar"></div>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </>
    )
}