import "./MenuDebutant.css";
import DebutantSommaire from "../../../data/DebutantSommaire";

interface Props {
    open: boolean;
    indexMenuDebutant: number | null;
    setIndexMenuDebutant: (index: number | null) => void;
};

const MenuDebutant = ({ open, indexMenuDebutant, setIndexMenuDebutant } : Props) => {
    const oldINdex = indexMenuDebutant;

    const onClick = (index : number | null) => {
        setIndexMenuDebutant(index);
        if (oldINdex !== null) {
            console.log(oldINdex);
            const sectionId = `debutant-title-${index}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setTimeout(() => {
                const sectionId = `debutant-title-${index}`;
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }, 1000);
        }
    }; 

    return (
        <div className="content-menu-sommaire" id="debutant">
            <div className={`menu-sommaire-title ${open ? "close" : "open"}`} id="debutant">SOMMAIRE</div>
            <div className="menu-sommaire">
                {DebutantSommaire.map((elt, index) => {
                    return (
                        <div className={`menu-sommaire-item ${open ? "show" : "hidde"} ${index === indexMenuDebutant ? "selected" : ""}`} id={`key-${index}`} key={index} onClick={() => onClick(index)}>
                            <div className="menu-sommaire-item-title">{elt}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuDebutant;