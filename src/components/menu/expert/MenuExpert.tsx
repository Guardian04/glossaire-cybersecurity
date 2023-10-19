import { useState } from "react";
import "./MenuExpert.css";
import ExpertSommaire from "../../../data/ExpertSommaire";

interface Props {
    open: boolean;
};

const MenuExpert = ({ open } : Props) => {
    const [showSommaire, setShowSommaire] = useState([false, false, false]);

    const toggleSommaire = (index: number) => {
        setShowSommaire(showSommaire.map((show, i) => i === index ? !show : show));
    };

    return (
        <div className="content-menu-sommaire">
            <div className="menu-sommaire">
                {Object.keys(ExpertSommaire).map((key1, index) => {
                    return (
                        <div className={`menu-sommaire-item ${showSommaire[index] ? "open" : ""} ${open ? "show" : "hidde"}`} id={`key-${index}`} key={index}>
                            <div className="menu-sommaire-item-title" onClick={() => toggleSommaire(index)}>
                                <div className={`more-btn ${showSommaire[index] ? "open" : ""}`}>
                                    <span></span>
                                    <span></span>
                                </div>
                                {key1}
                            </div>
                            <div className={`menu-sommaire-item-content ${showSommaire[index] ? "open" : "close"}`}>
                                {Object.keys(ExpertSommaire[key1]).map((key2, index) => {
                                    return (
                                        <div className="menu-sommaire-item-content-item" key={index}>
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