import React from 'react';

/**
 * Composant de navigation entre les questions
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onPrev - Fonction pour revenir à la question précédente
 * @param {Function} props.onNext - Fonction pour passer à la question suivante
 * @param {boolean} props.canGoPrev - Si l'utilisateur peut revenir en arrière
 * @param {boolean} props.canGoNext - Si l'utilisateur peut avancer
 * @param {boolean} props.isLastQuestion - Si c'est la dernière question
 */
const Navigation = ({ onPrev, onNext, canGoPrev, canGoNext, isLastQuestion }) => {
  return (
    <div className="flex justify-between w-full">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className={`px-6 py-2 rounded-lg border border-gray-300 text-gray-500 bg-gray-100 font-semibold transition
          ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
      >
        Précédent
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`px-6 py-2 rounded-lg border border-black text-black font-semibold bg-white transition
          ${!canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
      >
        {isLastQuestion ? 'Terminer' : 'Suivant'}
      </button>
    </div>
  );
};

export default Navigation;