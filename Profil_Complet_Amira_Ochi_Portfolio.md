---
noteId: "2a9f5f20c57111f19c23b300077c684b"
tags: []

---

# Profil maître — Amira Ochi

> **Usage recommandé :** ce document est une source de vérité pour construire le portfolio, adapter les CV, préparer les candidatures et rédiger les descriptions LinkedIn/GitHub.  
> Les éléments sont séparés entre **confirmé**, **en cours**, **exploré** et **à confirmer** afin d’éviter toute surévaluation dans le portfolio.

---

## 1. Identité professionnelle

**Nom :** Amira Ochi  
**Localisation :** Tunis, Tunisie  
**Email :** amiraochi1234@gmail.com  
**Téléphone :** +216 99 028 005  
**LinkedIn :** https://www.linkedin.com/in/amira-ochi-b7346428b/  
**GitHub :** URL à ajouter

### Positionnement principal

Ingénieure diplômée en **Génie Électrique**, spécialisée en **Informatique Industrielle et Instrumentation**, avec un profil à l’intersection de :

- Computer Vision et traitement d’image ;
- intelligence artificielle appliquée ;
- robotique ;
- systèmes embarqués et Edge AI ;
- développement logiciel ;
- traitement du signal ;
- instrumentation et acquisition de données ;
- intégration matériel–logiciel.

### Positionnement cible pour le portfolio

**Computer Vision / Perception Engineer — C++ / Python / OpenCV / Edge AI**

Le portfolio peut aussi montrer des compétences complémentaires en robotique, embarqué, backend, traitement du signal et IA générative, sans diluer l’axe principal Computer Vision.

---

## 2. Parcours académique

### Diplôme National d’Ingénieur en Génie Électrique
**École Nationale d’Ingénieurs de Monastir — ENIM, Tunisie**  
**Spécialité : Informatique Industrielle et Instrumentation**  
**Période : 2023–2026**

Résultats communiqués :
- Note du projet de fin d’études : **18/20**
- Moyenne globale de troisième année : **14,80/20**

Formation couvrant notamment :
- informatique industrielle ;
- instrumentation ;
- programmation ;
- systèmes embarqués ;
- automatique ;
- acquisition de données ;
- traitement du signal ;
- électronique ;
- outils de développement et de simulation.

### Cycle préparatoire Mathématiques–Physique
**Institut Préparatoire aux Études d’Ingénieurs d’El Manar — IPEIEM**  
**Période : 2021–2023**

---

## 3. Expériences professionnelles

## 3.1 Nexor Robotics — Stage de fin d’études

**Lieu :** Sousse, Tunisie  
**Période :** avril 2026 – septembre 2026  
**Domaine :** Computer Vision, intelligence artificielle, robotique, backend, interaction vocale  
**Projet :** NEXOR — robot serveur intelligent autonome, multimodal et multilingue destiné aux restaurants et cafés

### Objectif global

Développer et intégrer plusieurs modules permettant au robot de percevoir son environnement, suivre des personnes, naviguer, interagir vocalement et superviser l’état de ses missions.

### Computer Vision

Travaux réalisés autour de :
- détection de personnes et d’objets avec **YOLOv8** ;
- suivi multi-objets avec **ByteTrack** ;
- utilisation/exploration de **OSNet** pour la ré-identification ;
- exploration de **RTMPose** pour l’estimation de pose ;
- traitement d’image avec **OpenCV** ;
- préparation et évaluation de modèles de perception.

### Résultats de détection rapportés

- Précision YOLOv8 : **86,28 %**
- Rappel YOLOv8 : **74,27 %**
- mAP@50 : **82,90 %**
- mAP@50–95 : **39,96 %**

> Pour les CV, la métrique la plus sûre à afficher sans ambiguïté est actuellement **mAP@50 = 82,90 %**.  
> Une ancienne version de CV contient d’autres valeurs de précision/rappel ; celles-ci ne doivent pas être utilisées sans revérification des résultats d’origine.

### Pipeline vocal multilingue

Travaux réalisés :
- constitution et préparation d’un dataset audio en **arabe, français et anglais** ;
- nettoyage, augmentation et partitionnement des données ;
- reconnaissance vocale autour de **Whisper Small / Faster Whisper** ;
- exploration de synthèse vocale et d’une architecture **STT → NLP/LLM → TTS** ;
- outils/technologies explorés ou utilisés selon les étapes : Piper, gTTS, Edge TTS, Coqui TTS.

