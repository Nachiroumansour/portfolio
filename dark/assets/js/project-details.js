// Données des projets
const projectsData = {
    dialloconciergerie: {
        title: "Di'alloconciergerie",
        subtitle: "Agence de voyage et tourisme au Maroc",
        image: "assets/imgs/works/1.png",
        gallery: [
            "assets/imgs/works/project/dialloconciergerie/1.png",
            "assets/imgs/works/project/dialloconciergerie/2.png"
        ],
        date: "2024",
        category: "WordPress",
        client: "Di'alloconciergerie",
        website: "https://di-alloconciergerie.com/",
        description: "Développement d'un site web complet pour une agence de voyage spécialisée dans le tourisme au Maroc. Le site présente les destinations, services de conciergerie d'élite et packages de voyage.",
        features: [
            "Design responsive et moderne",
            "Système de réservation intégré",
            "Galerie photos interactive",
            "Blog et articles de voyage",
            "Optimisation SEO avancée",
            "Interface multilingue"
        ],
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
        challenges: "Création d'une expérience utilisateur immersive pour présenter les merveilles du Maroc tout en intégrant un système de réservation fonctionnel.",
        solution: "Développement d'un thème WordPress personnalisé avec des fonctionnalités avancées de réservation et une présentation visuelle attrayante des destinations."
    },
    sm10: {
        title: "SM10 Portal",
        subtitle: "Portail de branding et identité visuelle",
        image: "assets/imgs/works/2.png",
        gallery: [
            "assets/imgs/works/project/sm10/1.png",
            "assets/imgs/works/project/sm10/2.png"
        ],
        date: "2024",
        category: "React",
        client: "SM10",
        website: "https://sm-10.com/",
        description: "Développement d'un portail web moderne pour la marque SM10, axé sur le branding et l'identité visuelle avec une approche minimaliste et élégante.",
        features: [
            "Interface utilisateur moderne",
            "Animations fluides et interactives",
            "Design system cohérent",
            "Performance optimisée",
            "Architecture modulaire",
            "Responsive design"
        ],
        technologies: ["React", "JavaScript ES6+", "CSS3", "HTML5", "Webpack", "Node.js"],
        challenges: "Créer une identité visuelle forte et cohérente tout en maintenant une expérience utilisateur fluide et performante.",
        solution: "Utilisation de React avec une architecture componentisée et un design system personnalisé pour assurer la cohérence visuelle."
    },
    sm10store: {
        title: "SM10 Store",
        subtitle: "Design UI/UX d'une plateforme e-commerce",
        image: "assets/imgs/works/3.png",
        gallery: [
            "assets/imgs/works/project/store/1.png",
            "assets/imgs/works/project/store/2.png"
        ],
        date: "2024",
        category: "UI/UX Design",
        client: "SM10",
        website: "https://www.figma.com/design/mjzdxh3Wne1kIPQ4Rh0Kh1/SM10-STORE",
        description: "Conception complète de l'interface utilisateur pour une plateforme e-commerce moderne, avec un focus sur l'expérience d'achat et la conversion.",
        features: [
            "Design system complet",
            "Prototypage interactif",
            "Parcours utilisateur optimisé",
            "Interface mobile-first",
            "Composants réutilisables",
            "Tests d'utilisabilité"
        ],
        technologies: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing"],
        challenges: "Concevoir une expérience d'achat intuitive qui maximise la conversion tout en respectant l'identité de marque SM10.",
        solution: "Approche centrée utilisateur avec des tests itératifs et un design system modulaire pour une expérience cohérente."
    },
    livelink: {
        title: "LiveLink",
        subtitle: "Application mobile de gestion commerciale",
        image: "assets/imgs/works/4.png",
        gallery: [
            "assets/imgs/works/project/livelink/1.png",
            "assets/imgs/works/project/livelink/2.png"
        ],
        date: "2024",
        category: "React Native",
        client: "LiveLink",
        website: "https://space.livelink.store/",
        description: "Développement d'une application mobile complète pour la gestion commerciale, permettant aux vendeurs de gérer leurs boutiques et commandes en temps réel.",
        features: [
            "Interface native iOS/Android",
            "Gestion des commandes en temps réel",
            "Tableau de bord analytique",
            "Notifications push",
            "Mode hors-ligne",
            "Synchronisation cloud"
        ],
        technologies: ["React Native", "JavaScript", "Redux", "Firebase", "Node.js", "MongoDB"],
        challenges: "Créer une application performante qui fonctionne de manière fluide sur mobile tout en gérant des données complexes en temps réel.",
        solution: "Architecture React Native optimisée avec gestion d'état Redux et synchronisation en temps réel via Firebase."
    }
};

