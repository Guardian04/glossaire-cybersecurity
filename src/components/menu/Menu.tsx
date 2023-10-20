import "./Menu.css";
import Hamburger from "./hamburger/Hamburger";
import MenuDebutant from "./debutant/MenuDebutant";
import MenuExpert from "./expert/MenuExpert";

interface Props {
    showSommaire: boolean[];
    setShowSommaire: (showSommaire: boolean[]) => void;
    level: boolean;
    showMenu: number;
    onClick: () => void;
    open: boolean;
    indexMenuDebutant: number | null;
    setIndexMenuDebutant: (index: number | null) => void;
    indexMenuExpert: number | null;
    setIndexMenuExpert: (index: number | null) => void;
};

const Menu = ({ level, showMenu, showSommaire, setShowSommaire, onClick, open, indexMenuDebutant, setIndexMenuDebutant, indexMenuExpert, setIndexMenuExpert } : Props) => {
    return (
        <div className={`menu ${showMenu === 1 ? "show" : "hidde"} ${open ? "open" : ""}`} id={`${level ? "expert" : "debutant"}`}>
            <Hamburger level={level} onClick={onClick} open={open} />
            {!level ? <MenuDebutant open={open} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} /> : <MenuExpert showSommaire={showSommaire} setShowSommaire={setShowSommaire} open={open} indexMenuExpert={indexMenuExpert} setIndexMenuExpert={setIndexMenuExpert} />}
        </div>
    );
};

export default Menu;