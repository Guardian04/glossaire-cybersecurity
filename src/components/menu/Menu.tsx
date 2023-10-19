import "./Menu.css";
import Hamburger from "./hamburger/Hamburger";
import MenuDebutant from "./debutant/MenuDebutant";
import MenuExpert from "./expert/MenuExpert";

interface Props {
    level: boolean;
    showMenu: number;
    onClick: () => void;
    open: boolean;
    indexMenuDebutant: number | null;
    setIndexMenuDebutant: (index: number | null) => void;
};

const Menu = ({ level, showMenu, onClick, open, indexMenuDebutant, setIndexMenuDebutant } : Props) => {
    return (
        <div className={`menu ${showMenu === 1 ? "show" : "hidde"} ${open ? "open" : ""}`} id={`${level ? "expert" : "debutant"}`}>
            <Hamburger level={level} onClick={onClick} open={open} />
            {!level ? <MenuDebutant open={open} indexMenuDebutant={indexMenuDebutant} setIndexMenuDebutant={setIndexMenuDebutant} /> : <MenuExpert open={open} />}
        </div>
    );
};

export default Menu;