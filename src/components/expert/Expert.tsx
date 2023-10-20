import { useEffect } from "react";
import Typed from "typed.js";
import "./Expert.css";
import { teamTOP, teamBOTTOM } from "../../data/TeamData";
import Menu from "../menu/Menu";
import ExpertContent from "./content/ExpertContent";
import DataExpertContent from "../../data/DataExpertContent";

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
    indexMenuAxe: number | null;
    setIndexMenuAxe: (index: number | null) => void;
};

const Expert = ({ showSommaire, setShowSommaire, isHover, onMouseOver, windowWidth, openLevel, openOrNot, openGestion, onClick, open, indexMenuDebutant, setIndexMenuDebutant, indexMenuExpert, setIndexMenuExpert, indexDefinition, setIndexDefinition, indexMenuAxe, setIndexMenuAxe} : Props) => {
    useEffect(() => {
        const element = document.getElementById("expert-title");
        let typedExpert: Typed | undefined;
      
        if (openGestion) {
            const options = {
                strings: ["Sommaire"],
                typeSpeed: 100,
                backSpeed: 30,
                backDelay: 500,
                cursorChar: "",
                loop: false,
            };
        
            typedExpert = new Typed(element, options);
        
        } else {
            typedExpert = new Typed(element, {
                strings: ["Expert"],
                typeSpeed: 100,
                backSpeed: 30,
                backDelay: 500,
                cursorChar: "",
                loop: false,
            });
        }
    }, [openGestion]);

    return (
        <div className={`content expert ${isHover ? "is-hover" : "not-hover"} ${openOrNot(openLevel)}`} onMouseOver={() => onMouseOver()}>
            <h1 id="expert-title" className={`${indexMenuExpert === null ? "show" : "hidden"}`}></h1>
            <div className={`intro-content ${isHover ? "show" : "hidden"} ${indexMenuExpert === null ? "open" : "close"}`}>
                <p id="expert-sommaire">
                    Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, 
                    sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, 
                    quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; 
                    Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, 
                    non iudicium clamans. <span className={`read-more ${openOrNot(openLevel)}`} id="expert" onClick={() => onClick()}>voir plus</span>
                </p>
            </div>
            <div className={`team-right ${isHover ? "hidden" : "show"}`} style={{width: `${windowWidth * 0.32}px`}}>
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
            <ExpertContent indexMenuExpert={indexMenuExpert} />
            <Menu level={true} showMenu={openLevel} showSommaire={showSommaire} setShowSommaire={setShowSommaire} onClick={onClick} open={open} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} indexMenuExpert={indexMenuExpert} setIndexMenuExpert={setIndexMenuExpert} indexDefinition={indexDefinition} setIndexDefinition={setIndexDefinition}/>
        </div>
    );
};

export default Expert;