// Données des articles de blog
// Chaque article a un slug unique qui sert d'identifiant dans l'URL (?post=slug)
const BLOG_POSTS = [
  {
    slug: 'tendances-ia-2025',
    title: "Tendances IA en 2025: agents, RAG et copilotes",
    subtitle: "Panorama des usages concrets de l'IA générative en production",
    date: '2025-09-18',
    author: 'Mansour Nachirou',
    tags: ['IA', 'GenAI', 'RAG', 'LLM'],
    category: 'Intelligence Artificielle',
    cover: 'https://images.unsplash.com/photo-1686191127312-6aa8e58b2f03?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1686191126922-2e7d3c8b2e42?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop'
    ],
    excerpt:
      "Tour d'horizon des architectures et bonnes pratiques pour déployer des copilotes en environnement réel (RAG, observabilité, privacy).",
    content: [
      "L'IA générative passe du POC à la production. Les entreprises industrialisent des agents autonomes et des copilotes métiers.",
      "Les stacks RAG (Retrieval Augmented Generation) se généralisent: vector DB, orchestration d'appels modèle, et garde-fous.",
      "Côté ops: traçabilité, évaluation continue, et réduction des coûts via modèles ouverts et quantifiés (GGUF, vLLM).",
    ],
  },
  {
    slug: 'nextjs-15-serveur-actions',
    title: 'Next.js 15: Server Actions, Turbopack et performances',
    subtitle: 'Exploiter au mieux App Router et les Server Actions',
    date: '2025-08-10',
    author: 'Mansour Nachirou',
    tags: ['Next.js', 'React', 'Web'],
    category: 'Frontend',
    cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
    ],
    excerpt:
      "Retour d'expérience sur App Router, les Server Actions et l'optimisation des temps TTFB/LCP.",
    content: [
      "Les Server Actions simplifient la mutation côté serveur sans API intermédiaire.",
      "App Router apporte un streaming natif avec Suspense pour de meilleures perfs perçues.",
      "Turbopack accélère le dev server et améliore l'expérience DX.",
    ],
  },
  {
    slug: 'bonnes-pratiques-react-performance',
    title: 'Bonnes pratiques de performance React',
    subtitle: 'Mémo: memo, useMemo, useCallback, Suspense, code splitting',
    date: '2025-07-02',
    author: 'Mansour Nachirou',
    tags: ['React', 'Performance'],
    category: 'Frontend',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop'
    ],
    excerpt:
      "Petites optimisations cumulées pour garder une UI fluide sur mobile.",
    content: [
      "Stabiliser les props des composants enfants limite les re-render inutiles.",
      "Préférez lazy + Suspense pour découper le bundle.",
      "Mesurez avec React Profiler et Lighthouse, pas à l'instinct.",
    ],
  },
  {
    slug: 'devops-ci-cd-docker',
    title: 'DevOps moderne: CI/CD, Docker et observabilité',
    subtitle: 'Pipeline reproductible et déploiement sécurisé',
    date: '2025-06-12',
    author: 'Mansour Nachirou',
    tags: ['DevOps', 'Docker', 'CI/CD'],
    category: 'DevOps',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555696958-c5049b866f8b?q=80&w=1400&auto=format&fit=crop'
    ],
    excerpt:
      "Mettre en place une livraison continue fiable avec du monitoring dès le jour 1.",
    content: [
      "Construire des images Docker minces (multi-stage, distroless) réduit la surface d'attaque.",
      "CI: lint, tests, build, scan de vulnérabilités; CD: déploiement progressif et rollback.",
      "Logs, métriques et traces distribuées pour détecter tôt les régressions.",
    ],
  },
];

function formatBlogDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  } catch (e) {
    return dateStr;
  }
}
