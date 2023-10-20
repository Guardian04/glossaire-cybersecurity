import "./MenuDebutant.css";
import DebutantSommaire from "../../../data/DebutantSommaire";

interface Props {
    open: boolean;
    indexMenuDebutant: number | null;
    setIndexMenuDebutant: (index: number | null) => void;
    indexDefinition: number | null;
    setIndexDefinition: (index: number | null) => void;
};

const MenuDebutant = ({ open, indexMenuDebutant, setIndexMenuDebutant, indexDefinition, setIndexDefinition } : Props) => {
    const oldINdex = indexMenuDebutant;

    const onClick = (index : number | null) => {
        setIndexMenuDebutant(index);
        if (oldINdex !== null) {
            setIndexDefinition(null);
            const sectionId = `title-debutant-${index}`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block : "start" });
            }
        } else {
            setTimeout(() => {
                setIndexDefinition(null);
                const sectionId = `title-debutant-${index}`;
                const section = document.getElementById(sectionId);
                if (section) {
                    const offset = 35;
                    section.scrollTop = offset;
                }
            }, 1000);
        }
    }; 

    return (
        <div className={`content-menu-sommaire ${open ? "open" : "close"}`} id="debutant">
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