Dataset final rapporté :
- **40 737 fichiers audio**
- environ **42,91 heures**

Résultats WER rapportés :
- validation globale : **9,45 %**
- test global : **9,62 %**
- arabe : **6,19 %**
- anglais : **4,03 %**
- français : **8,88 %**

### Recommandation

Développement d’un système de recommandation hybride combinant :
- recommandation basée sur le contenu ;
- filtrage collaboratif ;
- informations contextuelles ;
- **TF-IDF** ;
- similarité cosinus.

### Robotique et intégration

Technologies associées :
- **ROS 2**
- **Gazebo**
- **Nav2**
- intégration des modules de perception, navigation et communication ;
- simulation et validation de scénarios robotiques.

### Backend et supervision

Développement/intégration de services utilisant :
- **FastAPI**
- **Pydantic**
- **WebSocket**
- **SQLite**

Une application web de supervision permettait notamment :
- le suivi des déplacements du robot ;
- la visualisation d’états en temps réel ;
- le suivi de l’état des commandes.

### Résultat système

Scénario nominal rapporté :
- **95 % de réussite sur 80 exécutions**

### Plateforme

- **NVIDIA Jetson Orin Nano Developer Kit**
- Linux
- environnement robotique et IA embarquée

### Éléments explorés / à ne pas sur-vendre

Le périmètre du projet a également inclus ou envisagé :
- caméra RGB et thermique ;
- détection de composants ;
- étude d’anomalies thermiques ;
- RTMPose ;
- certains composants avancés du pipeline vocal.

Ces éléments doivent être présentés comme **explorés / étudiés / en cours d’intégration** si leur validation complète n’est pas confirmée.

### Publication GitHub

Des travaux liés au :
- tracking ;
- simulateur / Gazebo ;

ont déjà été publiés sur GitHub.  
**URL du dépôt à ajouter dans le portfolio.**

---

## 3.2 Kromberg & Schubert Tunisie — Stage Vision Industrielle & Edge AI

**Période :** juillet 2025 – août 2025  
**Domaine :** vision industrielle, contrôle qualité, Edge AI, développement Qt

### Projet 1 — Détection de défauts de câblage

Travaux réalisés :
- développement d’un **CNN** pour la détection de défauts de câblage ;
- déploiement du modèle sur **NVIDIA Jetson Nano** ;
- tests en **temps réel** avec une caméra **CSI** ;
- application dans un contexte industriel de contrôle/validation de câblage.

Compétences mobilisées :
- Computer Vision ;
- Deep Learning ;
- CNN ;
- Edge AI ;
- NVIDIA Jetson Nano ;
- caméra CSI ;
- tests temps réel ;
- environnement Linux ;
- intégration d’un modèle de vision sur cible embarquée.

### Projet 2 — Application Qt de suivi du processus de correction

Projet distinct du CNN.

Développement d’une interface **Qt** dédiée au :
- suivi du processus complet de correction du câblage ;
- suivi de l’avancement des étapes du processus industriel.

> Important : l’application Qt ne doit pas être décrite comme une interface de visualisation ou validation directe des prédictions du CNN. Ce sont deux travaux distincts.

---

## 3.3 STEG — Stage d’initiation

**Société Tunisienne de l’Électricité et du Gaz**  
**Période :** juillet 2024 – août 2024  
**Domaine :** installations électriques, maintenance et protection réseau

Travaux / exposition :
- observation d’installations haute tension ;
- maintenance d’installations électriques ;
- étude des mécanismes et systèmes de protection du réseau.

---

## 4. Projets techniques

## 4.1 Stereo 3D Vision & Reconstruction en C++ — Projet personnel en cours

**Statut : EN COURS**  
**Objectif :** approfondir le C++, la géométrie multi-vues, la vision 3D et l’architecture logicielle.

### Stack prévue / utilisée dans le projet

- C++
- OpenCV C++
- Eigen
- CMake
- Git
- Linux / WSL2
- MeshLab pour la visualisation du nuage de points exporté

> Le standard exact C++ ne doit pas être affiché dans le portfolio comme compétence spécifique tant qu’il n’est pas définitivement fixé et utilisé dans le projet. Il est acceptable d’écrire simplement **C++**.

### Pipeline cible

Le projet prend une paire d’images stéréo gauche/droite et doit produire :

