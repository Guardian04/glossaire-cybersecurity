import "./Expert.css";

interface Props {
    isHover: boolean;
    onMouseOver: () => void;
};

const Expert = ({ isHover, onMouseOver } : Props) => {
    return (
        <div className={`content expert ${isHover ? "is-hover" : "not-hover"}`} onMouseOver={() => onMouseOver()}>
            <h1>Expert</h1>
        </div>
    );
};

export default Expert;