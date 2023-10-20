interface Type {
    [key : string]: {
        [key: string]: {
            [key: string]: {
                title: string;
                description: string;
                source: string[];
            };
        };
    };
};

const DataExpertContent : Type = {
    axe1 : {
        theme1 : {
            def1: {
                title : "SIEM (systèmes de gestion des évènements et des informations de sécurité)",
                description : "Un logiciel SIEM (systèmes de gestion des évènements et des informations de sécurité) est un logiciel de défense qui va surveiller et analyser les évènements au sein du réseau afin de détecter les activités anormales et potentiellement dangereuses. Cela permet de garder une longueur d’avance sur les différentes menaces.",
                source : ["https://www.elastic.co/fr/what-is/siem", "https://www.microsoft.com/fr-fr/security/business/security-101/what-is-siem"]
            },
            def2 : {
                title : "IDS",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def3: {
                title : "IPS",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def4 : {
                title : "Packet Capture",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def5: {
                title : "Honeypot",
                description : "C’est un outil en cybersécurité, le honeypot va imiter les cibles les plus courantes de cyber-attaques et cela va être utilisé pour attirer les cybercriminels, les détecter et donc détourner leur attention des cibles réelles.",
                source : ["https://ca-fr.norton.com/blog/iot/what-is-a-honeypot?lsModal=1"]
            },
        },
        theme2 : {
            def1: {
                title : "Firewall",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "DNS",
                description : "le DNS aide à diriger le trafic sur Internet en connectant les noms de domaine à des serveurs Web réels.",
                source : ["https://www.nameshield.com/ressources/lexique/dns-domain-name-system/", "https://aws.amazon.com/fr/route53/what-is-dns/"],
                //IMG : "https://academy.bit2me.com/wp-content/uploads/2019/05/49_DNS.png"
            },
            def3: {
                title : "Proxy Server",
                description : "Un serveur proxy est utilisé pour faire l'intermédiaire entre le site web et vous, il a plusieurs fonctionnalités tels que : Filtrer des sites non autorisés, accélérer la navigation, enregistrer l’historique des navigations, sécuriser le réseau local, conserver l’anonymat des adresses IP.",
                source : ["https://www.varonis.com/fr/blog/serveur-proxy#:~:text=Un%20serveur%20proxy%20joue%20le,Web%20sur%20lesquels%20ils%20naviguent.", "https://www.avast.com/fr-fr/c-what-is-a-proxy-server","https://primabord.eduscol.education.fr/qu-est-ce-qu-un-serveur-proxy"]
            },
            def4: {
                title : "NAT (Network Address Translation)",
                description : "Le NAT, est utile pour les entreprises qui souhaitent regrouper toutes les IPs internes d’un groupe pour les convertir en une seule IP externe.",
                source : ["https://www.manageengine.com/fr/network-configuration-manager/configlets/what-is-nat.html", "https://www.lemagit.fr/definition/Network-Address-Translation#:~:text=Le%20Network%20Address%20Translation%20(ou,IP%20n%C3%A9cessaires%20%C3%A0%20une%20entreprise."]
            },
            def5: {
                title : "VPN",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def6: {
                title : "Port Scanning",
                description : "Le scan de port est une technique souvent utilisée par les entreprises pour trouver les entrées matérielles de leurs systèmes informatiques, ils utilisent souvent 3 types de scan : le TCP scan, le SYN scan et le UDP scan pour les sécuriser et éviter des attaques.",
                source : ["https://nordvpn.com/fr/cybersecurity/glossary/port-scanning/", "https://www.avast.com/fr-fr/business/resources/what-is-port-scanning#pc"]
            },
            def7: {
                title : "Access point security",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme3 : {
            def1: {
                title : "Sécurité des appareils IoT",
                description : "La sécurité des appareils IoT(Internet Of Things) consiste à protéger les appareils connectés qu’ils soient issus de notre domicile ou qu’ils soient publics en chiffrant la plupart de leurs systèmes.",
                source : ["??"]
            },
            def2 : {
                title : "Protocoles de communication sécurisés",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme4 : {
            def1: {
                title : "2FA",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "IAM",
                description : "une infrastructure de processus métier qui permet de gérer les identités électroniques ou numériques.",
                source : ["https://www.systancia.com/definition-identity-and-access-management-iam/#:~:text=La%20gestion%20des%20identit%C3%A9s%20et%20des%20acc%C3%A8s%20(IAM)%20d%C3%A9signe%20l,un%20utilisateur%20sur%20le%20r%C3%A9seau."]
            },
            def3: {
                title : "Least Privilege Principle",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def4: {
                title : "PAM",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def5: {
                title : "Biometrics",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme5 : {
            def1: {
                title : "Data Encryption",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "Data Loss Prevention",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def3: {
                title : "Data Rentention Policies",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme6 : {
            def1: {
                title : "Risk Assessment",
                description : "Les évaluations des risques sont des processus systématiques et méthodiques qui ont pour but d’identifier, d’évaluer, et de hiérarchiser les risques liés à la sécurité des informations et des systèmes d’information.  Cela permet de déterminer un niveau de risque acceptable pour l’organisation. Elle contribue également à prioriser les actions de prévention, de protection et de réaction face aux cyberattaques, ainsi que de définir les mesures de contrôle et de suivi nécessaires pour assurer la conformité aux normes et aux réglementations en vigueur.",
                source : ["https://www.techtarget.com/searchsecurity/definition/risk-assessment", "https://www.oracle.com/fr/security/risk-assessment/"]
            },
            def2 : {
                title : "CVE",
                description : "L’acronyme CVE (Common vulnerabilities) correspond à une liste publique répertoriant des failles de sécurité.",
                source : ["https://fr.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures"]
            }
        },
        theme7 : {
            def1: {
                title : "Digital Forensics",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "Incident Response",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def3 : {
                title : "Chain of Custody",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def4 : {
                title : "IOC",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def5 : {
                title : "Malware Analysis",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme8 : {
            def1: {
                title : "WAF",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "Secure Coding",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def3 : {
                title : "API Security (Application programming interface)",
                description : "Une interface de programmation d'application (API) est un moyen pour un logiciel d'interagir avec un autre logiciel. Si un programme ou une application possède une API, des clients externes peuvent lui demander des services. Types d’attaques fréquentes Exploitation des vulnérabilités, Attaques basées sur l’authentification, Erreur interne d’autorisation IAM, DDoS → Limitation du débit Exemple.",
                source : ["https://www.cloudflare.com/fr-fr/learning/security/api/what-is-api-security/"]
            }
        },
        theme9 : {
            def1: {
                title : "Cloud",
                description : "Le cloud désigne un endroit où sont stockées des données dans des serveurs à travers le monde.",
                source : ["https://www.cnil.fr/fr/definition/cloud-computing#:~:text=Le%20cloud%20computing%20(en%20fran%C3%A7ais,et%20li%C3%A9s%20par%20un%20r%C3%A9seau.", "https://www.1min30.com/dictionnaire-du-web/cloud"]
            },
            def2 : {
                title : "IaaS (Infrastructure-as-a-Service)",
                description : "Service cloud payant qui offre des services de calculs, d’infrastructures et de stockage. vous permet de réduire la maintenance des centres de données locaux, de réaliser des économies sur les coûts matériels. Vous gérez le reste.",
                source : ["https://azure.microsoft.com/fr-fr/resources/cloud-computing-dictionary/what-is-iaas"]
            },
            def3: {
                title : "PaaS (Platform-as-a-service)",
                description : "Ce service cloud payant permet d'éviter de gérer la logistiques, de détenir des serveurs physiques etc. Vous ne gérez que la partie application.",
                source : ["https://azure.microsoft.com/fr-fr/resources/cloud-computing-dictionary/what-is-paas#:~:text=Le%20PaaS%20permet%20d'%C3%A9viter,de%20d%C3%A9veloppement%20et%20autres%20ressources."]
            },
            def4: {
                title : "SaaS (Software as a Service)",
                description : "Le SaaS est une solution cloud payante qui gère toute la logistique elle même, vous n’avez qu'à payer un abonnement pour avoir accès au service, site.",
                source : ["https://www.cegid.com/fr/faq/quest-ce-que-le-saas/#:~:text=Une%20solution%20dite%20SaaS%20(%C2%AB%20Software,aussi%20appel%C3%A9%20fournisseur%20de%20service.", "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-utiliser-0"]
            },
            def5: {
                title : "SÉCURITÉ A.W.S",
                description : "AWS est un cloud avec plusieurs outils dont un CSPM ou encore un SOAR permettant une sécurisation optimale. Initier des flux d'orchestration, d'automatisation et de réponse de sécurité (SOAR) / Mener une gestion de la posture de sécurité dans le cloud (CSPM)",
                source : ["https://aws.amazon.com/fr/security/"]
            },
            def6: {
                title : "SÉCURITÉ Azure",
                description : "Azure est un cloud créé par Microsoft équipé du système microsoft defender, gateway, un DDoS protector et un Key Vault*. *Key Vault protéger les clés et autres secrets, et en garder le contrôle./ Étendre la protection contre les menaces à toutes les infrastructures.",
                source : ["https://azure.microsoft.com/fr-fr/explore/security"]
            },
            def7: {
                title : "SÉCURITÉ G.C.P",
                description : "GCP est un cloud pour les entreprises avec un accès zéro confiance un Digital Risk Protection Mandiant.",
                source : ["https://cloud.google.com/security?hl=fr"]
            }
        },
    },
    axe2 : {
        theme1 : {
            def1: {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme2 : {
            def1: {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        }
    },
    axe3 : {
        theme1 : {
            def1: {
                title : "MITM (Man In The Middle) - L’homme au milieu",
                description : "Est une forme d’attaque active dans laquelle une personne malveillante intercepte et modifie les données communiquées pour aboutir à un objectif précis (se faire passer pour vous)",
                source : ["https://csrc.nist.gov"]
            },
            def2 : {
                title : "Phishing - Hameçonnage",
                description : "Ce type d’attaque vise à obtenir du destinataire d’un courriel d’apparence légitime qu’il transmette ses coordonnées bancaires ou ses identifiants de connexion à des services financiers, afin de lui dérober de l’argent.",
                source : ["https://www.ssi.gouv.fr", "https://www.cnil.fr"]
            },
            def3: {
                title : "SpearPhishing",
                description : "Repose généralement sur une usurpation de l’identité de l’expéditeur, et procède par ingénierie sociale forte afin de lier l’objet du courriel et le corps du message à l’activité de la personne ou de l’organisation ciblée",
                source : ["https://www.economie.gouv.fr/entreprises/hameconnage-spearphishing#:~:text=Entreprises%2C%20vous%20connaissez%20peut%2D%C3%AAtre,ne%20pas%20vous%20faire%20pi%C3%A9ger."]
            },
            def4: {
                title : "Vishing",
                description : "Une attaque par vishing est un type d’arnaque par hameçonnage effectuée par téléphone ou par message vocal. Leurs objectifs sont variés : accéder au compte bancaire d’un individu, voler des numéros de carte bancaire, voire pousser leurs victimes à leur transférer elles-mêmes de l’argent",
                source : ["https://n26.com/fr-fr/blog/vishing#:~:text=Le%20terme%20%C2%AB%20vishing%20%C2%BB%20est%20un,t%C3%A9l%C3%A9phone%20ou%20par%20message%20vocal."]
            },
            def5: {
                title : "Pharming",
                description : "Le pharming est un type d’attaque basé sur l’ingénierie social où l’attaquant va rediriger les utilisateurs internet qui veulent accéder à un site en particulier vers un autre site frauduleux. Le but de cette attaque est que les victimes qui croient être sur un site officiel divulguent des données tels que des mots de passe, des codes de cartes bancaires, etc …",
                source : ["https://www.kaspersky.com/resource-center/definitions/pharming"]
            },
            def6: {
                title : "Virus",
                description : "Un virus est un malware qui va venir se greffer à d’autres programmes appelés “Hôtes”, se répliquer et se propager d’un ordinateur à l’autre. Le virus se répand par tout les moyens de données numériques comme les périphériques de stockage externe ou les réseaux informatiques. Un virus peut avoir des effets plus ou moins graves allant de l’affichage d’une image à l’écran au contrôle de l’appareil.",
                source : ["https://www.proofpoint.com/fr/threat-reference/computer-virus"]
            },
            def7: {
                title : "Malware",
                description : "Le terme malware désigne tout type de logiciels malveillants, ils sont conçus pour nuire, exploiter ou contrôler un système informatique. Il existe un grand nombre de types de malware qui vont chacun infecter et perturber les appareils de manière différente. Un malware peut changer de forme ou de comportement afin de ne pas se faire détecter et supprimer.",
                source : ["https://fr.malwarebytes.com/malware/", "https://www.lebigdata.fr/malware-definition"]
            },
            def8: {
                title : "Ransomware",
                description : "Le but de ce type de malware est de bloquer l’accès à des appareils ou à des données afin de leur extorquer de l’argent. Un ransomware va commencer par chiffrer les données ou le système de la victime ce qui rendra le tout inaccessible ou inutilisable. Il y aura ensuite une demande de rançon en échange de la clé de déchiffrement.",
                source : ["https://www.altospam.com/glossaire/ransomware/", "https://fr.malwarebytes.com/ransomware/"]
            },
            def9: {
                title : "Spyware",
                description : "C’est un type de malware qui va infecter votre appareil, se dissimuler et collecter des informations vous concernant. Il peut surveiller et copier tout ce que vous saisissez, stockez, chargez et téléchargez. Il peut donc par définition avoir accès à toutes les données sensibles présentes sur vos appareils. Plus un spyware arrivera à rester invisible, plus il pourra nuire.",
                source : ["https://fiches-pratiques.silicon.fr/Thematique/cybersecurite-1338/FichePratique/Tout-ce-qu-il-faut-savoir-sur-le-spyware-365804.htm", "https://fr.malwarebytes.com/spyware/"]
            },
            def10: {
                title : "Worm",
                description : "C’est un malware qui va se propager d’appareils en appareils en utilisant le réseau internet, contrairement à un virus il n’a pas besoin de se lier à d’autres programmes pour se propager. Ils peuvent se propager eux-mêmes sans qu’il y ait besoin d’une intervention humaine. La plupart se contentent de monopoliser les ressources systèmes, mais certains portent un “payload” qui peuvent par exemple supprimer, ou chiffrer des données.",
                source : ["https://www.ssi.gouv.fr/entreprise/glossaire/v/#:~:text=Ver%20(Worm)&text=Un%20ver%20est%20un%20virus,de%20propagation%20reste%20le%20r%C3%A9seau.", "https://www.panoptinet.com/cybersecurite-decryptee/quest-ce-quun-ver-informatique-worm.html"]
            },
            def11: {
                title : "Adware",
                description : "Ce sont des malware qui vont afficher des publicités indésirables sous forme de bannières, de fenêtre pop-up, de liens, de barres d’outils, ou de modifications des paramètres de l’utilisateur. Ce type de malware a pour but de générer des revenus pour son développeur.  Un adware peut également servir de porte d’entrée à d’autres types de malware.",
                source : ["https://www.futura-sciences.com/tech/definitions/internet-adware-1857/", "https://www.avast.com/fr-fr/c-adware"]
            },
            def12: {
                title : "Botnets",
                description : "Ce sont des malware qui vont afficher des publicités indésirables sous forme de bannières, de fenêtre pop-up, de liens, de barres d’outils, ou de modifications des paramètres de l’utilisateur. Ce type de malware a pour but de générer des revenus pour son développeur.  Un adware peut également servir de porte d’entrée à d’autres types de malware.",
                source : ["https://www.futura-sciences.com/tech/definitions/internet-adware-1857/", "https://www.avast.com/fr-fr/c-adware"]
            },
            def13: {
                title : "Backdoor",
                description : "En Cybersecurity un Backdoor, ou porte dérobée en français, est une faille de sécurité laissée intentionnellement ou dû à une erreur de conception permet d'ouvrir une porte cachée dans un logiciel ou un système. Cette porte permet de contourner les mécanismes de sécurité ou d'authentification habituels.",
                source : ["https://www.ssi.gouv.fr/entreprise/glossaire/", "https://www.numerama.com/cyberguerre/1099466-quest-ce-quune-backdoor.html"]
            },
            def14: {
                title : "Social Engineering",
                description : "Le Social Engineering vise à manipuler une personne, la victime, afin de soustraire des informations du système informatique ou de s’y introduire. Le malfaiteur cherche à exercer une pression psychologique sur la victime, en invoquant l’urgence ou la confidentialité pour obtenir rapidement les informations souhaitées.",
                source : ["https://www.crowdstrike.fr/cybersecurity-101/zero-day-exploit/", "https://www.kaspersky.fr/resource-center/definitions/zero-day-exploit"]
            },
            def15: {
                title : "Zero-Day Exploit",
                description : "On parle d’attaque zero day lorsqu’un cybercriminel utilise un logiciel malveillant pour exploiter une vulnérabilité logicielle avant que le développeur du logiciel n’ait le temps de corriger la faille",
                source : ["https://www.crowdstrike.fr/cybersecurity-101/zero-day-exploit/", "https://www.lesassisesdelacybersecurite.com/Le-blog/Glossaire/Buffer-Overflow-Depassement-de-memoire-tampon#:~:text=Technique%20d'attaque%20populaire%20qui,%C3%A0%20une%20application%20l%C3%A9gitime%20vuln%C3%A9rable."]
            },
            def16: {
                title : "Buffer Overflow",
                description : "Un débordement de tampon est une condition anormale qui se produit lorsqu'un logiciel écrit des données dans un tampon jusqu'à ce qu'il déborde, provoquant l'écrasement des emplacements mémoire adjacents. Les pirates peuvent utiliser des débordements de tampon pour modifier la mémoire de l'ordinateur, interrompant ainsi l'exécution du programme ou prenant le contrôle du programme.",
                source : ["https://www.cloudflare.com/fr-fr/learning/security/threats/buffer-overflow/", "https://www.lesassisesdelacybersecurite.com/Le-blog/Glossaire/Buffer-Overflow-Depassement-de-memoire-tampon#:~:text=Technique%20d'attaque%20populaire%20qui,%C3%A0%20une%20application%20l%C3%A9gitime%20vuln%C3%A9rable."]
            },
            def17: {
                title : "Privilege Escalation",
                description : "L'escalade des privilèges se produit lorsqu'un utilisateur malveillant exploite un bogue, un défaut de conception ou une erreur de configuration dans une application ou un système d'exploitation pour obtenir un accès élevé à des ressources qui devraient normalement lui être inaccessibles. L'attaquant peut utiliser les nouveaux privilèges obtenus pour voler des données confidentielles, exécuter des commandes administratives ou déployer des logiciels malveillants.",
                source : ["https://www.invicti.com/blog/web-security/privilege-escalation/", "https://www.crowdstrike.fr/cybersecurity-101/privilege-escalation/"]
            },
            def18: {
                title : "Password Cracking",
                description : "Le craquage de mot de passe est le processus qui consiste à utiliser un programme d'application pour identifier un mot de passe inconnu ou oublié d'un ordinateur ou d'une ressource réseau. Il peut également être utilisé pour aider un acteur de la menace à obtenir un accès non autorisé à des ressources.",
                source : ["https://www.techtarget.com/searchsecurity/definition/password-cracker", "https://csrc.nist.gov/glossary/term/password_cracking"]
            },
            def19: {
                title : "Session Hijacking",
                description : "Les attaques de détournement de session impliquent l'exploitation de mécanismes de contrôle de session Web, qui sont généralement gérés par des jetons de session.",
                source : ["https://owasp.org/www-community/attacks/Session_hijacking_attack", "https://techno-skills.com/securite/cyber-securite-ethical-hacking/detournement-de-session-hijacking/"]
            },
            def20: {
                title : "DDoS (Distributed Denial of Service) - Déni de service distribué",
                description : "Attaque consistant à envoyer de multiples requêtes à la ressource Web pour fermer le site ou empêcher son fonctionnement.",
                source : ["https://www.kaspersky.fr/resource-center/threats/ddos-attacks", "https://www.cloudflare.com/fr-fr/learning/ddos/what-is-a-ddos-attack/"]
            },
            def21: {
                title : "Injection de code indirecte",
                description : "C’est une injection de données arbitraires, souvent écrites en JavaScript, HTML ou vbscript, souvent utilisée pour récupérer les Cookies.",
                source : ["https://www.certilience.fr/2019/09/vulnerabilite-xss-injection-de-code-indirecte-a-distance/", "https://www.ssi.gouv.fr/entreprise/glossaire/i/#:~:text=Injection%20de%20code%20indirecte%20(Cross%20Site%20Scripting%2C%20CSS%2C%20XSS)&text=Un%20utilisateur%20malveillant%20peut%20faire,ou%20des%20droits"]
            },
            def22: {
                title : "Address Spoofing - Usurpation d’identité",
                description : "L'usurpation d'adresse IP consiste à falsifier son adresse IP, généralement avec des nombres aléatoires, soit pour masquer l'identité de l'expéditeur, soit pour lancer une attaque DDoS réfléchie",
                source : ["https://www.imperva.com/learn/ddos/ip-spoofing/#:~:text=IP%20address%20spoofing%20is%20the,DDoS%20attack%2C%20as%20described%20below", "https://www.kaspersky.com/resource-center/threats/ip-spoofing"]
            },
            def23: {
                title : "Typosquatting",
                description : "Le typosquattage consiste à créer un nom de domaine proche de celui d’un site connu pour rediriger le client vers un site contenant un Malware par exemple, ce type d’attaque est basé sur les fautes d’orthographe courante dans les URLs des sites.",
                source : ["https://www.nameshield.com/ressources/lexique/typosquatting/#:~:text=Le%20typosquatting%20est%20une%20forme,de%20domaine%20g%C3%A9n%C3%A9ralement%20fort%20connu", "https://www.kaspersky.fr/resource-center/definitions/what-is-typosquatting"]
            },
            def24: {
                title : "Trojan Horse - Cheval de Troie",
                description : " Un cheval de Troie est un type de malware que l’utilisateur télécharge pensant que c’est une application utile pour lui mais qui va donner un accès parfois complet au SI.",
                source : ["https://csrc.nist.gov/glossary/term/trojan_horse", "https://www.fortinet.com/resources/cyberglossary/trojan-horse-virus", "https://www.crowdstrike.com/cybersecurity-101/malware/trojans/"]
            }
        },
        theme2 : {
            def1: {
                title : "Rootkit",
                description : "Un rootkit est un ensemble de logiciels qui permet à un intrus de prendre le contrôle d’un appareil ciblé. Il permet d’accéder à l’ordinateur à distance, en prendre le contrôle et voler des données. Lors de l’attaque du rootkit il va accorder un accès administrateur à distance à votre système d’exploitation tout en échappant à la détection, l’intrus dispose d’un contrôle absolu de l’appareil.",
                source : ["https://www.avast.com/fr-fr/c-rootkit"]
            },
            def2 : {
                title : "Steganography",
                description : "La stéganographie est la pratique de dissimuler des données qui doivent rester secrètes dans un message ou fichier ordinaire. Les données secrètes seront ensuite extraites à leur destination. La sténographie est souvent associée+ à du chiffrement afin de renforcer la sécurité.",
                source : ["https://actualiteinformatique.fr/definition/definition-steganography-ou-stenographie", "https://www.kaspersky.fr/resource-center/definitions/what-is-steganography"]
            },
            def3: {
                title : "Reverse Shell",
                description : "Le Reverse Shell est une technique qui permet à un attaquant situé dans un réseau distant d'accéder à une machine dans un réseau local, en établissant une connexion bidirectionnelle. L'idée est que la machine cible (la victime) se connecte à la machine de l'attaquant plutôt que l'inverse, d'où le terme reverse",
                source : ["https://www.linkedin.com/pulse/le-reverse-shell-comprendre-les-bases-de-lacc%C3%A8s-distant-winigah/?originalSubdomain=fr"]
            }
        },
        theme3 : {
            def1: {
                title : "Pentest",
                description : "Le pentest ou test d’intrusion est une méthode permettant d’évaluer la sécurité d’un système informatique. Pour ce faire, un individu va simuler une attaque afin de repérer les vulnérabilités et les failles de sécurités qui pourraient être utilisées par un véritable attaquant.",
                source : ["https://www.axido.fr/faille-de-securite-informatique/pentest/", "https://www.jedha.co/formation-cybersecurite/pentesting#:~:text=Le%20pentesting%20(abr%C3%A9viation%20de%20%22penetration,comportant%20comme%20un%20pirate%20informatique."]
            },
            def2 : {
                title : "Red Teaming",
                description : "C’est un test d’intrusion dans lequel on va venir tester les capacités de détection et de réponse d’une organisation. Le Red Teaming, contrairement aux pentests, ne va pas chercher autant de vulnérabilités que possible mais plutôt tester la façon dont l’équipe de sécurité réagit à diverses menaces. Les personnes qui pratiquent ce test peuvent également tenter de pénétrer physiquement au sein de l’organisation pour tenter d’accéder physiquement aux données et donc vérifier les mesures mises en place pour ce genre d’évènements",
                source : ["https://www.varonis.com/fr/blog/red-teaming#:~:text=Le%20Red%20Teaming%20est%20la,sein%20de%20votre%20propre%20organisation.", "https://www.pwc.com/mt/en/publications/technology/red-teaming-and-penetration-testing.html#:~:text=Red%20teaming%2C%20in%20contrast%20to,team%20responds%20to%20various%20threats."]
            },
            def3: {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def4 : {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        },
        theme4 : {
            def1: {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            },
            def2 : {
                title : "qsdqsqsdfqd",
                description : "qdsfqdsfqdsfqdfq",
                source : ["sqdvsqvq", "qsdsdfqdf"]
            }
        }
    }
};

export default DataExpertContent;