// Fonction pour obtenir les paramètres URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Fonction pour charger le contenu du projet
function loadProjectContent() {
    const projectId = getUrlParameter('project');
    const project = projectsData[projectId];
    
    if (!project) {
        // Projet par défaut si aucun paramètre
        document.getElementById('project-content').innerHTML = `
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2>Projet non trouvé</h2>
                    <p>Le projet demandé n'existe pas.</p>
                    <a href="home.html" class="butn butn-md bg-main text-light radius-5 mt-30">
                        <span>Retour à l'accueil</span>
                    </a>
                </div>
            </div>
        `;
        return;
    }

    // Mise à jour du titre de la page
    document.title = `${project.title} - Mansour Nachirou`;

    // Génération du contenu
    const content = `
        <div class="row justify-content-center">
            <div class="col-lg-11">
                <div class="img mb-80">
                    <img src="${project.image}" alt="${project.title}" class="radius-5">
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="cont md-mb50">
                            <h3 class="mb-15 fw-500">${project.title}</h3>
                            <p class="mb-20 opacity-8">${project.subtitle}</p>
                            <p>${project.description}</p>
                            
                            <div class="mt-40">
                                <h6 class="mb-20 line-height-28">Défis du projet</h6>
                                <p class="mb-30">${project.challenges}</p>
                                
                                <h6 class="mb-20 line-height-28">Solution apportée</h6>
                                <p class="mb-30">${project.solution}</p>
                            </div>

                            <div class="mt-40">
                                <h6 class="mb-20">Fonctionnalités clés</h6>
                                <ul class="rest list-arrow">
                                    ${project.features.map(feature => `
                                        <li class="mb-15">
                                            <span class="icon">
                                                <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="#2196F3"></path>
                                                </svg>
                                            </span>
                                            <h6 class="inline fz-16">${feature}</h6>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <div class="mt-40">
                                <h6 class="mb-20">Technologies utilisées</h6>
                                <div class="d-flex flex-wrap">
                                    ${project.technologies.map(tech => `
                                        <span class="badge badge-outline main-color mr-10 mb-10 px-15 py-5">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="info sub-bg" id="sticky_item">
                            <ul>
                                <li class="mb-30">
                                    <span class="sub-title"><i class="far fa-calendar-alt mr-10"></i> Date :</span>
                                    <p>${project.date}</p>
                                </li>
                                <li class="mb-30">
                                    <span class="sub-title"><i class="fas fa-list-ul mr-10"></i> Catégorie :</span>
                                    <p>${project.category}</p>
                                </li>
                                <li class="mb-30">
                                    <span class="sub-title"><i class="far fa-user mr-10"></i> Client :</span>
                                    <p>${project.client}</p>
                                </li>
                                <li class="mb-30">
                                    <span class="sub-title"><i class="fas fa-globe mr-10"></i> Site web :</span>
                                    <p><a href="${project.website}" target="_blank" class="main-color">Voir le projet</a></p>
                                </li>
                                <li>
                                    <a href="${project.website}" target="_blank" class="butn butn-md bg-main text-light radius-5 w-100">
                                        <span>Visiter le site</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('project-content').innerHTML = content;

    // Met à jour les deux images du bas en fonction du projet (avec cache-busting et fallback)
    try {
        const setImg = (el, src, fallback, alt) => {
            if (!el) return;
            el.onerror = () => { el.onerror = null; el.src = fallback; };
            el.alt = alt;
            el.classList.add('radius-5');
            // cache-busting pour éviter les anciennes images
            const bust = (s) => s ? `${s}?v=${Date.now()}` : s;
            el.src = bust(src) || fallback;
        };

        const img1 = document.getElementById('project-img-1');
        const img2 = document.getElementById('project-img-2');
        const gallery = (project && project.gallery && project.gallery.length) ? project.gallery : [project.image, project.image];

        setImg(img1, gallery[0], project.image, `${project.title} - image 1`);
        setImg(img2, gallery[1] || gallery[0], project.image, `${project.title} - image 2`);
    } catch (e) {
        // silencieux en cas d'absence des éléments
    }
}

// Charger le contenu au chargement de la page
document.addEventListener('DOMContentLoaded', loadProjectContent);
