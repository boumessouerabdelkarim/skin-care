import React from 'react';

/**
 * Composant affichant la progression du questionnaire
 * @param {Object} props - Les propriétés du composant
 * @param {number} props.currentStep - Étape actuelle
 * @param {number} props.totalSteps - Nombre total d'étapes
 * @param {number} props.progress - Pourcentage de progression (0-100)
 */
const QuestionnaireProgress = ({ currentStep, totalSteps, progress }) => {
  return (
    <div className="mb-6 ">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Question {totalSteps - currentStep + 1} sur {totalSteps}
        </span>
        <span className="text-sm font-medium text-primary-500">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuestionnaireProgress;