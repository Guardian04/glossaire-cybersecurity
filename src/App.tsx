import { useState, useEffect } from "react";
import "./App.css";
import Debutant from "./components/debutant/Debutant";
import Expert from "./components/expert/Expert";
import "./data/TeamData";

function App() {
    const [debutantIsHover, setDebutantIsHover] = useState(true);
    const [expertIsHover, setExpertIsHover] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleMouseOverDebutant = () => {
        setDebutantIsHover(true);
        setExpertIsHover(false);
    };

    const handleMouseOverExpert = () => {
        setDebutantIsHover(false);
        setExpertIsHover(true);
    };

    return (
        <div className="app">
            <div className={`logo ${debutantIsHover ? "left" : "right"}`}>
                <img src="img/DGSI.png" alt="Logo DGSI" />
            </div>
            <Debutant isHover={debutantIsHover} onMouseOver={handleMouseOverDebutant} windowWidth={windowWidth} />
            <div className={`glossaire ${debutantIsHover ? "right" : "left"}`}>
                <h1>Glossaire</h1>
            </div>
            <div className={`arrow ${debutantIsHover ? "right" : "left"}`}>
                <div className="arrow-content">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Expert isHover={expertIsHover} onMouseOver={handleMouseOverExpert} windowWidth={windowWidth} />
        </div>
    );
}

export default App;
