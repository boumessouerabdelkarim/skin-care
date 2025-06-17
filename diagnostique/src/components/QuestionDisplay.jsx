import React from 'react';
import ImageUpload from './ImageUpload';

/**
 * Composant pour afficher une question et recueillir la réponse
 * @param {Object} props - Les propriétés du composant
 * @param {Object} props.question - La question à afficher
 * @param {any} props.response - La réponse actuelle (si elle existe)
 * @param {Function} props.onRespond - Fonction appelée quand l'utilisateur répond
 */
const QuestionDisplay = ({ question, response, onRespond }) => {
  if (!question) return null;

  // Rendu pour les questions à choix simple
  const renderSingleChoice = () => {
    return (
      <div className="space-y-2 ">
        {question.choix.map((choice, index) => (
          <div 
            key={index}
            onClick={() => onRespond(choice)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              response === choice 
                ? 'bg-primary-100 border-primary-500' 
                : 'hover:bg-gray-50'
            }`}
          >
            {choice}
          </div>
        ))}
      </div>
    );
  };

  // Rendu pour les questions à choix multiples
  const renderMultipleChoice = () => {
    const selectedChoices = response || [];
    
    return (
      <div className="space-y-2 mt-4">
        {question.choix.map((choice, index) => (
          <div 
            key={index}
            onClick={() => onRespond(choice)}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedChoices.includes(choice) 
                ? 'bg-primary-100 border-primary-500' 
                : 'hover:bg-gray-50'
            }`}
          >
            {choice}
          </div>
        ))}
      </div>
    );
  };

  // Rendu pour les questions textuelles
  const renderTextInput = () => {
    return (
      <textarea
        className="w-full p-3 border rounded-lg mt-4 h-32 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
        placeholder="Votre réponse..."
        value={response || ""}
        onChange={(e) => onRespond(e.target.value)}
      />
    );
  };

  // Rendu pour l'upload d'image
  const renderImageUpload = () => {
    return (
      <ImageUpload 
        onImageUpload={onRespond}
        currentImage={response}
      />
    );
  };

  // Rendu conditionnel en fonction du type de question
  const renderQuestionInput = () => {
    switch (question.type) {
      case "choix simple":
        return renderSingleChoice();
      case "choix multiple":
        return renderMultipleChoice();
      case "text":
        return renderTextInput();
      case "image_upload":
        return renderImageUpload();
      default:
        return <p className="text-red-500">Type de question non reconnu</p>;
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      {renderQuestionInput()}
    </div>
  );
};

export default QuestionDisplay;