interface Type {
    [key : string]: {
        [key: string]: {
            [key: string]: {
                title: string;
                description: string;
                source: string[];
                img : string;
                level: string;
            };
        };
    };
};

const DataExpertContent : Type = {
    axe1 : {
        theme1 : {
            def1: {
                title : "SIEM",
                description : "Un logiciel SIEM (systèmes de gestion des évènements et des informations de sécurité) est un logiciel de défense qui va surveiller et analyser les évènements au sein du réseau afin de détecter les activités anormales et potentiellement dangereuses. Cela permet de garder une longueur d’avance sur les différentes menaces.",
                source : ["https://www.elastic.co/fr/what-is/siem", "https://www.microsoft.com/fr-fr/security/business/security-101/what-is-siem"],
                img : "https://www.logpoint.com/wp-content/uploads/2020/08/siem-at-a-glance.png",
                level : "expert"
            },
            def5: {
                title : "Honeypot",
                description : "C’est un outil en cybersécurité, le honeypot va imiter les cibles les plus courantes de cyber-attaques et cela va être utilisé pour attirer les cybercriminels, les détecter et donc détourner leur attention des cibles réelles.",
                source : ["https://ca-fr.norton.com/blog/iot/what-is-a-honeypot?lsModal=1"],
                img : "https://cybersecuritehome.files.wordpress.com/2018/12/honeypot.png",
                level : "expert"
            }
        },
        theme2 : {
            def2 : {
                title : "DNS",
                description : "le DNS aide à diriger le trafic sur Internet en connectant les noms de domaine à des serveurs Web réels.",
                source : ["https://www.nameshield.com/ressources/lexique/dns-domain-name-system/", "https://aws.amazon.com/fr/route53/what-is-dns/"],
                img : "https://academy.bit2me.com/wp-content/uploads/2019/05/49_DNS.png",
                level : "expert"
            },
            def3: {
                title : "Proxy Server",
                description : "Un serveur proxy est utilisé pour faire l'intermédiaire entre le site web et vous, il a plusieurs fonctionnalités tels que : Filtrer des sites non autorisés, accélérer la navigation, enregistrer l’historique des navigations, sécuriser le réseau local, conserver l’anonymat des adresses IP.",
                source : ["https://www.varonis.com/fr/blog/serveur-proxy#:~:text=Un%20serveur%20proxy%20joue%20le,Web%20sur%20lesquels%20ils%20naviguent.", "https://www.avast.com/fr-fr/c-what-is-a-proxy-server","https://primabord.eduscol.education.fr/qu-est-ce-qu-un-serveur-proxy"],
                img : "https://www.fortinet.com/resources/cyberglossary/proxy-server/_jcr_content/par/c05_container_copy_c/par/c28_image_copy_copy_.img.jpg/1625683502431.jpg",
                level : "expert"
            },
            def4: {
                title : "NAT (Network Address Translation)",
                description : "Le NAT, est utile pour les entreprises qui souhaitent regrouper toutes les IPs internes d’un groupe pour les convertir en une seule IP externe.",
                source : ["https://www.manageengine.com/fr/network-configuration-manager/configlets/what-is-nat.html", "https://www.lemagit.fr/definition/Network-Address-Translation#:~:text=Le%20Network%20Address%20Translation%20(ou,IP%20n%C3%A9cessaires%20%C3%A0%20une%20entreprise."],
                img : "https://www.downloads.netgear.com/files/answer_media/images/31493/1.png",
                level : "expert"
            },
            def6: {
                title : "Port Scanning",
                description : "Le scan de port est une technique souvent utilisée par les entreprises pour trouver les entrées matérielles de leurs systèmes informatiques, ils utilisent souvent 3 types de scan : le TCP scan, le SYN scan et le UDP scan pour les sécuriser et éviter des attaques.",
                source : ["https://nordvpn.com/fr/cybersecurity/glossary/port-scanning/", "https://www.avast.com/fr-fr/business/resources/what-is-port-scanning#pc"],
                img : "https://info.varonis.com/hs-fs/hubfs/Imported_Blog_Media/how-a-port-scanner-works.png?width=1240&height=948&name=how-a-port-scanner-works.png",
                level : "expert"
            }
        },
        theme3 : {
            def1: {
                title : "Sécurité des appareils IoT",
                description : "La sécurité des appareils IoT(Internet Of Things) consiste à protéger les appareils connectés qu’ils soient issus de notre domicile ou qu’ils soient publics en chiffrant la plupart de leurs systèmes.",
                source : [""],
                img : "https://www.veyan.fr/wp-content/uploads/2021/05/objets-connectes-domaine-sante.png",
                level : "expert"
            }
        },
        theme4 : {
            def2 : {
                title : "IAM",
                description : "une infrastructure de processus métier qui permet de gérer les identités électroniques ou numériques.",
                source : ["https://www.systancia.com/definition-identity-and-access-management-iam/#:~:text=La%20gestion%20des%20identit%C3%A9s%20et%20des%20acc%C3%A8s%20(IAM)%20d%C3%A9signe%20l,un%20utilisateur%20sur%20le%20r%C3%A9seau."],
                img : "https://www.royalcyber.com/wp-content/uploads/2019/07/IAM-Diagram-v2.png",
                level : "expert"
            }
        },
        theme6 : {
            def1: {
                title : "Risk Assessment",
                description : "Les évaluations des risques sont des processus systématiques et méthodiques qui ont pour but d’identifier, d’évaluer, et de hiérarchiser les risques liés à la sécurité des informations et des systèmes d’information.  Cela permet de déterminer un niveau de risque acceptable pour l’organisation. Elle contribue également à prioriser les actions de prévention, de protection et de réaction face aux cyberattaques, ainsi que de définir les mesures de contrôle et de suivi nécessaires pour assurer la conformité aux normes et aux réglementations en vigueur.",
                source : ["https://www.techtarget.com/searchsecurity/definition/risk-assessment", "https://www.oracle.com/fr/security/risk-assessment/"],
                img : "https://employeemanagement.co.uk/wp-content/uploads/2022/10/shutterstock_2102677933-scaled.jpg",
                level : "expert"
            },
            def2 : {
                title : "CVE",
                description : "L’acronyme CVE (Common vulnerabilities) correspond à une liste publique répertoriant des failles de sécurité.",
                source : ["https://fr.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures"],
                img : "https://assets.website-files.com/5ff66329429d880392f6cba2/61017d034fdab27710439466_What%20is%20a%20CVE%20Identifier.png",
                level : "expert"
            }
        },
        theme8 : {
            def3 : {
                title : "API Security (Application programming interface)",
                description : "Une interface de programmation d'application (API) est un moyen pour un logiciel d'interagir avec un autre logiciel. Si un programme ou une application possède une API, des clients externes peuvent lui demander des services. Types d’attaques fréquentes Exploitation des vulnérabilités, Attaques basées sur l’authentification, Erreur interne d’autorisation IAM, DDoS → Limitation du débit Exemple.",
                source : ["https://www.cloudflare.com/fr-fr/learning/security/api/what-is-api-security/"],
                img : "https://www.duocircle.com/wp-content/uploads/2021/11/API-Security.png",
                level : "expert"
            }
        },
        theme9 : {
            def1: {
                title : "Cloud",
                description : "Le cloud désigne un endroit où sont stockées des données dans des serveurs à travers le monde.",
                source : ["https://www.cnil.fr/fr/definition/cloud-computing#:~:text=Le%20cloud%20computing%20(en%20fran%C3%A7ais,et%20li%C3%A9s%20par%20un%20r%C3%A9seau.", "https://www.1min30.com/dictionnaire-du-web/cloud"],
                img : "https://www.ipe.fr/wp-content/uploads/2018/04/shutterstock_611605280-1.jpg",
                level : "expert"
            },
            def2 : {
                title : "IaaS (Infrastructure-as-a-Service)",
                description : "Service cloud payant qui offre des services de calculs, d’infrastructures et de stockage. vous permet de réduire la maintenance des centres de données locaux, de réaliser des économies sur les coûts matériels. Vous gérez le reste.",
                source : ["https://azure.microsoft.com/fr-fr/resources/cloud-computing-dictionary/what-is-iaas"],
                img : "https://hazelcast.com/wp-content/uploads/2021/12/infrastructure-as-a-service-iaas-800x435-1.png",
                level : "expert"
            },
            def3: {
                title : "PaaS (Platform-as-a-service)",
                description : "Ce service cloud payant permet d'éviter de gérer la logistiques, de détenir des serveurs physiques etc. Vous ne gérez que la partie application.",
                source : ["https://azure.microsoft.com/fr-fr/resources/cloud-computing-dictionary/what-is-paas#:~:text=Le%20PaaS%20permet%20d'%C3%A9viter,de%20d%C3%A9veloppement%20et%20autres%20ressources."],
                img : "https://hazelcast.com/wp-content/uploads/2021/12/infrastructure-as-a-service-iaas-800x435-1.png",
                level : "expert"
            },
            def4: {
                title : "SaaS (Software as a Service)",
                description : "Le SaaS est une solution cloud payante qui gère toute la logistique elle même, vous n’avez qu'à payer un abonnement pour avoir accès au service, site.",
                source : ["https://www.cegid.com/fr/faq/quest-ce-que-le-saas/#:~:text=Une%20solution%20dite%20SaaS%20(%C2%AB%20Software,aussi%20appel%C3%A9%20fournisseur%20de%20service.", "https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/logiciels-de-gestion-de-lentreprise/pourquoi-utiliser-0"],
                img : "https://hazelcast.com/wp-content/uploads/2021/12/infrastructure-as-a-service-iaas-800x435-1.png",
                level : "expert"
            },
            def5: {
                title : "SÉCURITÉ A.W.S",
                description : "AWS est un cloud avec plusieurs outils dont un CSPM ou encore un SOAR permettant une sécurisation optimale. Initier des flux d'orchestration, d'automatisation et de réponse de sécurité (SOAR) / Mener une gestion de la posture de sécurité dans le cloud (CSPM)",
                source : ["https://aws.amazon.com/fr/security/"],
                img : "https://www.checkpoint.com/tw/wp-content/uploads/aws-diagram.jpg",
                level : "expert"
            },
            def6: {
                title : "SÉCURITÉ Azure",
                description : "Azure est un cloud créé par Microsoft équipé du système microsoft defender, gateway, un DDoS protector et un Key Vault*. *Key Vault protéger les clés et autres secrets, et en garder le contrôle./ Étendre la protection contre les menaces à toutes les infrastructures.",
                source : ["https://azure.microsoft.com/fr-fr/explore/security"],
                img : "https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/_images/security/azure-security-standards.png",
                level : "expert"
            },
            def7: {
                title : "SÉCURITÉ G.C.P",
                description : "GCP est un cloud pour les entreprises avec un accès zéro confiance un Digital Risk Protection Mandiant.",
                source : ["https://cloud.google.com/security?hl=fr"],
                img : "https://storage.googleapis.com/gweb-cloudblog-publish/images/Data_Security_4.max-2200x2200.png",
                level : "expert"
            }
        },
    },
    axe2 : {
        theme1 : {
            def1: {
                title : "Cybersécurité",
                description : "La cybersécurité englobe tout les moyens qui permettent de protéger la confidentialité, l’intégrité, et la disponibilité de l’intégrité des données au sein d’une infrastructure numérique.",
                source : ["https://www.kaspersky.fr/resource-center/definitions/what-is-cyber-security", "https://www.ibm.com/fr-fr/topics/cybersecurity"],
                img : "https://incyber.org/wp-content/uploads/2023/02/iStock-1412282189.jpg",
                level : "expert"
            },
            def2 : {
                title : "Cyber-attaque",
                description : "Une cyber-attaque désigne une tentative intentionnelle visant à accéder à des données, des applications, ou d’autres actifs par l’intermédiaire d’un accès non-autorisé. Le but de cette opération est de voler, de modifier, de désactiver ou encore de détruire les actifs auxquels l’attaquant a eu accès. Cela peut être utilisé dans une approche éthique afin de mettre en évidence une faille de sécurité.",
                source : ["https://www.ibm.com/fr-fr/topics/cyber-attack", "https://www.oracle.com/fr/cloud/cyberattaque-securite-reseau-informatique/"],
                img : "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/glossaire/Celine/cyberattaque%20%20Oleksiin%20Adobe%20Stock.jpeg",
                level : "expert"
            },
                def3 : {
                title : "Cryptographie",
                description : "C’est une discipline qui inclut tous les moyens, méthodes et principes de transformation de données afin de garder le contenu de ces données cachées, qu’elles ne puissent pas être utilisées sans autorisations, et que toutes modifications ne passent pas inaperçues.",
                source : ["https://www.iso.org/fr/securite-de-l-information/cryptographie", "https://www.oracle.com/fr/security/qu-est-ce-que-la-cryptographie/#:~:text=En%20général%2C%20la%20cryptographie%20est,un%20message%20considéré%20comme%20confidentiel."],
                img : "https://cryptoast.fr/wp-content/uploads/2020/04/keys-cryptography.jpg",
                level : "expert"
            },
                def4 : {
                title : "Cryptologie",
                description : "La cryptologie est historiquement une science et plus particulièrement celle du secret et avait pour but d'assurer la confidentialité d'un message, mais elle s'est élargie de nos jours à assurer également l'authenticité et l'intégrité de celui-ci",
                source : ["https://www.cnil.fr/fr/comprendre-les-grands-principes-de-la-cryptologie-et-du-chiffrement#:~:text=Étymologiquement%2C%20la%20cryptologie%20est%20la,assurer%20la%20confidentialité%20des%20secrets."],
                img : "https://www.arcsi.fr/images/cryptologie.png",
                level : "expert"
            },
                def5 : {
                title : "Cybercriminalité",
                description : "La cybercriminalité est l’ensemble des actions illégales réalisées dans le cyberespace.",
                source : ["https://www.kaspersky.fr/resource-center/threats/cybercrime", "https://www.cairn.info/internet--9782130585480-page-94.htm"],
                img : "https://www.nameshield.com/wp-content/uploads/2021/05/Hacker-bro-red-Storyset-1.png",
                level : "expert"
            },
                def6 : {
                title : "Cyberdéfense",
                description : "La cyberdéfense est l’ensemble des techniques préventives ou de cas d’urgence pour défendre les serveurs ou domaines de professionnels ou particuliers.",
                source : ["https://www.lesassisesdelacybersecurite.com/Le-blog/Glossaire/Cybersecurite-et-Cyberdefense", "https://www.nato.int/cps/fr/natohq/topics_78170.htm"],
                img : "https://assets-global.website-files.com/601057763f823a0bf65a8071/614b05078139f5017b8b394e_Article%20cyberde%CC%81fense%20vitale.png",
                level : "expert"
            },
                def7 : {
                title : "Cyberespace",
                description : "Le cyberespace est l’ensemble des endroits où peuvent se situer les intérêts cyber (internet, Web, Serveur, Système d’exploitation, etc…)",
                source : ["https://langue-francaise.tv5monde.com/decouvrir/dictionnaire/c/cyberespace", "https://www.futura-sciences.com/tech/definitions/internet-cyberespace-3964/"],
                img : "https://major-prepa.com/wp-content/uploads/2021/12/image-1-e1641288521715.jpeg",
                level : "expert"
            },
                def8 : {
                title : "Cryptanalyse",
                description : "La cryptanalyse est la branche de la cryptographie qui étudie la manière de casser des codes et des cryptosystèmes. Elle développe des techniques pour casser les systèmes cryptographiques.",
                source : ["https://www.ssi.gouv.fr/entreprise/glossaire/c/", "https://developer.mozilla.org/fr/docs/Glossary/Cryptanalysis"],
                img : "https://homeomath2.imingo.net/isn/projetweb2018/groupe2/images/chiffrement.gif",
                level : "expert"
            },
                def9 : {
                title : "Cybersquatting",
                description : "Le [[Cybersquatting]], aussi appelé Domain Name Grabbing ou Accaparement de noms de domaine en français, est une menace en ligne qui implique l'enregistrement abusif de noms de domains dans le seul but est d'exploiter la notoriété de titulaires plus légitimes, dans l'objectif de faire demander une ranson ou de nuire à la réputation du titulaire légitimes.",
                source : ["https://www.ssi.gouv.fr/entreprise/glossaire/", "https://www.cabinetbouchara.com/lexique/cybersquattage-cybersquatting/#:~:text=Le%20cybersquattage%20(ou%20cybersquatting)%20d%C3%A9signe,sa%20notori%C3%A9t%C3%A9%20pr%C3%A9sente%20ou%20future."],
                img : "https://www.creads.com/wp-content/uploads/2021/05/cybersquatting1.jpg",
                level : "expert"
            }
        },
        theme2 : {
            def1: {
                title : "CTI",
                description : "Cyber Threat Intelligence est l'activité liée à la collecte d'informations sur les menaces ou les acteurs de la menace",
                source : ["https://tehtris.com/fr/blog/glossaire/cti-cyber-threat-intelligence#:~:text=D%C3%89FINITION%20%3A%20CTI%20(Cyber%20Threat%20Intelligence,les%20acteurs%20de%20la%20menace."],
                img : "https://www.cymune.com/assets/images/cyber-threat.png",
                level : "expert"
            }
        },
          theme3 : {
            def1: {
                title : "NIST cybersecurity framework",
                description : "Le cadre de cybersécurité du NIST aide les entreprises de toutes tailles à mieux comprendre, gérer et réduire leurs risques de cybersécurité et à protéger leurs réseaux et leurs données.",
                source : ["https://www.nist.gov/cyberframework"],
                img : "https://www.infosectrain.com/wp-content/uploads/2023/06/NIST-Cybersecurity-Framework-2.0-.jpg",
                level : "expert"
            }
        },
          theme4 : {
            def1: {
                title : "RGPD",
                description : "Oblige les entreprises à respecter un cadre juridique, à être transparente sur l’utilisation de leur données. Ce règlement Renforce les droits des personnes et détient le pouvoir de sanctionner quiconque ne le respectant pas Grand Public : responsabilise les organismes publics et privés qui traitent leurs données.",
                source : ["https://www.cnil.fr/fr/comprendre-le-rgpd/reglement-general-sur-la-protection-des-donnees-ce-qui-change-pour-les-professionnels", "https://www.cnil.fr/sites/cnil/files/atoms/files/cybersecurite_-_chiffres_2021.pdf"],
                img : "https://www.deshoulieres-avocats.com/wp-content/uploads/2022/06/mentions-obligatoires-rgpd-2.jpg",
                level : "expert"
            },
            def2 : {
                title : "Normes de Sécurité ISO 27001",
                description : "La norme ISO/IEC 27001 fournit aux entreprises de toutes tailles, quel que soit leur secteur d’activité, des lignes directrices pour l’établissement, la mise en œuvre, la tenue à jour et l’amélioration continue d’un SMSI",
                source : ["https://www.iso.org/fr/standard/27001"],
                img : "https://www.pqb.fr/template/userfiles/exigences%20ISO%2027001(3).jpg",
                level : "expert"
            }
        }
    },
    axe3 : {
        theme1 : {
            def1: {
                title : "MITM (Man In The Middle) - L’homme au milieu",
                description : "Est une forme d’attaque active dans laquelle une personne malveillante intercepte et modifie les données communiquées pour aboutir à un objectif précis (se faire passer pour vous)",
                source : ["https://csrc.nist.gov"],
                img : "https://cdn.invicti.com/app/uploads/2022/06/28121128/man-in-the-middle-attack-how-avoid.png",
                level : "expert"
            },
            def2 : {
                title : "Phishing - Hameçonnage",
                description : "Ce type d’attaque vise à obtenir du destinataire d’un courriel d’apparence légitime qu’il transmette ses coordonnées bancaires ou ses identifiants de connexion à des services financiers, afin de lui dérober de l’argent.",
                source : ["https://www.ssi.gouv.fr", "https://www.cnil.fr"],
                img : "https://blog.nameshield.com/fr/wp-content/uploads/sites/3/2021/09/Phishing-Hameconnage-source-mohamed_hassan-via-Pixabay.png",
                level : "expert"
            },
            def3: {
                title : "SpearPhishing",
                description : "Repose généralement sur une usurpation de l’identité de l’expéditeur, et procède par ingénierie sociale forte afin de lier l’objet du courriel et le corps du message à l’activité de la personne ou de l’organisation ciblée",
                source : ["https://www.economie.gouv.fr/entreprises/hameconnage-spearphishing#:~:text=Entreprises%2C%20vous%20connaissez%20peut%2D%C3%AAtre,ne%20pas%20vous%20faire%20pi%C3%A9ger."],
                img : "https://asset.reliancebank.com.au/images/phishing-vs-spear-phishing.png",
                level : "expert"
            },
            def4: {
                title : "Vishing",
                description : "Une attaque par vishing est un type d’arnaque par hameçonnage effectuée par téléphone ou par message vocal. Leurs objectifs sont variés : accéder au compte bancaire d’un individu, voler des numéros de carte bancaire, voire pousser leurs victimes à leur transférer elles-mêmes de l’argent",
                source : ["https://n26.com/fr-fr/blog/vishing#:~:text=Le%20terme%20%C2%AB%20vishing%20%C2%BB%20est%20un,t%C3%A9l%C3%A9phone%20ou%20par%20message%20vocal."],
                img : "https://images.spiceworks.com/wp-content/uploads/2022/05/09122828/Vishing-Attack-Mechanism.png",
                level : "expert"
            },
            def5: {
                title : "Pharming",
                description : "Le pharming est un type d’attaque basé sur l’ingénierie social où l’attaquant va rediriger les utilisateurs internet qui veulent accéder à un site en particulier vers un autre site frauduleux. Le but de cette attaque est que les victimes qui croient être sur un site officiel divulguent des données tels que des mots de passe, des codes de cartes bancaires, etc …",
                source : ["https://www.kaspersky.com/resource-center/definitions/pharming"],
                img : "https://24907070.fs1.hubspotusercontent-eu1.net/hubfs/24907070/Pharming_What_it_is_And_how_to_prevent_it.png",
                level : "expert"
            },
            def6: {
                title : "Virus",
                description : "Un virus est un malware qui va venir se greffer à d’autres programmes appelés “Hôtes”, se répliquer et se propager d’un ordinateur à l’autre. Le virus se répand par tout les moyens de données numériques comme les périphériques de stockage externe ou les réseaux informatiques. Un virus peut avoir des effets plus ou moins graves allant de l’affichage d’une image à l’écran au contrôle de l’appareil.",
                source : ["https://www.proofpoint.com/fr/threat-reference/computer-virus"],
                img : "https://media.npr.org/assets/img/2012/06/02/istock_000015382653small-0d7eb96755347323e2e811e95b757d512c5352de-s1100-c50.jpg",
                level : "expert"
            },
            def7: {
                title : "Malware",
                description : "Le terme malware désigne tout type de logiciels malveillants, ils sont conçus pour nuire, exploiter ou contrôler un système informatique. Il existe un grand nombre de types de malware qui vont chacun infecter et perturber les appareils de manière différente. Un malware peut changer de forme ou de comportement afin de ne pas se faire détecter et supprimer.",
                source : ["https://fr.malwarebytes.com/malware/", "https://www.lebigdata.fr/malware-definition"],
                img : "https://www.axido.fr/wp-content/uploads/2023/03/Images-blog-6.webp",
                level : "expert"
            },
            def8: {
                title : "Ransomware",
                description : "Le but de ce type de malware est de bloquer l’accès à des appareils ou à des données afin de leur extorquer de l’argent. Un ransomware va commencer par chiffrer les données ou le système de la victime ce qui rendra le tout inaccessible ou inutilisable. Il y aura ensuite une demande de rançon en échange de la clé de déchiffrement.",
                source : ["https://www.altospam.com/glossaire/ransomware/", "https://fr.malwarebytes.com/ransomware/"],
                img : "https://www.globalsign.com/application/files/3416/1644/1850/iStock-1022030450.jpg",
                level : "expert"
            },
            def9: {
                title : "Spyware",
                description : "C’est un type de malware qui va infecter votre appareil, se dissimuler et collecter des informations vous concernant. Il peut surveiller et copier tout ce que vous saisissez, stockez, chargez et téléchargez. Il peut donc par définition avoir accès à toutes les données sensibles présentes sur vos appareils. Plus un spyware arrivera à rester invisible, plus il pourra nuire.",
                source : ["https://fiches-pratiques.silicon.fr/Thematique/cybersecurite-1338/FichePratique/Tout-ce-qu-il-faut-savoir-sur-le-spyware-365804.htm", "https://fr.malwarebytes.com/spyware/"],
                img : "https://cdn.le-vpn.com/fr/wp-content/uploads/2019/12/What-is-spyware-1200x628.png",
                level : "expert"
            },
            def10: {
                title : "Worm",
                description : "C’est un malware qui va se propager d’appareils en appareils en utilisant le réseau internet, contrairement à un virus il n’a pas besoin de se lier à d’autres programmes pour se propager. Ils peuvent se propager eux-mêmes sans qu’il y ait besoin d’une intervention humaine. La plupart se contentent de monopoliser les ressources systèmes, mais certains portent un “payload” qui peuvent par exemple supprimer, ou chiffrer des données.",
                source : ["https://www.ssi.gouv.fr/entreprise/glossaire/v/#:~:text=Ver%20(Worm)&text=Un%20ver%20est%20un%20virus,de%20propagation%20reste%20le%20r%C3%A9seau.", "https://www.panoptinet.com/cybersecurite-decryptee/quest-ce-quun-ver-informatique-worm.html"],
                img : "https://cyberhoot.com/wp-content/uploads/2019/12/wormcybersecurity-1024x635.jpg",
                level : "expert"
            },
            def11: {
                title : "Adware",
                description : "Ce sont des malware qui vont afficher des publicités indésirables sous forme de bannières, de fenêtre pop-up, de liens, de barres d’outils, ou de modifications des paramètres de l’utilisateur. Ce type de malware a pour but de générer des revenus pour son développeur.  Un adware peut également servir de porte d’entrée à d’autres types de malware.",
                source : ["https://www.futura-sciences.com/tech/definitions/internet-adware-1857/", "https://www.avast.com/fr-fr/c-adware"],
                img : "https://sesame-mag.fr/wp-content/uploads/2023/02/adware-publicites-intempestives-sesame-informatique.png",
                level : "expert"
            },
            def12: {
                title : "Botnets",
                description : "Ce sont des malware qui vont afficher des publicités indésirables sous forme de bannières, de fenêtre pop-up, de liens, de barres d’outils, ou de modifications des paramètres de l’utilisateur. Ce type de malware a pour but de générer des revenus pour son développeur.  Un adware peut également servir de porte d’entrée à d’autres types de malware.",
                source : ["https://www.futura-sciences.com/tech/definitions/internet-adware-1857/", "https://www.avast.com/fr-fr/c-adware"],
                img : "https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-botnet/ddos-botnet-star-network-topology.png",
                level : "expert"
            },
            def13: {
                title : "Backdoor",
                description : "En Cybersecurity un Backdoor, ou porte dérobée en français, est une faille de sécurité laissée intentionnellement ou dû à une erreur de conception permet d'ouvrir une porte cachée dans un logiciel ou un système. Cette porte permet de contourner les mécanismes de sécurité ou d'authentification habituels.",
                source : ["https://www.ssi.gouv.fr/entreprise/glossaire/", "https://www.numerama.com/cyberguerre/1099466-quest-ce-quune-backdoor.html"],
                img : "https://documents.trendmicro.com/images/targeted_attack.png",
                level : "expert"
            },
            def14: {
                title : "Social Engineering",
                description : "Le Social Engineering vise à manipuler une personne, la victime, afin de soustraire des informations du système informatique ou de s’y introduire. Le malfaiteur cherche à exercer une pression psychologique sur la victime, en invoquant l’urgence ou la confidentialité pour obtenir rapidement les informations souhaitées.",
                source : ["https://www.crowdstrike.fr/cybersecurity-101/zero-day-exploit/", "https://www.kaspersky.fr/resource-center/definitions/zero-day-exploit"],
                img : "https://cheapsslsecurity.com/blog/wp-content/uploads/2022/05/social-engineering-attacks-1.jpg",
                level : "expert"
            },
            def15: {
                title : "Zero-Day Exploit",
                description : "On parle d’attaque zero day lorsqu’un cybercriminel utilise un logiciel malveillant pour exploiter une vulnérabilité logicielle avant que le développeur du logiciel n’ait le temps de corriger la faille",
                source : ["https://www.crowdstrike.fr/cybersecurity-101/zero-day-exploit/", "https://www.lesassisesdelacybersecurite.com/Le-blog/Glossaire/Buffer-Overflow-Depassement-de-memoire-tampon#:~:text=Technique%20d'attaque%20populaire%20qui,%C3%A0%20une%20application%20l%C3%A9gitime%20vuln%C3%A9rable."],
                img : "https://cloudkul.com/blog/wp-content/uploads/2022/05/zero-day-1.jpg",
                level : "expert"
            },
            def16: {
                title : "Buffer Overflow",
                description : "Un débordement de tampon est une condition anormale qui se produit lorsqu'un logiciel écrit des données dans un tampon jusqu'à ce qu'il déborde, provoquant l'écrasement des emplacements mémoire adjacents. Les pirates peuvent utiliser des débordements de tampon pour modifier la mémoire de l'ordinateur, interrompant ainsi l'exécution du programme ou prenant le contrôle du programme.",
                source : ["https://www.cloudflare.com/fr-fr/learning/security/threats/buffer-overflow/", "https://www.lesassisesdelacybersecurite.com/Le-blog/Glossaire/Buffer-Overflow-Depassement-de-memoire-tampon#:~:text=Technique%20d'attaque%20populaire%20qui,%C3%A0%20une%20application%20l%C3%A9gitime%20vuln%C3%A9rable."],
                img : "data:image/png;base64,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",
                level : "expert"
            },
            def17: {
                title : "Privilege Escalation",
                description : "L'escalade des privilèges se produit lorsqu'un utilisateur malveillant exploite un bogue, un défaut de conception ou une erreur de configuration dans une application ou un système d'exploitation pour obtenir un accès élevé à des ressources qui devraient normalement lui être inaccessibles. L'attaquant peut utiliser les nouveaux privilèges obtenus pour voler des données confidentielles, exécuter des commandes administratives ou déployer des logiciels malveillants.",
                source : ["https://www.invicti.com/blog/web-security/privilege-escalation/", "https://www.crowdstrike.fr/cybersecurity-101/privilege-escalation/"],
                img : "https://purplesec.us/wp-content/uploads/2019/08/Privilege-Escalation-Attacks.png",
                level : "expert"
            },
            def18: {
                title : "Password Cracking",
                description : "Le craquage de mot de passe est le processus qui consiste à utiliser un programme d'application pour identifier un mot de passe inconnu ou oublié d'un ordinateur ou d'une ressource réseau. Il peut également être utilisé pour aider un acteur de la menace à obtenir un accès non autorisé à des ressources.",
                source : ["https://www.techtarget.com/searchsecurity/definition/password-cracker", "https://csrc.nist.gov/glossary/term/password_cracking"],
                img : "https://www.keepersecurity.com/blog/wp-content/uploads/2016/09/social-5.jpg",
                level : "expert"
            },
            def19: {
                title : "Session Hijacking",
                description : "Les attaques de détournement de session impliquent l'exploitation de mécanismes de contrôle de session Web, qui sont généralement gérés par des jetons de session.",
                source : ["https://owasp.org/www-community/attacks/Session_hijacking_attack", "https://techno-skills.com/securite/cyber-securite-ethical-hacking/detournement-de-session-hijacking/"],
                img : "https://media.geeksforgeeks.org/wp-content/uploads/20220721124248/UDPHijacking2.png",
                level : "expert"
            },
            def20: {
                title : "DDoS",
                description : "Attaque consistant à envoyer de multiples requêtes à la ressource Web pour fermer le site ou empêcher son fonctionnement.",
                source : ["https://www.kaspersky.fr/resource-center/threats/ddos-attacks", "https://www.cloudflare.com/fr-fr/learning/ddos/what-is-a-ddos-attack/"],
                img : "https://cf-assets.www.cloudflare.com/slt3lc6tev37/3jlyZeWRy9eBz3tyEk9mxA/96eab064524495e8f6b2647f1f7b9d60/application_layer_ddos_example.png",
                level : "expert"
            },
            def21: {
                title : "Injection de code indirecte",
                description : "C’est une injection de données arbitraires, souvent écrites en JavaScript, HTML ou vbscript, souvent utilisée pour récupérer les Cookies.",
                source : ["https://www.certilience.fr/2019/09/vulnerabilite-xss-injection-de-code-indirecte-a-distance/", "https://www.ssi.gouv.fr/entreprise/glossaire/i/#:~:text=Injection%20de%20code%20indirecte%20(Cross%20Site%20Scripting%2C%20CSS%2C%20XSS)&text=Un%20utilisateur%20malveillant%20peut%20faire,ou%20des%20droits"],
                img : "https://simseo.fr/wp-content/uploads/2023/03/1678432813_Les-attaques-dinjection-rapide-indirecte-pourraient-bouleverser-les-chatbots.jpg",
                level : "expert"
            },
            def22: {
                title : "Address Spoofing - Usurpation d’identité",
                description : "L'usurpation d'adresse IP consiste à falsifier son adresse IP, généralement avec des nombres aléatoires, soit pour masquer l'identité de l'expéditeur, soit pour lancer une attaque DDoS réfléchie",
                source : ["https://www.imperva.com/learn/ddos/ip-spoofing/#:~:text=IP%20address%20spoofing%20is%20the,DDoS%20attack%2C%20as%20described%20below", "https://www.kaspersky.com/resource-center/threats/ip-spoofing"],
                img : "https://powerdmarc.com/wp-content/uploads/2022/05/Email-Spoofing-Security.jpg",
                level : "expert"
            },
            def23: {
                title : "Typosquatting",
                description : "Le typosquattage consiste à créer un nom de domaine proche de celui d’un site connu pour rediriger le client vers un site contenant un Malware par exemple, ce type d’attaque est basé sur les fautes d’orthographe courante dans les URLs des sites.",
                source : ["https://www.nameshield.com/ressources/lexique/typosquatting/#:~:text=Le%20typosquatting%20est%20une%20forme,de%20domaine%20g%C3%A9n%C3%A9ralement%20fort%20connu", "https://www.kaspersky.fr/resource-center/definitions/what-is-typosquatting"],
                img : "https://www.livelaw.in/h-upload/2022/06/07/1600x960_420935-typosquatting.jpg",
                level : "expert"
            },
            def24: {
                title : "Trojan Horse",
                description : " Un cheval de Troie est un type de malware que l’utilisateur télécharge pensant que c’est une application utile pour lui mais qui va donner un accès parfois complet au SI.",
                source : ["https://csrc.nist.gov/glossary/term/trojan_horse", "https://www.fortinet.com/resources/cyberglossary/trojan-horse-virus", "https://www.crowdstrike.com/cybersecurity-101/malware/trojans/"],
                img : "https://www.secureverifyconnect.info/sites/default/files/2022-02/34_Trojan-horse_R-01.png",
                level : "expert"
            }
        },
        theme2 : {
            def1: {
                title : "Rootkit",
                description : "Un rootkit est un ensemble de logiciels qui permet à un intrus de prendre le contrôle d’un appareil ciblé. Il permet d’accéder à l’ordinateur à distance, en prendre le contrôle et voler des données. Lors de l’attaque du rootkit il va accorder un accès administrateur à distance à votre système d’exploitation tout en échappant à la détection, l’intrus dispose d’un contrôle absolu de l’appareil.",
                source : ["https://www.avast.com/fr-fr/c-rootkit"],
                img : "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2023/05/Rootkit-Desktop-thumbnail.jpg",
                level : "expert"
            },
            def2 : {
                title : "Steganography",
                description : "La stéganographie est la pratique de dissimuler des données qui doivent rester secrètes dans un message ou fichier ordinaire. Les données secrètes seront ensuite extraites à leur destination. La sténographie est souvent associée+ à du chiffrement afin de renforcer la sécurité.",
                source : ["https://actualiteinformatique.fr/definition/definition-steganography-ou-stenographie", "https://www.kaspersky.fr/resource-center/definitions/what-is-steganography"],
                img : "https://miro.medium.com/v2/resize:fit:1358/1*dQyfOpFWmSxrmdOcQgW6OQ.jpeg",
                level : "expert"
            },
            def3: {
                title : "Reverse Shell",
                description : "Le Reverse Shell est une technique qui permet à un attaquant situé dans un réseau distant d'accéder à une machine dans un réseau local, en établissant une connexion bidirectionnelle. L'idée est que la machine cible (la victime) se connecte à la machine de l'attaquant plutôt que l'inverse, d'où le terme reverse",
                source : ["https://www.linkedin.com/pulse/le-reverse-shell-comprendre-les-bases-de-lacc%C3%A8s-distant-winigah/?originalSubdomain=fr"],
                img : "https://blog.finxter.com/wp-content/uploads/2020/07/reverseshell-1024x576.jpg",
                level : "expert"
            }
        },
        theme3 : {
            def1: {
                title : "Pentest",
                description : "Le pentest ou test d’intrusion est une méthode permettant d’évaluer la sécurité d’un système informatique. Pour ce faire, un individu va simuler une attaque afin de repérer les vulnérabilités et les failles de sécurités qui pourraient être utilisées par un véritable attaquant.",
                source : ["https://www.axido.fr/faille-de-securite-informatique/pentest/", "https://www.jedha.co/formation-cybersecurite/pentesting#:~:text=Le%20pentesting%20(abr%C3%A9viation%20de%20%22penetration,comportant%20comme%20un%20pirate%20informatique."],
                img : "https://plextrac.com/wp-content/uploads/2022/04/10-steps-pentest-report-1024x367.png",
                level : "expert"
            },
            def2 : {
                title : "Red Teaming",
                description : "C’est un test d’intrusion dans lequel on va venir tester les capacités de détection et de réponse d’une organisation. Le Red Teaming, contrairement aux pentests, ne va pas chercher autant de vulnérabilités que possible mais plutôt tester la façon dont l’équipe de sécurité réagit à diverses menaces. Les personnes qui pratiquent ce test peuvent également tenter de pénétrer physiquement au sein de l’organisation pour tenter d’accéder physiquement aux données et donc vérifier les mesures mises en place pour ce genre d’évènements",
                source : ["https://www.varonis.com/fr/blog/red-teaming#:~:text=Le%20Red%20Teaming%20est%20la,sein%20de%20votre%20propre%20organisation.", "https://www.pwc.com/mt/en/publications/technology/red-teaming-and-penetration-testing.html#:~:text=Red%20teaming%2C%20in%20contrast%20to,team%20responds%20to%20various%20threats."],
                img : "https://www.crowdstrike.com/wp-content/uploads/2020/09/cs-101-red-team-blue-team-defined.jpg",
                level : "expert"
            }
        }
    }
};

export default DataExpertContent;