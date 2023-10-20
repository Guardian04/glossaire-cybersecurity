import { useState } from "react";
import "./MenuExpert.css";
import ExpertSommaire from "../../../data/ExpertSommaire";

interface Props {
    showSommaire: boolean[];
    setShowSommaire: (showSommaire: boolean[]) => void;
    open: boolean;
    indexMenuExpert: number | null;
    setIndexMenuExpert: (index: number | null) => void;
};

const MenuExpert = ({ showSommaire, setShowSommaire, open, indexMenuExpert, setIndexMenuExpert } : Props) => {

    const toggleSommaire = (index: number) => {
        setShowSommaire(showSommaire.map((show, i) => i === index ? !show : show));
    };

    const oldINdex = indexMenuExpert;

    const onClickTheme = (index1 : number | null, index2 : number | null) => {
        setIndexMenuExpert(index2);
        if (oldINdex !== null) {
            console.log(oldINdex);
            const sectionId = `expert-title-${index1}-${index2}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setTimeout(() => {
                const sectionId = `expert-title-${index1}-${index2}`;
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000);
        }
    };

    const onClickAxe = (index : number | null) => {
        setIndexMenuExpert(index);
        if (oldINdex !== null) {
            console.log(oldINdex);
            const sectionId = `expert-axe-${index}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setTimeout(() => {
                const sectionId = `expert-axe-${index}`;
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000);
        }
    };

    return (
        <div className={`content-menu-sommaire ${open ? "open" : "close"}`}>
            <div className={`menu-sommaire-title ${open ? "close" : "open"}`} id="expert">SOMMAIRE</div>
            <div className="menu-sommaire">
                {Object.keys(ExpertSommaire).map((key1, index1) => {
                    return (
                        <div className={`menu-sommaire-item ${showSommaire[index1] ? "open" : ""} ${open ? "show" : "hidde"}`} id={`key-${index1}`} key={index1}>
                            <div className="menu-sommaire-item-title">
                                <div className={`more-btn ${showSommaire[index1] ? "open" : ""}`} onClick={() => toggleSommaire(index1)}>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div onClick={() => onClickAxe(index1)}>
                                    {key1}
                                </div>
                            </div>
                            <div className={`menu-sommaire-item-content ${showSommaire[index1] ? "open" : "close"}`}>
                                {Object.keys(ExpertSommaire[key1]).map((key2, index2) => {
                                    return (
                                        <div className="menu-sommaire-item-content-item" key={index2} onClick={() => onClickTheme(index1, index2)}>
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