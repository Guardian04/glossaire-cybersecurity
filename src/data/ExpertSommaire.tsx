interface Type {
    [key: string]: {
        [key: string]: string;
    };
};

const ExpertSommaire : Type = {
    "Blue Team" : {
        1 : "Surveillance et Détection",
        2 : "Sécurité Réseau",
        3 : "Sécurité Mobile",
        4 : "Authentification et Gestion d’Accès",
        5 : "Protection des Données",
        6 : "Gestion des Vulnérabilités",
        7 : "Forensics et Réponse aux Incidents",
        8 : "Sécurité Applicative",
        9 : "Sécurité du Cloud"
    },
    "Purple Team" : {
        1 : "Base de la Cybersécurité",
        2 : "Communication et Partage d’informations",
        3 : "Techniques de Défense",
        4 : "Législation et Conformité"
    },
    "Red Team" : {
        1 : "Technique d'Attaque",
        2 : "Outils de Test d'Intrusion",
        3 : "Méthodologies",
        4 : "Evasion et Dissimulation",
        5 : "Exfiltration de Données"
    }
};

export default ExpertSommaire;