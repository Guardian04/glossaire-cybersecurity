interface Type {
    [key: string]: {
        [key: string]: {
            title: string;
            description: string;
            source: string[];
            img: string;
            level: string;
        };
    };
};

const DataDebutant : Type = {
    theme1 : {
        def1: {
            title : "Virus",
            description : "Un virus informatique est une application malveillante ou un logiciel utilisé pour exercer une activité destructrice sur un appareil ou un réseau local. (C’est un type de Malware)",
            source : ["https://www.proofpoint.com/fr/threat-reference/computer-virus"],
            img : "https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/styles/16_9_1000w/public/cybersecurity-news_0.jpg?h=be52fd5b&itok=JYNkP7JM",
            level : "debutant"
        },
        def2 : {
            title : "Malware",
            description : "Un logiciel malveillant ou maliciel, aussi dénommé logiciel nuisible ou programme malveillant ou pourriciel, est un programme développé dans le but de nuire à un système informatique, sans le consentement de l'utilisateur dont l'ordinateur est infecté.",
            source : ["https://fr.wikipedia.org/wiki/Logiciel_malveillant"],
            img : "https://thrivedx.com/wp-content/uploads/2022/11/Featured-Images-News-26-1024x1024.png",
            level : "debutant"
        },
        def3 : {
            title : "Ransomware",
            description : "un code malveillant qui bloque l’accès à votre appareil ou à des fichiers en les chiffrant et qui vous réclame le paiement d’une rançon pour obtenir le déchiffrement de vos données",
            source : ["https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/ransomware-rancongiciel-definition"],
            img : "https://www.layer.fr/wp-content/uploads/2019/08/ransomware-1.jpg",
            level : "debutant"
        },
        def4: {
            title : "Botnets",
            description : "Réseau d’ordinateur, des programmes connectés à internet qui communiquent avec d'autres programmes similaires pour l'exécution de certaines tâches malveillante.",
            source : ["https://fr.wikipedia.org/wiki/Botnet"],
            img : "https://media.kasperskydaily.com/wp-content/uploads/sites/93/2013/04/06104116/botnet_blog_title_vacia.png",
            level : "debutant"
        },
        def5: {
            title : "DDoS (Distributed Denial of Service)",
            description : "Attaque consistant à saturer un service pour empêcher son fonctionnement",
            source : ["https://www.kaspersky.fr/resource-center/threats/ddos-attacks","https://www.cloudflare.com/fr-fr/learning/ddos/what-is-a-ddos-attack/"],
            img : "https://www.akamai.com/site/fr/images/callout/2022/what-is-ddos-protocol.png",
            level : "debutant"
        },
        def6: {
            title : "MITM (Man In The Middle)",
            description : "Est une forme d’attaque active dans laquelle une personne malveillante intercepte et modifie les données communiquées pour aboutir à un objectif précis Exemple: se faire passer pour vous",
            source : ["https://csrc.nist.gov/glossary/term/man_in_the_middle_attack"],
            img : "https://www.pandasecurity.com/fr/mediacenter/src/uploads/2022/04/man-in-the-middle-attack-FR_02-Phases-of-man-in-middle-attack.png",
            level : "debutant"
        }  
    },
    theme2 : {
        def1: {
            title : "Sensibilisation des employés",
            description : "Fausse campagne de phishing. Sensibilisation aux post-it sur l’écran et sous le clavier. Expliquer l’importance des gestionnaires de mots de passe. Expliquer l’importance des mots de passe uniques.",
            source : [""],
            img : "https://www.lebigdata.fr/wp-content/uploads/2021/10/cybersecurite-manque-sensibilisation1.jpg",
            level : "debutant"
        }
    },
    theme3 : {
        def1: {
            title : "Pare-feu",
            description : "Dispositif qui protège un système informatique connecté à Internet des tentatives d'intrusion qui pourraient en provenir.",
            source : ["https://dictionnaire.lerobert.com/definition/pare-feu"],
            img : "https://www.nowteam.net/wp-content/uploads/2021/02/firewall-de%CC%81finition-cas-pratique-1080x675.jpeg",
            level : "debutant"
        },
        def2 : {
            title : "VPN",
            description : "Un VPN ou réseau privé virtuel crée une connexion réseau privée entre des appareils via Internet",
            source : ["https://aws.amazon.com/fr/what-is/vpn/#:~:text=Un%20VPN%20ou%20r%C3%A9seau%20priv%C3%A9,anonyme%20sur%20des%20r%C3%A9seaux%20publics."],
            img : "https://surfshark.com/wp-content/uploads/2023/06/vpn-fr.svg",
            level : "debutant"
        },
        def3 : {
            title : "Sécurité des points d'accès",
            description : "Pour promettre la sécurité d’un point d’accès, vous pouvez filtrer les appareils autorisés, et utiliser des méthodes de connexion plus fortes.",
            source : [""],
            img : "https://www.titanhq.fr/wp-content/uploads/2019/07/filtrage-points-acces-sans-fil-securite-1080x675.jpeg",
            level : "debutant"
        }
    },
    theme7 : {
        def1: {
            title : "Sécurité d'un Cloud",
            description : "la pratique consistant à utiliser des serveurs informatiques à distance et hébergés sur internet pour stocker, gérer et traiter des données",
            source : ["https://fr.wikipedia.org/wiki/Cloud_computing"],
            img : "https://kinsta.com/fr/wp-content/uploads/sites/4/2020/01/model-securing-cloud-workloads-3.png",
            level : "debutant"
        }
    },
    theme8 : {
        def1: {
            title : "Sécurité d’un Mobile",
            description : "Sécurisation des applications mobiles se gère principalement par un chiffrement des données transitant jusqu’aux serveurs piratés de communiquer les informations essentielles sur par exemple les informations personnelles communiquées sur l’app en question. ",
            source : ["https://www.lemagit.fr/definition/Mobile-Device-Management-MDM#:~:text=La%20gestion%20des%20appareils%20mobiles,sur%20le%20lieu%20de%20travail."],
            img : "https://share.america.gov/wp-content/uploads/2020/10/5_Steps_phone_security-FR-01.jpg",
            level : "debutant"
        }    
    },
    theme9 : {
        def1: {
            title : "Sécurité d’Objets Connectés (loT)",
            description : "La sécurité des appareils IoT(Internet Of Things) consiste à protéger les appareils connectés qu’ils soient issus de notre domicile ou qu’ils soient publics en chiffrant la plupart de leurs systèmes.",
            source : ["https://www.lemagit.fr/definition/Mobile-Device-Management-MDM"],
            img : "https://mbamci.com/wp-content/uploads/2017/01/Security-iot.png",
            level : "debutant"
        }
       
    },
    theme10 : {
        def1: {
            title : "Mot de passe fort",
            description : "Un mot de passe fort est un mot de passe difficile à deviner pour quelqu'un ou à pirater pour un programme.",
            source : ["https://www.avg.com/fr/signal/how-to-create-a-strong-password-that-you-wont-forget"],
            img : "https://pic.clubic.com/v1/images/1714151/raw.webp?fit=max&width=1200&hash=59cbaa29d9d98804bfce521de2d5630f3ca202dd",
            level : "debutant"
        },
        def2: {
            title : "Authentification à deux facteurs",
            description : "L'authentification à 2 facteurs (2FA) est une méthode de sécurité basée sur la gestion des identités et accès qui impose deux formes d'identification pour accéder aux ressources et données.",
            source : [""],
            img : "https://pic.clubic.com/v1/images/1707139/raw",
            level : "debutant"
        },
        def3: {
            title : "Biométrie",
            description : "La biométrie regroupe l'ensemble des techniques informatiques permettant de reconnaître automatiquement un individu à partir de ses caractéristiques physiques, biologiques, voire comportementales.",
            source : [""],
            img : "https://pradolongo.net/wp-content/uploads/2022/03/donnees-biometriques-1140x641.jpg",
            level : "debutant"
        }        
    },
    theme11 : {
        def1: {
            title : "RGPD",
            description : "Le RGPD (Le règlement général sur la protection des données) oblige les entreprises à respecter un cadre juridique, à être transparente sur l’utilisation de leur données. Ce règlement Renforce les droits des personnes et détient le pouvoir de sanctionner quiconque ne le respectant pas",
            source : ["https://www.cnil.fr/fr/comprendre-le-rgpd/reglement-general-sur-la-protection-des-donnees-ce-qui-change-pour-les-professionnels","https://www.cnil.fr/sites/cnil/files/atoms/files/cybersecurite_-_chiffres_2021.pdf"],
            img : "https://swiver.io/wp-content/uploads/2022/02/RGPD-image.jpg",
            level : "debutant"
        }    
    }
};

export default DataDebutant;