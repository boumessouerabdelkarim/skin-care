import { useState, useCallback} from 'react';
import questions from '../data/questions';

/**
 * Hook personnalisé pour gérer la logique du questionnaire
 */
const useQuestionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});

  // Récupération de la question actuelle
  const currentQuestion = questions[currentQuestionIndex];
  
  // Calcul du pourcentage de progression
  const progress = Math.round(((currentQuestionIndex) / questions.length) * 100);
  
  // Vérifier si c'est la dernière question
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Passer à la question suivante
  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex]);
  
  // Revenir à la question précédente
  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [currentQuestionIndex]);

  // Gérer les réponses en fonction du type de question
  const handleResponse = useCallback((value) => {
    if (!currentQuestion) return;

    if (currentQuestion.type === "choix simple") {
      setResponses(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    } 
    else if (currentQuestion.type === "choix multiple") {
      setResponses(prev => {
        const currentChoices = prev[currentQuestion.id] || [];
        let updatedChoices;
        
        if (Array.isArray(value)) {
          // Si on reçoit directement un tableau de choix
          updatedChoices = value;
        } else {
          // Si on reçoit un seul choix à basculer
          updatedChoices = currentChoices.includes(value)
            ? currentChoices.filter(item => item !== value)
            : [...currentChoices, value];
        }
        
        return {
          ...prev,
          [currentQuestion.id]: updatedChoices
        };
      });
    }
    else if (currentQuestion.type === "text") {
      setResponses(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    }
    else if (currentQuestion.type === "image_upload") {
      setResponses(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    }
  }, [currentQuestion]);

  // Vérifier si la question actuelle a une réponse
  const hasResponse = useCallback(() => {
    if (!currentQuestion) return false;
    
    if (!responses[currentQuestion.id]) return false;
    
    if (currentQuestion.type === "choix multiple") {
      return responses[currentQuestion.id].length > 0;
    }
    
    if (currentQuestion.type === "text") {
      return responses[currentQuestion.id].trim() !== "";
    }

    if (currentQuestion.type === "image_upload") {
      return responses[currentQuestion.id] !== null;
    }
    
    return true;
  }, [currentQuestion, responses]);

  const getFormattedResponses = () => {
    return questions
      .filter(q => responses[q.id] !== undefined)
      .map(q => ({
        question: q.question,
        reponse: responses[q.id]
      }));
  };

  // Réinitialiser le questionnaire
  const resetQuestionnaire = useCallback(() => {
    setCurrentQuestionIndex(0);
    setResponses({});
  }, []);

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    progress,
    responses,
    nextQuestion,
    prevQuestion,
    handleResponse,
    hasResponse,
    resetQuestionnaire,
    isLastQuestion,
    getFormattedResponses
  };
};

export default useQuestionnaire;