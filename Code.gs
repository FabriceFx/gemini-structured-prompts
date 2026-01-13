/**
 * @fileoverview Point d'entrée pour l'application Web "Gemini Prompt Architect".
 * Ce script sert l'interface utilisateur SPA et gère les configurations de base.
 * @author Fabrice Faucheux
 */

/**
 * Fonction standard de déclenchement pour les Web Apps Google Apps Script.
 * Elle génère le contenu HTML à partir du fichier template.
 * * @param {GoogleAppsScript.Events.DoGet} e - L'objet événement de la requête GET.
 * @return {GoogleAppsScript.HTML.HtmlOutput} L'interface utilisateur rendue.
 */
const doGet = (e) => {
  try {
    const template = HtmlService.createTemplateFromFile('index');
    
    // Évaluation et configuration de la sortie HTML
    return template.evaluate()
      .setTitle('Gemini Prompt Architect')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      
  } catch (error) {
    console.error('Erreur lors du chargement de l\'application :', error);
    return HtmlService.createHtmlOutput(`<h1>Erreur interne</h1><p>${error.message}</p>`);
  }
};

/**
 * Fonction utilitaire pour inclure des fichiers HTML partiels (CSS/JS séparés) si nécessaire dans le futur.
 * @param {string} filename - Le nom du fichier à inclure.
 * @return {string} Le contenu du fichier.
 */
const include = (filename) => {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};
