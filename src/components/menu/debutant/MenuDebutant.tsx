import { useState } from "react";
import "./MenuDebutant.css";
import DebutantSommaire from "../../../data/DebutantSommaire";

interface Props {
    open: boolean;
};

const MenuDebutant = ({ open } : Props) => {
    return (
        <div className="content-menu-sommaire" id="debutant">
            <div className="menu-sommaire">
                {DebutantSommaire.map((elt, index) => {
                    return (
                        <div className={`menu-sommaire-item ${open ? "show" : "hidde"}`} id={`key-${index}`} key={index}>
                            <div className="menu-sommaire-item-title">
                                {elt}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuDebutant;