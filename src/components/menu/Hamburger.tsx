import "./Hamburger.css";

interface Props {
    level: boolean;
};

const Hamburger = ({ level } : Props) => {
    return (
        <div className="hamburher" id={`${level ? "expert" : "debutant"}`}>
            
        </div>
    );
};

export default Hamburger;