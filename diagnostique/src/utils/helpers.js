/**
 * Formatte les réponses pour l'envoi à l'API n8n
 * @param {Object} responses - Les réponses brutes du questionnaire
 * @returns {Object} - Les données formatées
 */
export const formatResponsesForApi = (responses) => {
    // Vous pouvez transformer les données ici si nécessaire
    // Par exemple, renommer les clés, restructurer les données, etc.
    return {
      responses,
      metadata: {
        completedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language
      }
    };
  };
  
  /**
   * Validation des réponses avant soumission
   * @param {Object} responses - Les réponses à valider
   * @param {Array} requiredQuestionIds - IDs des questions obligatoires
   * @returns {boolean} - True si toutes les questions obligatoires ont une réponse
   */
  export const validateResponses = (responses, requiredQuestionIds = []) => {
    if (requiredQuestionIds.length === 0) return true;
    
    return requiredQuestionIds.every(id => {
      const response = responses[id];
      
      if (response === undefined || response === null) return false;
      
      if (Array.isArray(response)) return response.length > 0;
      
      if (typeof response === 'string') return response.trim() !== '';
      
      return true;
    });
  };
  
  /**
   * Extrait les recommandations pour la peau en fonction des réponses
   * @param {Object} responses - Les réponses du questionnaire
   * @returns {Object} - Des suggestions basées sur les réponses
   */
  export const extractSkinRecommendations = (responses) => {
    // Exemple de logique simple pour des recommandations
    // Dans une vraie application, cette logique serait plus complexe
    
    const recommendations = {
      skinType: null,
      suggestedProducts: [],
      concerns: [],
      routine: []
    };
    
    // Exemples de règles simples
    // Âge
    if (responses[40] === "moins de 18 ans") {
      recommendations.skinType = "Jeune, potentiellement grasse";
      recommendations.concerns.push("Acné");
    } else if (responses[40] === "plus que 45 ans") {
      recommendations.skinType = "Mature";
      recommendations.concerns.push("Signes de l'âge");
    }
    
    // Habitudes de vie
    if (responses[35]?.includes("Je fume au moins une cigarette par jour")) {
      recommendations.concerns.push("Teint terne");
    }
    
    if (responses[35]?.includes("Je m'expose au soleil au minimum 2h par jour en ce moment")) {
      recommendations.concerns.push("Photovieillissement");
      recommendations.suggestedProducts.push("Protection solaire renforcée");
    }
    
    // Préférences de routine
    if (responses[30]?.includes("routine minimaliste")) {
      recommendations.routine = ["Nettoyant doux", "Crème hydratante", "Protection solaire"];
    } else if (responses[30]?.includes("routine complète")) {
      recommendations.routine = [
        "Démaquillant", "Nettoyant", "Lotion tonique", 
        "Sérum ciblé", "Contour des yeux", "Crème hydratante", 
        "Protection solaire", "Masque hebdomadaire"
      ];
    }
    
    return recommendations;
  };
  
  export default {
    formatResponsesForApi,
    validateResponses,
    extractSkinRecommendations
  };