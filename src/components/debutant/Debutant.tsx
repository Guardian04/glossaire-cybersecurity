import "./Debutant.css";

interface Props {
    isHover: boolean;
    onMouseOver: () => void;
};

const Debutant = ({ isHover, onMouseOver } : Props) => {
    return (
        <div className={`content debutant ${isHover ? "is-hover" : "not-hover"}`} onMouseOver={() => onMouseOver()}>
            <h1>Débutant</h1>
        </div>
    );
};

export default Debutant;