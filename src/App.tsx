import { useState, useEffect } from "react";
import Typed from "typed.js";
import "./App.css";
import Debutant from "./components/debutant/Debutant";
import Expert from "./components/expert/Expert";
import SearchBar from "./SearchBar";
import DataDebutant from "./data/DataDebutantContent";
import DataExpertContent from "./data/DataExpertContent";

function App() {
    const [debutantIsHover, setDebutantIsHover] = useState(true);
    const [expertIsHover, setExpertIsHover] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openDebutant, setDebutantOpen] = useState(0);
    const [openExpert, setExpertOpen] = useState(0);
    const [showSommaire, setShowSommaire] = useState([false, false, false]);
    const [disableHandlers, setDisableHandlers] = useState(false);
    const openGestion = (openDebutant !== 0 || openExpert !== 0);
    const [open, setOpen] = useState(false);
    const [indexMenuDebutant, setIndexMenuDebutant] = useState<number | null>(null);
    const [indexMenuExpert, setIndexMenuExpert] = useState<number | null>(null);
    const [indexDefinition, setIndexDefinition] = useState<number | null>(null);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        const element = document.getElementById("glossaire");
        let typed: Typed | undefined;
      
        if (openGestion) {
            const text = openDebutant === 1 ? "Débutant" : "Expert";
            const options = {
                strings: [text],
                typeSpeed: 100,
                backSpeed: 30,
                backDelay: 500,
                cursorChar: "",
                loop: false,
            };
        
            typed = new Typed(element, options);
        
        } else {
            typed = new Typed(element, {
                strings: [''],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 500,
                cursorChar: "",
                loop: false,
            });

            return () => {
                if (typed) {
                typed.destroy();
                }
            };
        }
    }, [openGestion]);

    const handleMouseOverDebutant = () => {
        if (!disableHandlers) {
            setDebutantIsHover(true);
            setExpertIsHover(false);
        }
    };

    const handleMouseOverExpert = () => {
        if (!disableHandlers) {
            setDebutantIsHover(false);
            setExpertIsHover(true);
        }
    };

    const toggleLevel = () => {
        if (!disableHandlers) {
            setDisableHandlers(true);
            setTimeout(() => {
                setDisableHandlers(false);
            }, 1500);
      
            if (openGestion) {
                const handle = openDebutant === 1 ? true : false;
                setDebutantOpen(0);
                setExpertOpen(0);
                setOpen(false);
                setShowSommaire([false, false, false]);
                setIndexMenuDebutant(null);
                setIndexMenuExpert(null);
                setDebutantIsHover(!handle);
                setExpertIsHover(handle);
            } else {
                if (debutantIsHover) {
                    setDebutantOpen(1);
                    setExpertOpen(-1);
                } else {
                    setDebutantOpen(-1);
                    setExpertOpen(1);
                }
            }
        }
    };

    const openOrNot = (openLevel: number) => {
        if (openLevel === 1) {
            return "open";
        } else if (openLevel === 0) {
            return "";
        } else {
            return "close"
        }
    };

    useEffect(() => {
        if (indexDefinition !== null && indexDefinition !== undefined && indexMenuDebutant!== null) {
            const sectionId = `debutant-def-${indexMenuDebutant}-${indexDefinition}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth"});
            }
            console.log(sectionId);
        } else if (indexDefinition === null && indexDefinition !== undefined && indexMenuDebutant!== null) {
            const sectionId = `title-debutant-${indexMenuDebutant}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block : "start" });
            }
        }
    }, [indexDefinition, indexMenuDebutant]);

    return (
        <div className="app">
            <div className={`logo ${debutantIsHover ? "left" : "right"} ${openGestion ? "hidden" : "show"}`}>
                <img src="img/DGSI.png" alt="Logo DGSI" />
            </div>
            <div className={`glossaire ${debutantIsHover ? "right" : "left"} ${openGestion ? "center" : ""}`}>
                <h1 className={`${indexMenuDebutant === null && indexMenuExpert === null? "show" : "hidden"}`}>Glossaire <span id="glossaire"></span></h1>
            </div>
            <div className={`arrow ${debutantIsHover ? "right" : "left"} ${openGestion ? "reverse" : ""}`} onClick={() => toggleLevel()}>
                <div className="arrow-content">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <SearchBar dataDebutant={DataDebutant} dataExpert={DataExpertContent} debutantIsHover={debutantIsHover} expertIsHover={expertIsHover} openGestion={openGestion} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} indexMenuExpert={indexMenuExpert} toggleLevel={toggleLevel} setIndexDefinition={setIndexDefinition} />
            <Debutant showSommaire={showSommaire} setShowSommaire={setShowSommaire} isHover={debutantIsHover} onMouseOver={handleMouseOverDebutant} windowWidth={windowWidth} openLevel={openDebutant} openOrNot={openOrNot} openGestion={openGestion} onClick={handleClick} open={open} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} indexMenuExpert={indexMenuExpert} setIndexMenuExpert={setIndexMenuExpert} indexDefinition={indexDefinition} setIndexDefinition={setIndexDefinition}/>
            <Expert showSommaire={showSommaire} setShowSommaire={setShowSommaire} isHover={expertIsHover} onMouseOver={handleMouseOverExpert} windowWidth={windowWidth} openLevel={openExpert} openOrNot={openOrNot} openGestion={openGestion} onClick={handleClick} open={open} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} indexMenuExpert={indexMenuExpert} setIndexMenuExpert={setIndexMenuExpert} indexDefinition={indexDefinition} setIndexDefinition={setIndexDefinition}/>
        </div>
    );
}

export default App;
