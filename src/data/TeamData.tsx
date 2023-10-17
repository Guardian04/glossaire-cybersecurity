interface Partner {
    firstName: string;
    name: string;
};

interface Team {
    [key: string]: Partner;
}

const Joys : Partner = {
    firstName: "Joys",
    name: "Guicherd"
};

const Lancelot : Partner = {
    firstName: "Lancelot",
    name: "Francony"
};

const Leo : Partner = {
    firstName: "Léo",
    name: "Bossy"
};

const Claudio : Partner = {
    firstName: "Claudio",
    name: "Reibaud"
};

const Kerrian : Partner = {
    firstName: "Kerrian",
    name: "Chabert"
};

const teamTOP : Team = {
    Joys,
    Lancelot,
};

const teamBOTTOM : Team = {
    Leo,
    Claudio,
    Kerrian
};

export { teamTOP, teamBOTTOM };