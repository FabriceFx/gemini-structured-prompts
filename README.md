# Gemini Prompt Architect

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Runtime](https://img.shields.io/badge/Google%20Apps%20Script-V8-green)
![Author](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

> **[FR] Générateur SPA de prompts Gemini respectant le guide Workspace (4 piliers). Créez, testez via API et exportez vos prompts.**
>
> **[EN] Gemini SPA prompt builder following Workspace guide pillars. Build, test via API, and export structured prompts.**

---

## 🇫🇷 Français

### 📋 Description
**Gemini Prompt Architect** est une Single Page Application (SPA) autonome, hébergée sur Google Apps Script, conçue pour structurer, visualiser et tester des prompts pour Google Gemini avec une rigueur technique professionnelle.

Basé sur le guide officiel *Gemini for Google Workspace*, cet outil impose l'application des **4 piliers essentiels** d'un prompt efficace :
1.  **Persona (Qui)** : Définition du rôle et de l'expertise de l'IA.
2.  **Tâche (Quoi)** : Mission précise à accomplir.
3.  **Contexte (Où/Pourquoi)** : Informations de fond et environnement.
4.  **Format (Comment)** : Structure de sortie, ton et contraintes techniques.

### 🚀 Fonctionnalités Clés
* **Architecture Guidée & Ergonomique :** Interface moderne (TailwindCSS) pour assembler les blocs logiques sans oubli.
* **Test API en Temps Réel :** Connexion directe à l'API Gemini (modèles `gemini-2.5-flash` ou supérieurs) pour valider les résultats instantanément depuis l'interface.
* **Sécurité des Données :** Votre clé API est stockée localement dans votre navigateur (`localStorage`) et n'est jamais envoyée à un serveur tiers autre que Google.
* **Exports Multi-Formats :**
    * **Markdown :** Pour la rédaction et les usages créatifs.
    * **XML :** Pour le Prompt Engineering avancé (structure balisée).
    * **JSON :** Pour l'intégration technique (API & Code).
* **Boucle de Feedback :** Option pour forcer l'IA à poser des questions de clarification avant de répondre.
* **Variables Dynamiques :** Gestion des placeholders (ex: `[DONNÉES]`) pour créer des templates réutilisables.

### 🛠 Installation Manuelle (Google Apps Script)
Ce projet est conçu pour être déployé en tant que Web App Google Apps Script.

1.  Accédez à [script.google.com](https://script.google.com/home) et créez un **Nouveau projet**.
2.  **Code Serveur :** Ouvrez le fichier `Code.gs`, effacez tout le contenu et collez le code fourni dans ce dépôt. Renommez le fichier en `Code.gs` si nécessaire.
3.  **Interface Utilisateur :** Créez un nouveau fichier HTML nommé `index.html`. Collez-y l'intégralité du code source HTML/JS.
4.  **Déploiement :**
    * Cliquez sur **Déployer** > **Nouveau déploiement**.
    * Sélectionnez le type **Application Web**.
    * *Exécuter en tant que :* **Moi**.
    * *Qui a accès :* **Moi uniquement** (recommandé) ou **N'importe qui**.
5.  Validez et copiez l'URL de l'application Web générée.

---

## 🇬🇧 English

### 📋 Description
**Gemini Prompt Architect** is a standalone Single Page Application (SPA) hosted on Google Apps Script, designed to structure, visualize, and test Google Gemini prompts with professional technical rigor.

Based on the official *Gemini for Google Workspace* guide, this tool enforces the **4 essential pillars** of an effective prompt:
1.  **Persona (Who):** Defining the AI's role and expertise.
2.  **Task (What):** The precise mission to accomplish.
3.  **Context (Where/Why):** Background information and environment.
4.  **Format (How):** Output structure, tone, and technical constraints.

### 🚀 Key Features
* **Guided Architecture:** Modern UI (TailwindCSS) to assemble logical blocks ensuring no component is missed.
* **Real-Time API Testing:** Direct connection to the Gemini API (using `gemini-2.5-flash` models or newer) to validate results instantly within the interface.
* **Data Privacy:** Your API Key is stored locally in your browser (`localStorage`) and is never sent to any third-party server other than Google.
* **Multi-Format Exports:**
    * **Markdown:** For drafting and creative use cases.
    * **XML:** For advanced Prompt Engineering (tagged structure).
    * **JSON:** For technical integration (API & Code pipelines).
* **Feedback Loop:** Option to force the AI to ask clarifying questions before generating the final answer.
* **Dynamic Variables:** Management of placeholders (e.g., `[DATA]`) to create reusable templates.

### 🛠 Manual Installation (Google Apps Script)
This project is designed to be deployed as a Google Apps Script Web App.

1.  Go to [script.google.com](https://script.google.com/home) and create a **New Project**.
2.  **Server Code:** Open the `Code.gs` file, clear all content, and paste the server-side code provided in this repo.
3.  **User Interface:** Create a new HTML file named `index.html`. Paste the complete HTML/JS source code into it.
4.  **Deployment:**
    * Click on **Deploy** > **New deployment**.
    * Select type **Web App**.
    * *Execute as:* **Me**.
    * *Who has access:* **Only myself** (recommended) or **Anyone**.
5.  Confirm and copy the generated Web App URL.

---

## 🤝 Contribution
Les contributions sont les bienvenues. Merci de respecter les standards **ES6+** et l'usage strict de `const`/`let`. / Contributions are welcome. Please adhere to **ES6+** standards and strict usage of `const`/`let`.

## 📄 Licence
Ce projet est sous licence MIT. / This project is licensed under the MIT License.

Copyright (c) 2026 **Fabrice Faucheux**
