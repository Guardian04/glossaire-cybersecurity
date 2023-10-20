import "./DebutantContent.css";
import DebutantSommaire from "../../../data/DebutantSommaire";
import DataDebutant from "../../../data/DataDebutantContent";

interface Props {
    indexMenuDebutant: number | null;
};

const DebutantContent = ({ indexMenuDebutant } : Props) => {
    return (
        <div className={`main-container ${indexMenuDebutant === null ? "close" : "open"}`} id="debutant">
            {Object.keys(DataDebutant).map((theme, index1) => {
                return (
                    <section key={theme} id={`debutant-theme-${index1}`} className="main-content debutant">
                        <div className="theme" id={`title-debutant-${index1}`}>
                            <h2>{DebutantSommaire[index1]}</h2>
                            <div className="main-intro">
                                <img src="img/fakeIMG.jpg" alt="fake-img"/>
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
                        </div>
                        <div className="definitions">
                            {Object.keys(DataDebutant[theme]).map((def, index2) => {
                                return (
                                    <section key={def} id={`debutant-def-${index1}-${index2}`} className="definition">
                                        <h2 id="debutant">{DataDebutant[theme][def].title}</h2>
                                        <div className="definition-content">
                                            <img src="img/fakeIMG.jpg" alt="fake-img"/>
                                            <div className="definition-description" id="debutant">
                                                <p>{DataDebutant[theme][def].description}</p>
                                            </div>
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default DebutantContent;