1. chargement des images et paramètres caméra ;
2. rectification stéréo ;
3. calcul d’une carte de disparité ;
4. estimation d’une carte de profondeur ;
5. reprojection en coordonnées 3D ;
6. génération d’un nuage de points ;
7. export `.ply` ;
8. visualisation avec MeshLab ;
9. évaluation quantitative ;
10. mesure du temps de traitement / performances.

### Méthodes prévues

- StereoBM et/ou StereoSGBM ;
- relation profondeur/disparité ;
- calibration et paramètres intrinsèques/extrinsèques ;
- reprojection 3D ;
- gestion des pixels invalides ;
- comparaison aux vérités terrain si le dataset en fournit.

### Dataset

Utilisation prévue d’un **dataset stéréo public** avec calibration et, idéalement, ground truth.

### Intérêt portfolio

Ce projet doit démontrer :
- C++ moderne dans un vrai pipeline ;
- OpenCV C++ ;
- géométrie caméra ;
- vision stéréo ;
- reconstruction 3D ;
- CMake ;
- architecture modulaire ;
- mesure des performances ;
- Git et qualité de code.

> Ne pas présenter les étapes futures comme déjà terminées. Le portfolio doit clairement afficher **Project in progress** tant que le pipeline complet n’est pas finalisé.

---

## 4.2 Smart House — Système embarqué STM32 / ESP32

**Domaine :** IoT, embarqué, instrumentation, backend

### Architecture

- **STM32**
- **ESP32**
- communication **UART**
- différents capteurs
- communication Wi-Fi
- acquisition et échange de données

### Application

Développement d’une application web avec **FastAPI** permettant :
- la visualisation des données des capteurs ;
- le suivi temps réel ;
- le contrôle des différents équipements/fonctions de la maison.

### Compétences démontrées

- systèmes embarqués ;
- communication UART ;
- STM32 / ESP32 ;
- capteurs ;
- acquisition de données ;
- intégration matériel–logiciel ;
- Python ;
- FastAPI ;
- IoT ;
- supervision et commande via application web.

---

## 4.3 Traitement et visualisation de signaux ECG

**Domaine :** traitement du signal biomédical, instrumentation, acquisition, visualisation

Travaux :
- acquisition / numérisation de signaux via **ADC** ;
- traitement de signaux ECG bruités ;
- filtrage numérique **FIR / IIR** ;
- analyse fréquentielle par **FFT** ;
- réduction du bruit ;
- extraction de caractéristiques ;
- analyse et validation expérimentale ;
- visualisation des signaux.

Interface :
- développement d’une interface web avec **React** pour la visualisation.

Technologies associées selon les étapes :
- MATLAB ;
- Python ;
- ADC ;
- FIR/IIR ;
- FFT ;
- React.

> Le backend et le protocole exact de transmission de ce projet ne sont pas suffisamment documentés et ne doivent pas être inventés.

---

## 4.4 Migration Microchip vers STM32 — AST Parsing & RAG/LLM

**Domaine :** systèmes embarqués, analyse de code, IA générative

### Objectif

Étudier/concevoir un outil visant à faciliter la migration de projets pour microcontrôleurs **Microchip** vers **STM32**.

### Travaux étudiés

- analyse structurelle du code via **AST Parsing** ;
- identification des dépendances ;
- analyse et correspondance entre périphériques ;
- exploitation de documentation technique ;
- utilisation envisagée de **RAG** et de **LLM** pour assister l’analyse et la transformation du code ;
- prompt engineering.

### Technologies associées

- C / C++
- Python
- AST Parsing
- RAG
- LLM
- prompt engineering

### Niveau de maturité à communiquer

Présenter ce projet comme :
- étude ;
- conception ;
- prototype / exploration,

et non comme un convertisseur automatique totalement finalisé si compilation, tests et validation matérielle n’ont pas été réalisés de bout en bout.

---

## 4.5 Vision artificielle sur NVIDIA Jetson Nano

**Domaine :** Computer Vision embarquée / Edge AI

Travaux associés :
- application de vision artificielle sur **NVIDIA Jetson Nano** ;
- Python ;
- OpenCV ;
- Linux ;
- déploiement de traitements de vision sur plateforme embarquée.

> Une expérience professionnelle plus forte sur Jetson Nano existe également chez Kromberg & Schubert. Éviter de répéter exactement le même message dans le portfolio : utiliser ce projet seulement s’il apporte une démonstration technique différente.

---

## 4.6 Système de sécurité par reconnaissance faciale

