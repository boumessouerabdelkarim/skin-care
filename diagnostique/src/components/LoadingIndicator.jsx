import React from 'react';

/**
 * Composant d'indicateur de chargement
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.message - Message à afficher pendant le chargement
 */
const LoadingIndicator = ({ message = 'Chargement en cours...' }) => {
  return (
    <div className="app-container">
      <div className="card flex flex-col items-center justify-center min-h-64">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;