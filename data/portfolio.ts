import type {
  Certification,
  PortfolioContent,
  Project,
  SkillGroup,
  SocialLink,
  TimelineItem,
} from "@/types/portfolio";

export const profile = {
  firstName: "Amira",
  lastName: "Ochi",
  initials: "AO",
  role: "Ingénieure en génie électrique · Computer Vision & Edge AI",
  location: "Tunis, Tunisie",
  email: "amiraochi1234@gmail.com",
  phone: "+216 99 028 005",
  availability: "Ouverte aux opportunités en vision par ordinateur",
  shortBio:
    "Ingénieure diplômée en génie électrique, spécialisée en informatique industrielle et instrumentation. Je développe des systèmes de vision et de perception, de la vision industrielle à la robotique embarquée.",
  longBio:
    "Diplômée de l’École nationale d’ingénieurs de Monastir en informatique industrielle et instrumentation, je travaille à l’interface de la vision par ordinateur, de l’intelligence artificielle appliquée et des systèmes embarqués. Chez Nexor Robotics, j’ai développé et évalué des modules de perception pour un robot serveur ; chez Kromberg & Schubert, j’ai déployé un CNN de détection de défauts de câblage sur Jetson Nano.",
  objective:
    "Je souhaite contribuer à des projets de vision industrielle, de perception robotique et d’IA embarquée. En parallèle, j’approfondis le C++ et la vision stéréo 3D à travers un projet personnel de reconstruction.",
  photo: "/images/profile/amira.png",
  cv: "/cv/amira-ochi.pdf",
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amira-ochi-b7346428b/" },
];

export const sectionCopy = {
  aboutTitle: "De la vision industrielle à la perception robotique.",
  aboutQuote: "Relier les modèles de vision au matériel et aux logiciels pour construire des systèmes utilisables sur le terrain.",
  skillsTitle: "Un socle technique centré sur la perception.",
  skillsDescription: "Vision par ordinateur, robotique et développement logiciel se rejoignent dans mes projets de systèmes embarqués.",
  timelineTitle: "Formation et expériences",
  timelineDescription: "Expériences professionnelles et formation en informatique industrielle et instrumentation, avec un fil conducteur : la vision appliquée.",
  projectsTitle: "Des systèmes de vision conçus pour des usages concrets.",
  projectsDescription: "Perception robotique, contrôle qualité industriel et projets personnels en vision 3D, embarqué et traitement du signal.",
  contactTitle: "Échangeons sur votre projet de vision ou de robotique.",
  contactDescription: "Je suis intéressée par les projets en vision industrielle, perception robotique et IA embarquée. Décrivez-moi votre besoin ou votre opportunité.",
  certificationsTitle: "Apprendre en continu",
  certificationsDescription: "Certifications et formations complémentaires liées à mon parcours.",
};

export const quickFacts = [
  { value: "82,9 %", label: "mAP@50 · détection YOLOv8" },
  { value: "3", label: "Stages professionnels" },
  { value: "5", label: "Réalisations présentées" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Vision et perception",
    skills: [
      "OpenCV",
      "YOLOv8",
      "ByteTrack",
      "CNN",
      "PyTorch",
      "TensorFlow",
      "Évaluation de modèles",
      "Vision industrielle",
    ],
  },
  {
    title: "Robotique et IA embarquée",
    skills: [
      "ROS 2",
      "Gazebo",
      "Nav2",
      "Jetson Nano",
      "Jetson Orin Nano",
      "STM32",
      "ESP32",
      "UART",
    ],
  },
  {
    title: "Logiciel et traitement du signal",
    skills: [
      "Python",
      "C++ · en approfondissement",
      "FastAPI",
      "WebSocket",
      "Qt",
      "MATLAB",
      "FIR / IIR",
      "FFT",
      "Git",
      "Linux",
    ],
  },
];

export const experiences: TimelineItem[] = [
  {
    period: "Avril 2026 — septembre 2026",
    title: "Stage de fin d’études · perception et robotique",
    organization: "Nexor Robotics",
    location: "Sousse, Tunisie",
    description:
      "Développement et intégration de modules pour NEXOR, un robot serveur autonome, multimodal et multilingue.",
    highlights: [
      "Détection avec YOLOv8 et suivi multi-objets avec ByteTrack ; mAP@50 de 82,90 % pour le modèle de détection évalué.",
      "Préparation de données audio en arabe, français et anglais, et travail sur la reconnaissance vocale avec Whisper.",
      "Intégration de la perception, de la navigation ROS 2 / Nav2 et de services de supervision FastAPI, WebSocket et SQLite.",
      "Scénario nominal du système réussi dans 95 % de 80 exécutions rapportées.",
    ],
  },
  {
    period: "Juillet 2025 — Août 2025",
    title: "Stage en vision industrielle et Edge AI",
    organization: "Kromberg & Schubert Tunisie",
    location: "Béja, Tunisie",
    description:
      "Travail sur deux projets distincts liés au contrôle et à la correction du câblage industriel.",
    highlights: [
      "Développement d’un CNN de détection de défauts de câblage, déployé sur Jetson Nano et testé en temps réel avec une caméra CSI.",
      "Développement d’une application Qt pour suivre les étapes du processus de correction du câblage.",
    ],
  },
  {
    period: "Juillet 2024 — Août 2024",
    title: "Stage d’initiation",
    organization: "Société tunisienne de l'électricité et du gaz (STEG)",
    location: "Tabarka, Tunisie",
    description:
      "Découverte de la maintenance des installations électriques et des mécanismes de protection du réseau haute tension.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2023 — 2026",
    title: "Diplôme national d’ingénieure en génie électrique",
    organization: "École nationale d'ingénieurs de Monastir (ENIM)",
    location: "Monastir, Tunisie",
    description:
      "Spécialité informatique industrielle et instrumentation. Projet de fin d’études évalué à 18/20.",
  },
  {
    period: "2021 — 2023",
    title: "Cycle préparatoire mathématiques–physique",
    organization: "Institut préparatoire aux études d'ingénieurs d'El Manar (IPEIEM)",
    location: "Tunis, Tunisie",
    description:
      "Formation en mathématiques et physique avant l’entrée en école d’ingénieurs.",
  },
];

