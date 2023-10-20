interface Type {
    [key: string]: {
        [key: string]: {
            title: string;
            description: string;
            source: string[];
        };
    };
};

const DataDebutant : Type = {
    theme1 : {
        def1: {
            title : "Virus",
            description : "Un virus informatique est une application malveillante ou un logiciel utilisé pour exercer une activité destructrice sur un appareil ou un réseau local. (C’est un type de Malware)",
            source : ["https://www.proofpoint.com/fr/threat-reference/computer-virus"]
        },
        def2 : {
            title : "Malware",
            description : "Un logiciel malveillant ou maliciel, aussi dénommé logiciel nuisible ou programme malveillant ou pourriciel, est un programme développé dans le but de nuire à un système informatique, sans le consentement de l'utilisateur dont l'ordinateur est infecté.",
            source : ["https://fr.wikipedia.org/wiki/Logiciel_malveillant"]
        },
        def3 : {
            title : "Ransomware",
            description : "un code malveillant qui bloque l’accès à votre appareil ou à des fichiers en les chiffrant et qui vous réclame le paiement d’une rançon pour obtenir le déchiffrement de vos données",
            source : ["https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/ransomware-rancongiciel-definition"]
        },
        def4: {
            title : "Botnets",
            description : "Réseau d’ordinateur, des programmes connectés à internet qui communiquent avec d'autres programmes similaires pour l'exécution de certaines tâches malveillante.",
            source : ["https://fr.wikipedia.org/wiki/Botnet"]
        },
        def5: {
            title : "DDoS (Distributed Denial of Service)",
            description : "Attaque consistant à saturer un service pour empêcher son fonctionnement",
            source : ["https://www.kaspersky.fr/resource-center/threats/ddos-attacks","https://www.cloudflare.com/fr-fr/learning/ddos/what-is-a-ddos-attack/"]
        },
        def6: {
            title : "MITM (Man In The Middle)",
            description : "Est une forme d’attaque active dans laquelle une personne malveillante intercepte et modifie les données communiquées pour aboutir à un objectif précis Exemple: se faire passer pour vous",
            source : ["https://csrc.nist.gov/glossary/term/man_in_the_middle_attack"]
        }  
    },
    theme2 : {
        def1: {
            title : "Sensibilisation des employés",
            description : "Fausse campagne de phishing. Sensibilisation aux post-it sur l’écran et sous le clavier. Expliquer l’importance des gestionnaires de mots de passe. Expliquer l’importance des mots de passe uniques.",
            source : ["??",]
        },
        def2 : {
            title : "Formation à la cybersécurité",
            description : "qdsfqdsfqdsfqdfq",
            source : ["sqdvsqvq"]
        }
    },
    theme3 : {
        def1: {
            title : "Pare-feu",
            description : "Dispositif qui protège un système informatique connecté à Internet des tentatives d'intrusion qui pourraient en provenir.",
            source : ["https://dictionnaire.lerobert.com/definition/pare-feu"]
        },
        def2 : {
            title : "VPN",
            description : "Un VPN ou réseau privé virtuel crée une connexion réseau privée entre des appareils via Internet",
            source : ["https://aws.amazon.com/fr/what-is/vpn/#:~:text=Un%20VPN%20ou%20r%C3%A9seau%20priv%C3%A9,anonyme%20sur%20des%20r%C3%A9seaux%20publics."]
        },
        def3 : {
            title : "Sécurité des points d'accès",
            description : "Pour promettre la sécurité d’un point d’accès, vous pouvez filtrer les appareils autorisés, et utiliser des méthodes de connexion plus fortes.",
            source : ["??"]
        }
    },
    theme4 : {
        def1: {
            title : "??",
            description : "??",
            source : ["??"]
        }
       
    },
    theme5 : {
        def1: {
            title : "??",
            description : "??",
            source : ["??"]
        }
    },
    theme6 : {
        def1: {
            title : "Sécurité d'un système d'exploitation",
            description : "??",
            source : ["??"]
        }
       
    },
    theme7 : {
        def1: {
            title : "Sécurité d'un Cloud",
            description : "la pratique consistant à utiliser des serveurs informatiques à distance et hébergés sur internet pour stocker, gérer et traiter des données",
            source : ["https://fr.wikipedia.org/wiki/Cloud_computing"]
        }
    },
    theme8 : {
        def1: {
            title : "Sécurité d’un Mobile",
            description : "Sécurisation des applications mobiles se gère principalement par un chiffrement des données transitant jusqu’aux serveurs piratés de communiquer les informations essentielles sur par exemple les informations personnelles communiquées sur l’app en question. ",
            source : ["https://www.lemagit.fr/definition/Mobile-Device-Management-MDM#:~:text=La%20gestion%20des%20appareils%20mobiles,sur%20le%20lieu%20de%20travail."]
        }    
    },
    theme9 : {
        def1: {
            title : "Sécurité d’Objets Connectés (loT)",
            description : "La sécurité des appareils IoT(Internet Of Things) consiste à protéger les appareils connectés qu’ils soient issus de notre domicile ou qu’ils soient publics en chiffrant la plupart de leurs systèmes.",
            source : ["https://www.lemagit.fr/definition/Mobile-Device-Management-MDM"]
        }
       
    },
    theme10 : {
        def1: {
            title : "Mot de passe fort",
            description : "Un mot de passe fort est un mot de passe difficile à deviner pour quelqu'un ou à pirater pour un programme.",
            source : ["https://www.avg.com/fr/signal/how-to-create-a-strong-password-that-you-wont-forget"]
        },
        def2: {
            title : "Authentification à deux facteurs",
            description : "L'authentification à 2 facteurs (2FA) est une méthode de sécurité basée sur la gestion des identités et accès qui impose deux formes d'identification pour accéder aux ressources et données.",
            source : ["??"]
        },
        def3: {
            title : "Biométrie",
            description : "La biométrie regroupe l'ensemble des techniques informatiques permettant de reconnaître automatiquement un individu à partir de ses caractéristiques physiques, biologiques, voire comportementales.",
            source : ["??"]
        }        
    },
    theme11 : {
        def1: {
            title : "RGPD (Le règlement général sur la protection des données)",
            description : "Oblige les entreprises à respecter un cadre juridique, à être transparente sur l’utilisation de leur données. Ce règlement Renforce les droits des personnes et détient le pouvoir de sanctionner quiconque ne le respectant pas",
            source : ["https://www.cnil.fr/fr/comprendre-le-rgpd/reglement-general-sur-la-protection-des-donnees-ce-qui-change-pour-les-professionnels","https://www.cnil.fr/sites/cnil/files/atoms/files/cybersecurite_-_chiffres_2021.pdf"]
        }    
    }
};

export default DataDebutant;