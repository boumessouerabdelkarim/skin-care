import axios from 'axios';

// Configuration de base d'axios
const api = axios.create({
  // Remplacez cette URL par l'URL de votre webhook n8n
  baseURL: 'http://localhost:5678',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Envoie les résultats du questionnaire et l'image au workflow n8n
 * @param {Object} responses - Les réponses au questionnaire
 * @param {File} imageFile - Le fichier image (optionnel)
 * @returns {Promise} - Promesse avec la réponse du serveur
 */
export const submitSkinDiagnostic = async (responses, imageFile) => {
  try {
    // Créer un FormData pour envoyer l'image et les réponses
    const formData = new FormData();
    
    // Ajouter l'image en binaire si elle existe
    if (imageFile) {
      formData.append('image', imageFile);
    }

    // Formater les réponses selon la structure demandée
    const formattedData = {
      responses: responses.map(response => ({
        question: response.question,
        reponse: response.reponse
      }))
    };

    // Ajouter les réponses au FormData
    formData.append('data', JSON.stringify(formattedData));
    
    // Envoi des données au webhook n8n
    const response = await api.post('/webhook/skin-care-coach', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Afficher la réponse dans la console
    
    
    return response.data;
  } catch (error) {
    // Afficher plus de détails sur l'erreur
    console.error('Erreur détaillée:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};

export default {
  submitSkinDiagnostic
};