export const projects: Project[] = [
  {
    title: "NEXOR · Perception pour un robot serveur",
    category: "Computer Vision · robotique",
    description:
      "Modules de perception pour un robot serveur, associés au suivi de personnes, à la navigation autonome et à une application de supervision.",
    challenge:
      "Relier la détection et le suivi visuel aux autres fonctions d’un robot autonome dans un scénario de service.",
    solution:
      "Pipeline YOLOv8, ByteTrack et OpenCV, intégré à un environnement ROS 2 / Nav2 et à des services de supervision en temps réel.",
    impact:
      "mAP@50 de 82,90 % pour le détecteur évalué ; scénario nominal réussi dans 95 % de 80 exécutions rapportées.",
    technologies: ["YOLOv8", "ByteTrack", "OpenCV", "ROS 2", "Nav2", "Jetson Orin Nano"],
    image: "",
    featured: true,
  },
  {
    title: "Détection de défauts de câblage sur Jetson Nano",
    category: "Vision industrielle · Edge AI",
    description:
      "Détection de défauts de câblage dans un contexte de contrôle qualité industriel.",
    challenge:
      "Faire fonctionner un modèle de vision sur une cible embarquée reliée à une caméra CSI.",
    solution:
      "Développement d’un CNN, déploiement sur NVIDIA Jetson Nano et tests en temps réel avec une caméra CSI.",
    impact:
      "Modèle déployé sur Jetson Nano et testé en temps réel avec une caméra CSI.",
    technologies: ["CNN", "Jetson Nano", "Caméra CSI", "Python", "Linux"],
    image: "",
  },
  {
    title: "Vision stéréo et reconstruction 3D en C++",
    category: "Vision 3D · projet en cours",
    description:
      "Projet personnel en cours pour approfondir la géométrie multi-vues et le développement C++ appliqué à la vision.",
    challenge:
      "Passer d’une paire d’images stéréo à une estimation de profondeur et à un nuage de points exploitable.",
    solution:
      "Pipeline en développement avec C++, OpenCV, Eigen et CMake ; rectification, disparité et reprojection 3D figurent parmi les étapes visées.",
    impact:
      "En cours : la reconstruction complète, l’export PLY et l’évaluation quantitative restent des objectifs du projet.",
    technologies: ["C++", "OpenCV", "Eigen", "CMake", "Vision stéréo"],
    image: "",
    outcomeLabel: "Avancement",
  },
  {
    title: "Smart House · supervision IoT",
    category: "Systèmes embarqués · IoT",
    description:
      "Système domotique reliant capteurs, microcontrôleurs et application web de supervision.",
    challenge:
      "Acquérir les mesures, échanger les données entre composants et permettre leur consultation et la commande des équipements.",
    solution:
      "Architecture STM32 / ESP32 avec communication UART et Wi-Fi, complétée par une application web utilisant FastAPI.",
    impact:
      "Visualisation des données des capteurs, suivi en temps réel et contrôle des fonctions de la maison.",
    technologies: ["STM32", "ESP32", "UART", "Wi-Fi", "FastAPI", "Capteurs"],
    image: "",
  },
  {
    title: "Traitement et visualisation de signaux ECG",
    category: "Traitement du signal · instrumentation",
    description:
      "Acquisition, traitement et visualisation de signaux ECG bruités.",
    challenge:
      "Réduire le bruit du signal tout en conservant les informations utiles à son analyse.",
    solution:
      "Acquisition par ADC, filtrage numérique FIR / IIR, analyse fréquentielle par FFT et interface de visualisation React.",
    impact:
      "Signaux acquis, filtrés et visualisés dans une interface React.",
    technologies: ["ADC", "FIR / IIR", "FFT", "MATLAB", "Python", "React"],
    image: "",
  },
];

export const certifications: Certification[] = [];

export const languages = ["Arabe", "Français", "Anglais"];

export const defaultPortfolioContent: PortfolioContent = {
  profile,
  sectionCopy,
  socialLinks,
  quickFacts,
  skillGroups,
  experiences,
  education,
  projects,
  certifications,
  languages,
};