**Domaine :** Computer Vision + systèmes embarqués

Architecture :
- reconnaissance faciale ;
- STM32 ;
- servomoteur.

Fonction :
- exploiter le résultat de la reconnaissance faciale pour commander automatiquement un actionneur / accès.

> Le modèle exact de reconnaissance faciale et les métriques ne sont pas documentés. Ne pas inventer de précision, dataset ou architecture.

---

## 4.7 Conception d’un filtre électronique avec Altium Designer

**Domaine :** électronique et CAO

Travail :
- conception d’un filtre électronique avec **Altium Designer**.

> La topologie exacte, les fréquences de coupure et les mesures de validation ne sont pas documentées. Ne pas les inventer.

---

## 5. Compétences techniques

Les compétences ci-dessous reflètent les technologies utilisées, étudiées ou explorées. Elles ne doivent pas toutes être présentées au même niveau de maîtrise.

### Programmation

**Utilisées :**
- Python
- C
- C++
- MATLAB
- VHDL

### Computer Vision / Deep Learning

- OpenCV
- YOLOv8
- CNN
- TensorFlow
- PyTorch
- ByteTrack
- OSNet
- détection d’objets/personnes
- suivi multi-objets
- traitement d’image
- évaluation de modèles
- Edge AI
- déploiement de vision sur NVIDIA Jetson

**Exploré :**
- RTMPose

### Vision 3D / géométrie

**En cours d’approfondissement :**
- vision stéréo
- calibration caméra
- rectification
- disparité
- profondeur
- reconstruction 3D
- nuages de points
- OpenCV C++
- Eigen

### Robotique

- ROS 2
- Gazebo
- Nav2
- perception robotique
- simulation de navigation
- intégration de modules robotiques

### Systèmes embarqués / IoT

- STM32
- ESP32
- NVIDIA Jetson Nano
- NVIDIA Jetson Orin Nano Developer Kit
- Raspberry Pi
- UART
- Wi-Fi
- ADC
- capteurs
- actionneurs
- communication matériel–logiciel

### Backend / API / interfaces

- FastAPI
- Pydantic
- WebSocket
- SQLite
- Qt
- React

### Traitement du signal

- acquisition de signaux
- ADC
- filtrage FIR
- filtrage IIR
- FFT
- réduction du bruit
- extraction de caractéristiques
- ECG
- validation expérimentale

### Audio / Speech / NLP

- Whisper Small
- Faster Whisper
- Speech-to-Text
- Text-to-Speech
- traitement audio
- données multilingues arabe / français / anglais
- TF-IDF
- similarité cosinus

**Outils explorés selon les étapes :**
- Piper
- gTTS
- Edge TTS
- Coqui TTS

### IA générative

- notions / expérimentation LLM
- RAG
- AST Parsing
- prompt engineering
- recherche documentaire appliquée au code

### Automatisation / instrumentation

- PLC / automates programmables
- Siemens TIA Portal
- automatisation industrielle
- systèmes de commande
- instrumentation
- LabVIEW — **formation académique**
- maintenance haute tension

### Électronique

- Altium Designer
- acquisition
- capteurs
- électronique appliquée
- VHDL

### Développement / environnements / outils

- Linux
- Windows 11
- WSL2
- Git
- Docker
- Visual Studio
- CMake — utilisé / renforcé dans le projet Stereo 3D
- Hugging Face
- Google Colab
- Kaggle

### Librairies / outils data-audio mentionnés

- librosa
- soundfile
- audiomentations
- pyroomacoustics

---

## 6. Résultats quantitatifs disponibles

### NEXOR — Computer Vision

| Indicateur | Résultat |
|---|---:|
| YOLOv8 — précision | 86,28 % |
| YOLOv8 — rappel | 74,27 % |
| YOLOv8 — mAP@50 | 82,90 % |
| YOLOv8 — mAP@50–95 | 39,96 % |

### NEXOR — Speech

| Indicateur | Résultat |
|---|---:|
| WER validation globale | 9,45 % |
| WER test global | 9,62 % |
| WER arabe | 6,19 % |
| WER anglais | 4,03 % |
| WER français | 8,88 % |
| Dataset audio | 40 737 fichiers / ~42,91 h |

### NEXOR — intégration système

| Indicateur | Résultat |
|---|---:|
| Scénario nominal | 95 % de réussite sur 80 exécutions |

---

## 7. Langues

