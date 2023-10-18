import "./Menu.css";
import Hamburger from "./hamburger/Hamburger";

interface Props {
    level: boolean;
    showMenu: number;
};

const Menu = ({ level, showMenu } : Props) => {
    return (
        <div className={`menu ${showMenu === 1 ? "show" : "hidde"}`} id={`${level ? "expert" : "debutant"}`}>
            <Hamburger level={level} />
        </div>
    );
};

export default Menu;