import { useEffect } from "react";
import Typed from "typed.js";
import "./Debutant.css";
import { teamTOP, teamBOTTOM } from "../../data/TeamData";
import Menu from "../menu/Menu";
import DebutantContent from "./content/DebutantContent";
import DataDebutant from "../../data/DataDebutantContent";

interface Props {
    showSommaire: boolean[];
    setShowSommaire: (showSommaire: boolean[]) => void;
    isHover: boolean;
    onMouseOver: () => void;
    windowWidth: number;
    openLevel: number;
    openOrNot: (value: number) => string;
    openGestion: boolean;
    onClick: () => void;
    open: boolean;
    indexMenuDebutant: number | null;
    setIndexMenuDebutant: (index: number | null) => void;
    indexMenuExpert: number | null;
    setIndexMenuExpert: (index: number | null) => void;
    indexDefinition: number | null;
    setIndexDefinition: (index: number | null) => void;
};

const Debutant = ({ showSommaire, setShowSommaire, isHover, onMouseOver, windowWidth, openLevel, openOrNot, openGestion, onClick, open, indexMenuDebutant, setIndexMenuDebutant, indexMenuExpert, setIndexMenuExpert, indexDefinition, setIndexDefinition } : Props) => {
    useEffect(() => {
        const element = document.getElementById("debutant-title");
        let typedDebutant: Typed | undefined;
      
        if (openGestion) {
            const options = {
                strings: ["Sommaire"],
                typeSpeed: 100,
                backSpeed: 30,
                backDelay: 500,
                cursorChar: "",
                loop: false,
            };
        
            typedDebutant = new Typed(element, options);
        
        } else {
            typedDebutant = new Typed(element, {
                strings: ["Débutant"],
                typeSpeed: 100,
                backSpeed: 30,
                backDelay: 500,
                cursorChar: "",
                loop: false,
            });
        }
    }, [openGestion]);

    const handleArrowUpClick = () => {
        const themes = Object.keys(DataDebutant);

        if (indexMenuDebutant !== null && indexMenuDebutant !== undefined) {
            if (indexMenuDebutant >= 0) {

                if (indexDefinition !== null) {
                    setIndexDefinition(indexDefinition - 1);
                    if (indexDefinition < 0) {
                        setIndexDefinition(null);
                        setIndexMenuDebutant(indexMenuDebutant - 1);
                    }
                } else {
                    setIndexMenuDebutant(indexMenuDebutant - 1);
                    const theme = themes[indexMenuDebutant];
                    const definitionCount = Object.keys(DataDebutant[theme]).length;
                    setIndexDefinition(definitionCount - 1);
                }
            } else if (indexMenuDebutant !== null && indexMenuDebutant !== undefined) {
                setIndexMenuDebutant(0);
            }
        }
    };

    const handleArrowDownClick = () => {
        const themes = Object.keys(DataDebutant);
        
        if (indexMenuDebutant !== null && indexMenuDebutant !== undefined) {
            if (indexMenuDebutant < themes.length) {
                const theme = themes[indexMenuDebutant];
                const definitionCount = Object.keys(DataDebutant[theme]).length;

                if (indexDefinition !== null) {
                    setIndexDefinition(indexDefinition + 1);
                    if (indexDefinition >= definitionCount) {
                        setIndexDefinition(null);
                        setIndexMenuDebutant(indexMenuDebutant + 1);
                    }
                } else {
                    setIndexDefinition(0);
                }
            } else if (indexMenuDebutant !== null && indexMenuDebutant !== undefined) {
                setIndexMenuDebutant(themes.length - 1);
            }
        }
    };

    return (
        <div className={`content debutant ${isHover ? "is-hover" : "not-hover"} ${openOrNot(openLevel)}`} onMouseOver={() => onMouseOver()}>
            <h1 id="debutant-title" className={`${indexMenuDebutant === null ? "show" : "hidden"}`}></h1>
            <div className={`intro-content ${isHover ? "show" : "hidden"} ${indexMenuDebutant === null ? "open" : "close"}`}>
                <p>
                    Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, 
                    sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, 
                    quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; 
                    Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, 
                    non iudicium clamans. <span className={`read-more ${openOrNot(openLevel)}`} id="debutant" onClick={openGestion ? () => onClick() : undefined}>voir plus</span>
                </p>
            </div>
            <div className={`team-left ${isHover ? "hidden" : "show"}`} style={{width: `${windowWidth * 0.32}px`}}>
                <div className="team-top">
                    <h3>Auteurs</h3>
                    {Object.keys(teamTOP).map((partnerKey) => {
                        const partner = teamTOP[partnerKey];
                        return (
                            <span key={partnerKey}>{partner.firstName} {partner.name.toUpperCase()}</span>
                        );
                    })}
                </div>
                <div className="team-bottom">
                    {Object.keys(teamBOTTOM).map((partnerKey) => {
                        const partner = teamBOTTOM[partnerKey];
                        return (
                            <span key={partnerKey}>{partner.firstName} {partner.name.toUpperCase()}</span>
                        );
                    })}
                </div>
            </div>
            <DebutantContent indexMenuDebutant={indexMenuDebutant} />
            <Menu level={false} showMenu={openLevel} showSommaire={showSommaire} setShowSommaire={setShowSommaire} onClick={onClick} open={open} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} indexMenuExpert={indexMenuExpert} setIndexMenuExpert={setIndexMenuExpert} indexDefinition={indexDefinition} setIndexDefinition={setIndexDefinition}/>
            <div className={`arrows ${openOrNot(openLevel) && indexMenuDebutant !== null ? "show" : "hidden"}`} id="debutant">
                <div className="arrow-theme" id="up" onClick={() => handleArrowUpClick()}>
                    <div className="arrow-theme-content">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="arrow-theme" id="down" onClick={() => handleArrowDownClick()}>
                    <div className="arrow-theme-content">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Debutant;