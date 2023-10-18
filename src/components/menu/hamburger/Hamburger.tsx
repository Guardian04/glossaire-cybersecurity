import "./Hamburger.css";

interface Props {
    level: boolean;
};

const Hamburger = ({ level } : Props) => {
    return (
        <div className="hamburger" id={`${level ? "expert" : "debutant"}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;