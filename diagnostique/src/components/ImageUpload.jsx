import React, { useState } from 'react';

/**
 * Composant pour l'upload d'image
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onImageUpload - Fonction appelée quand l'image est uploadée
 * @param {File} props.currentImage - L'image actuellement sélectionnée (si elle existe)
 */
const ImageUpload = ({ onImageUpload, currentImage }) => {
  const [previewUrl, setPreviewUrl] = useState(currentImage ? URL.createObjectURL(currentImage) : null);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setError(null);

    if (file) {
      // Vérifier le type de fichier
      if (!file.type.startsWith('image/')) {
        setError('Veuillez sélectionner une image valide');
        return;
      }

      // Vérifier la taille du fichier (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('L\'image ne doit pas dépasser 5MB');
        return;
      }

      // Créer l'URL de prévisualisation
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      
      // Envoyer le fichier directement
      onImageUpload(file);
    }
  };

  // Nettoyer l'URL de prévisualisation lors du démontage du composant
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Téléchargez votre photo</h2>
        <p className="text-gray-600 mb-4">
        Pour un diagnostic plus précis, veuillez télécharger une photo de votre visage        </p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {/* Zone de prévisualisation */}
        <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
          {previewUrl ? (
            <img 
              src={previewUrl} 
              alt="Aperçu" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Aperçu de l'image
            </div>
          )}
        </div>

        {/* Bouton d'upload */}
        <label className="cursor-pointer">
          <span className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            {previewUrl ? 'Changer l\'image' : 'Sélectionner une image'}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        {/* Message d'erreur */}
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* Instructions */}
        <p className="text-sm text-gray-500 text-center">
          Format accepté : JPG, PNG, GIF<br />
          Taille maximale : 5MB
        </p>
      </div>
    </div>
  );
};

export default ImageUpload; 