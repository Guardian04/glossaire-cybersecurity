import "./Hamburger.css";

interface Props {
    level: boolean;
    onClick: () => void;
    open: boolean;
};

const Hamburger = ({ level, onClick, open } : Props) => {
    return (
        <div className="hamburger" id={`${level ? "expert" : "debutant"}`}>
            <div className={`content ${open ? "open" : ""}`} onClick={() => onClick()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Hamburger;