Langues utilisées / communiquées :
- arabe ;
- français ;
- anglais.

**Niveaux CECRL : à confirmer avant publication.**

Ne pas inventer de niveau B2/C1/C2 dans le portfolio tant qu’il n’est pas défini par Amira.

---

## 8. Domaines professionnels cibles

### Priorité principale

- Computer Vision Engineer
- Vision Engineer
- Machine Vision Engineer
- Industrial Vision Engineer
- Perception Engineer
- Image Processing Engineer
- AI / Computer Vision Engineer
- R&D Computer Vision Engineer

### Domaines complémentaires cohérents

- Robotics / Perception Engineer
- Embedded AI / Edge AI Engineer
- C++ Software Engineer junior
- Embedded Software Engineer
- Machine Learning Engineer orienté vision
- Industrial Computing Engineer
- Automation / Instrumentation Engineer

### Orientation géographique évoquée

- Tunisie
- Europe
- opportunités internationales
- pays du Golfe

---

## 9. Ce que le portfolio doit montrer en priorité

Le portfolio ne doit pas donner l’impression d’un profil dispersé. L’histoire principale recommandée est :

> **Ingénieure en Génie Électrique spécialisée en Informatique Industrielle et Instrumentation, orientée Computer Vision et Perception, avec expérience en vision industrielle, Edge AI, robotique et systèmes embarqués, et développement actuel de compétences approfondies en C++ et vision 3D.**

### Projets à mettre le plus en avant

1. **NEXOR — Robot serveur intelligent**
   - Computer Vision
   - tracking
   - évaluation quantitative
   - ROS 2
   - intégration de systèmes
   - Edge AI
   - backend temps réel

2. **Kromberg & Schubert — Vision industrielle**
   - CNN
   - défauts de câblage
   - Jetson Nano
   - caméra CSI
   - temps réel
   - environnement industriel
   - application Qt distincte de suivi du processus

3. **Stereo 3D Vision & Reconstruction en C++ — en cours**
   - C++
   - OpenCV
   - Eigen
   - CMake
   - géométrie caméra
   - vision 3D
   - performance

4. **Smart House**
   - STM32
   - ESP32
   - UART
   - capteurs
   - FastAPI
   - intégration matériel–logiciel

5. **ECG**
   - ADC
   - FIR/IIR
   - FFT
   - instrumentation
   - validation expérimentale
   - React

Les autres projets peuvent apparaître dans une section secondaire ou sous forme de cartes compactes.

---

## 10. Présentation recommandée des compétences dans le portfolio

Au lieu d’une seule liste très longue, organiser les technologies par domaine :

### Computer Vision
OpenCV · YOLOv8 · CNN · ByteTrack · OSNet · PyTorch · TensorFlow · Image Processing · Model Evaluation

### C++ / Software
C++ · C · Python · CMake · Qt · Git · Linux

### Robotics
ROS 2 · Gazebo · Nav2

### Embedded / Edge AI
STM32 · ESP32 · Jetson Nano · Jetson Orin Nano · Raspberry Pi · UART · ADC · Sensors

### Backend / Integration
FastAPI · Pydantic · WebSocket · SQLite · React

### Signal Processing
MATLAB · FIR/IIR · FFT · ECG · Data Acquisition

### AI / NLP
Whisper · STT/TTS · TF-IDF · Cosine Similarity · LLM/RAG (exploration)

### Industrial / Instrumentation
TIA Portal · PLC · LabVIEW (academic training) · Instrumentation · Altium Designer

---

## 11. Règles de précision pour le portfolio

### Peut être présenté comme expérience concrète

- développement de pipelines YOLOv8 / ByteTrack ;
- OpenCV ;
- évaluation de modèles ;
- traitement et préparation de données audio ;
- Whisper ;
- FastAPI / WebSocket / SQLite ;
- ROS 2 / Gazebo / Nav2 ;
- CNN pour défauts de câblage ;
- déploiement Jetson Nano ;
- caméra CSI et tests temps réel ;
- Qt ;
- STM32 / ESP32 / UART ;
- traitement ECG FIR/IIR/FFT ;
- Git / Linux ;
- traitement du signal et instrumentation.

### Doit rester présenté comme exploré / étudié lorsque nécessaire

- RTMPose ;
- certains composants TTS ;
- fonctions thermiques du projet NEXOR ;
- RAG/LLM appliqué à la migration Microchip → STM32 ;
- certaines technologies listées dans les environnements mais non utilisées intensivement.

