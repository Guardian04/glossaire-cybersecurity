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
                    <section key={index} id={`debutant-title-${index}`} className="main-content debutant">
                        <h2>{title}</h2>
                        <div className="main-intro">
                            <img src="img/fakeIMG.jpg" alt="fake-img" />
                            <div className="description-theme" id="debutant">
                                <p>
                                    Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, 
                                    sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, 
                                    quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; 
                                    Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, 
                                    non iudicium clamans.
                                </p>
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default DebutantContent;