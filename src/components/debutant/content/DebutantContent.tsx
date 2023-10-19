import "./DebutantContent.css";
import DebutantSommaire from "../../../data/DebutantSommaire";

interface Props {
    indexMenuDebutant: number | null;
};

const DebutantContent = ({ indexMenuDebutant } : Props) => {
    return (
        <div className={`main-container ${indexMenuDebutant === null ? "close" : "open"}`} id="debutant">
            {DebutantSommaire.map((title, index) => {
                return (
                    <section key={index} id={`debutant-title-${index}`} className="main-content">
                        <h2>{title}</h2>
                    </section>
                );
            })}
        </div>
    );
};

export default DebutantContent;