### Projet Stereo 3D

Toujours afficher **In Progress / En cours** jusqu’à finalisation.

### C++

Écrire simplement **C++** dans le portfolio tant que le niveau de standard ou les fonctionnalités C++17/C++20 réellement utilisées ne justifient pas une mention spécifique.

### Kromberg

Toujours conserver la distinction :
- CNN + Jetson Nano + caméra CSI = détection de défauts de câblage ;
- Qt = suivi du processus complet de correction du câblage.

Ne pas fusionner ces deux projets.

### Métriques YOLO

Valeurs de référence actuelles :
- précision : 86,28 %
- rappel : 74,27 %
- mAP@50 : 82,90 %
- mAP@50–95 : 39,96 %

Une autre version de CV contient des valeurs différentes pour précision/rappel. Ne pas utiliser ces autres valeurs avant vérification.

---

## 12. Résumé professionnel long pour page “About”

Je suis ingénieure diplômée en Génie Électrique, spécialisée en Informatique Industrielle et Instrumentation à l’École Nationale d’Ingénieurs de Monastir. Mon parcours combine Computer Vision, intelligence artificielle appliquée, robotique, systèmes embarqués, traitement du signal et développement logiciel.

Lors de mon projet de fin d’études chez Nexor Robotics, j’ai travaillé sur un robot serveur intelligent intégrant perception visuelle, suivi de personnes, navigation autonome, interaction vocale multilingue, recommandation et supervision en temps réel. J’ai développé et évalué des pipelines de Computer Vision basés sur YOLOv8, ByteTrack et OpenCV, travaillé avec ROS 2, Gazebo et Nav2, et participé à l’intégration de services backend utilisant FastAPI, WebSocket, Pydantic et SQLite.

Mon expérience en vision industrielle chez Kromberg & Schubert m’a permis de développer un CNN pour la détection de défauts de câblage, de le déployer sur NVIDIA Jetson Nano et de réaliser des tests temps réel avec une caméra CSI. J’ai également développé, dans un projet distinct, une interface Qt destinée au suivi du processus complet de correction du câblage.

Mes projets académiques et personnels couvrent aussi les systèmes embarqués STM32/ESP32, l’IoT, le traitement de signaux ECG, la reconnaissance faciale, l’analyse de code pour la migration de microcontrôleurs et l’électronique. Je développe actuellement un projet personnel de vision stéréo et reconstruction 3D en C++ afin d’approfondir mes compétences en vision géométrique, OpenCV C++, architecture logicielle et évaluation des performances.

Je souhaite évoluer principalement vers des postes en Computer Vision, perception, vision industrielle et IA embarquée, tout en consolidant mes compétences en C++ et en développement de systèmes de vision 3D.

---

## 13. Résumé professionnel court pour hero section

**Electrical Engineer specialized in Industrial Computing & Instrumentation, focused on Computer Vision, Perception and Edge AI. Experienced in real-time vision pipelines, industrial defect detection, robotics integration and embedded systems, currently deepening C++ and 3D stereo vision.**

Version française :

**Ingénieure en Génie Électrique spécialisée en Informatique Industrielle et Instrumentation, orientée Computer Vision, Perception et Edge AI. Expérience en vision temps réel, détection de défauts industriels, intégration robotique et systèmes embarqués, avec un approfondissement actuel en C++ et vision stéréo 3D.**

---

## 14. Informations encore à compléter avant publication finale

- URL GitHub exacte ;
- niveaux réels en français et anglais ;
- liens directs des dépôts GitHub à associer aux projets ;
- captures d’écran / vidéos / GIF des projets ;
- dates des projets académiques si souhaitées ;
- modèle et métriques du projet de reconnaissance faciale si disponibles ;
- détails mesurables du CNN Kromberg si les résultats peuvent être publiés ;
- état d’avancement exact du projet Stereo 3D ;
- fonctionnalités C++ réellement utilisées dans le projet Stereo 3D ;
- éventuellement certifications/formations complémentaires à afficher.

---

## 15. Principe directeur

Le portfolio doit montrer **la profondeur avant la quantité**.

Le fil conducteur recommandé est :

**Computer Vision → Vision industrielle → Edge AI → Robotique/Perception → C++ & Vision 3D**

Les compétences embarquées, backend, traitement du signal, IA générative et instrumentation servent de compétences complémentaires démontrant la capacité d’Amira à intégrer des systèmes complets.
