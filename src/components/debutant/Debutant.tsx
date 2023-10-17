import "./Debutant.css";
import { teamTOP, teamBOTTOM } from "../../data/TeamData";

interface Props {
    isHover: boolean;
    onMouseOver: () => void;
    windowWidth: number;
};

const Debutant = ({ isHover, onMouseOver, windowWidth } : Props) => {
    return (
        <div className={`content debutant ${isHover ? "is-hover" : "not-hover"}`} onMouseOver={() => onMouseOver()}>
            <h1>Débutant</h1>
            <div className={`team-left ${isHover ? "" : "show"}`} style={{width: `${windowWidth * 0.32}px`}}>
                <div className="team-top">
                    <h3>Auteurs</h3>
                    {Object.keys(teamTOP).map((partnerKey) => {
                        const partner = teamTOP[partnerKey];
                        return (
                            <span key={partnerKey}>{partner.firstName} {partner.name.toUpperCase()}</span>
                        );
                    })}
                </div>
                <div className="team-bottom">
                    {Object.keys(teamBOTTOM).map((partnerKey) => {
                        const partner = teamBOTTOM[partnerKey];
                        return (
                            <span key={partnerKey}>{partner.firstName} {partner.name.toUpperCase()}</span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Debutant;