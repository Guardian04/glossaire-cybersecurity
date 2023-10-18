import { useEffect } from "react";
import Typed from "typed.js";
import "./Debutant.css";
import { teamTOP, teamBOTTOM } from "../../data/TeamData";
import Menu from "../menu/Menu";

interface Props {
    isHover: boolean;
    onMouseOver: () => void;
    windowWidth: number;
    openLevel: number;
    openOrNot: (value: number) => string;
    openGestion: boolean;
};

const Debutant = ({ isHover, onMouseOver, windowWidth, openLevel, openOrNot, openGestion } : Props) => {
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

    return (
        <div className={`content debutant ${isHover ? "is-hover" : "not-hover"} ${openOrNot(openLevel)}`} onMouseOver={() => onMouseOver()}>
            <h1 id="debutant-title"></h1>
            <div className={`intro-content ${isHover ? "show" : "hidden"}`}>
                <p>
                    Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, 
                    sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, 
                    quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; 
                    Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, 
                    non iudicium clamans. <span className="read-more" id="debutant">voir plus</span>
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
            <Menu level={false} showMenu={openLevel} />
        </div>
    );
};

export default Debutant;