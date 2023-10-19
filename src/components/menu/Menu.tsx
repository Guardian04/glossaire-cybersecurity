import "./Menu.css";
import Hamburger from "./hamburger/Hamburger";
import MenuDebutant from "./debutant/MenuDebutant";
import MenuExpert from "./expert/MenuExpert";

interface Props {
    level: boolean;
    showMenu: number;
    onClick: () => void;
    open: boolean;
};

const Menu = ({ level, showMenu, onClick, open } : Props) => {
    return (
        <div className={`menu ${showMenu === 1 ? "show" : "hidde"} ${open ? "open" : ""}`} id={`${level ? "expert" : "debutant"}`}>
            <Hamburger level={level} onClick={onClick} open={open} />
            {!level ? <MenuDebutant open={open} /> : <MenuExpert open={open} />}
        </div>
    );
};

export default Menu;