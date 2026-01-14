# Gemini Prompt Architect

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Runtime](https://img.shields.io/badge/Google%20Apps%20Script-V8-green)
![Author](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

> **Générateur SPA de prompts Gemini respectant le guide Workspace (4 piliers). Créez, testez via API et exportez vos prompts.**
>
> **SPA Gemini prompt builder following Workspace guide pillars. Build, test via API, and export structured prompts.**

## 📋 Description

**Gemini Prompt Architect** est une Single Page Application (SPA) autonome conçue pour structurer, visualiser et tester des prompts pour Google Gemini avec rigueur technique. Basé sur le guide officiel *Gemini for Google Workspace*, cet outil impose l'application des 4 piliers essentiels d'un prompt efficace : **Persona, Tâche, Contexte et Format**.

## 🚀 Fonctionnalités clés

* **Architecture Guidée :** Interface ergonomique (TailwindCSS) pour assembler les blocs logiques sans oubli.
* **Test API Intégré :** Connexion directe à l'API Gemini (via votre clé API personnelle stockée en localStorage) pour valider les résultats instantanément.
* **Export & Variables :** Prévisualisation temps réel (Texte/JSON), gestion de variables dynamiques et activation de boucles de feedback.
* **100% Client-Side :** Aucune base de données serveur requise, fonctionne en JavaScript moderne (ES6+).
* **URL de test:** https://fabricefx.github.io/gemini-structured-prompts/

## 🛠 Installation manuelle

Ce projet est conçu pour être hébergé sur Google Apps Script en tant que Web App.

1.  Accédez à [script.google.com](https://script.google.com/home) et créez un **Nouveau projet**.
2.  Ouvrez le fichier `Code.gs` (renommez-le en `Code.js` si vous préférez) et collez le contenu du fichier `Code.js` fourni dans ce repo.
3.  Créez un nouveau fichier HTML nommé **`Index.html`**.
4.  Collez l'intégralité du code source HTML/JS de l'application dans ce fichier `Index.html`.
5.  Cliquez sur **Déployer** > **Nouveau déploiement**.
6.  Sélectionnez le type **Application Web**.
    * *Exécuter en tant que :* Moi.
    * *Qui a accès :* N'importe qui (ou "Moi uniquement" pour un usage privé).
7.  Copiez l'URL de l'application Web générée.

## 🤝 Contribution

Les contributions sont les bienvenues. Merci de respecter les standards ES6+ et l'usage strict de `const`/`let`.

## 📄 Licence

Ce projet est sous licence MIT.
