import "./DebutantContent.css";
import DebutantSommaire from "../../../data/DebutantSommaire";

const DebutantContent = () => {
    return (
        <div className="main-container" id="debutant">
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