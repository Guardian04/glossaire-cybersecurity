import "./ExpertContent.css";
import ExpertSommaire from "../../../data/ExpertSommaire";

interface Props {
    indexMenuExpert: number | null;
};

const ExpertContent = ({ indexMenuExpert } : Props) => {
    return (
        <div className={`main-container ${indexMenuExpert === null ? "close" : "open"}`} id="expert">
            {Object.keys(ExpertSommaire).map((key1, index1) => {
                return (
                    <>
                        {Object.keys(ExpertSommaire[key1]).map((key2, index2) => {
                            return (
                                <section key={index2} id={`expert-title-${index1 * 10 + index2}`} className="main-content expert">
                                    <h2>{ExpertSommaire[key1][key2]}</h2>
                                </section>
                            );
                        })}
                    </>
                );
            })}
        </div>
    );
};

export default ExpertContent;