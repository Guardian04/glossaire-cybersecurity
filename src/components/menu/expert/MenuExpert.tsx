import { useState } from "react";
import "./MenuExpert.css";
import ExpertSommaire from "../../../data/ExpertSommaire";

interface Props {
    open: boolean;
    indexMenuExpert: number | null;
    setIndexMenuExpert: (index: number | null) => void;
};

const MenuExpert = ({ open, indexMenuExpert, setIndexMenuExpert } : Props) => {
    const [showSommaire, setShowSommaire] = useState([false, false, false]);

    const toggleSommaire = (index: number) => {
        setShowSommaire(showSommaire.map((show, i) => i === index ? !show : show));
    };

    const oldINdex = indexMenuExpert;

    const onClick = (index : number | null) => {
        setIndexMenuExpert(index);
        console.log(index);
        if (oldINdex !== null) {
            console.log(oldINdex);
            const sectionId = `expert-title-${index}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setTimeout(() => {
                const sectionId = `expert-title-${index}`;
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000);
        }
    }; 

    return (
        <div className="content-menu-sommaire">
            <div className={`menu-sommaire-title ${open ? "close" : "open"}`} id="expert">SOMMAIRE</div>
            <div className="menu-sommaire">
                {Object.keys(ExpertSommaire).map((key1, index1) => {
                    return (
                        <div className={`menu-sommaire-item ${showSommaire[index1] ? "open" : ""} ${open ? "show" : "hidde"}`} id={`key-${index1}`} key={index1}>
                            <div className="menu-sommaire-item-title" onClick={() => toggleSommaire(index1)}>
                                <div className={`more-btn ${showSommaire[index1] ? "open" : ""}`}>
                                    <span></span>
                                    <span></span>
                                </div>
                                {key1}
                            </div>
                            <div className={`menu-sommaire-item-content ${showSommaire[index1] ? "open" : "close"}`}>
                                {Object.keys(ExpertSommaire[key1]).map((key2, index2) => {
                                    return (
                                        <div className="menu-sommaire-item-content-item" key={index2} onClick={() => onClick(index1 * 10 + index2)}>
                                            {ExpertSommaire[key1][key2]}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuExpert;