import { useState } from "react";
import "./App.css";
import Debutant from "./components/debutant/Debutant";
import Expert from "./components/expert/Expert";

function App() {
    const [debutantIsHover, setDebutantIsHover] = useState(true);
    const [expertIsHover, setExpertIsHover] = useState(false);

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
            <Debutant isHover={debutantIsHover} onMouseOver={handleMouseOverDebutant} />
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
            <Expert isHover={expertIsHover} onMouseOver={handleMouseOverExpert} />
        </div>
    );
}

export default App;
