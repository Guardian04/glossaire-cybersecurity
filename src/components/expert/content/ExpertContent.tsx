import "./ExpertContent.css";
import ExpertSommaire from "../../../data/ExpertSommaire";
import DataExpertContent from "../../../data/DataExpertContent";

interface Props {
    indexMenuExpert: number | null;
};

const ExpertContent = ({ indexMenuExpert } : Props) => {
    return (
        <div className={`main-container ${indexMenuExpert === null ? "close" : "open"}`} id="expert">
            {Object.keys(DataExpertContent).map((axe, index1) => {
                return (
                    <div key={axe} className="axe">
                        <div className="expert-axe" id={`expert-axe-${index1}`}>
                            {Object.keys(ExpertSommaire).map((axe, id1) => {
                                if (id1 === index1) {
                                    return (
                                        <h2 key={id1}>{axe}</h2>
                                    );
                                }         
                            })}
                            <div className="main-intro">
                                <img src="img/fakeIMG.jpg" alt="fake-img"/>
                                <div className="description-theme" id="expert">
                                    <p id="expert">
                                        Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, 
                                        sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, 
                                        quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; 
                                        Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, 
                                        non iudicium clamans.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="expert-theme">
                            {Object.keys(DataExpertContent[axe]).map((theme, index2) => {
                                return (
                                    <section key={theme} id={`expert-title-${index1}-${index2}`} className="main-content expert">
                                        <div className="theme-expert" id={`title-expert-${index1}-${index2}`}>
                                            {Object.keys(ExpertSommaire).map((axe, id1) => {
                                                return (
                                                    <div key={axe}>
                                                        {Object.values(ExpertSommaire[axe]).map((theme, id2) => {
                                                            if (id1 === index1 && id2 === index2) {
                                                                return (
                                                                    <h2 key={id2}>{theme}</h2>
                                                                );
                                                            }
                                                        })}
                                                    </div>
                                                );
                                            })}
                                            <div className="main-intro">
                                                <img src="img/fakeIMG.jpg" alt="fake-img"/>
                                                <div className="description-theme" id="expert">
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
                                            {Object.keys(DataExpertContent[axe][theme]).map((def, index3) =>{
                                                return (
                                                    <section key={def} id={`expert-def-${index1}-${index2}-${index3}`} className="definition">
                                                        <h2 id="expert">{DataExpertContent[axe][theme][def].title}</h2>
                                                        <div className="definition-content">
                                                            <img src={DataExpertContent[axe][theme][def].img} alt="fake-img"/>
                                                            <div className="definition-description" id="expert">
                                                                <p>{DataExpertContent[axe][theme][def].description}</p>
                                                                <h4 id="expert">Source :&nbsp;
                                                                    {DataExpertContent[axe][theme][def].source.map((source, index3) => {
                                                                        return (
                                                                            <span key={index3}>
                                                                                <a href={source} key={index3} target="_blank">source {index3 + 1}</a>
                                                                                <span>&nbsp;{DataExpertContent[axe][theme][def].source.length === 1 ? "" : (index3 === DataExpertContent[axe][theme][def].source.length - 1 ? "" : "/")}&nbsp;</span>
                                                                            </span>
                                                                        );
                                                                    })}
                                                                </h4>
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
                    </div>
                );
            })}
        </div>
    );
};

export default ExpertContent;