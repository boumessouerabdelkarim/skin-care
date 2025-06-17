import React, { useState } from 'react';

/**
 * Écran de confirmation après soumission du questionnaire
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onRestart - Fonction pour recommencer le questionnaire
 * @param {Object} props.apiResponse - Réponse de l'API contenant les données
 */
const CompletionScreen = ({ onRestart, apiResponse }) => {
  const [activeTab, setActiveTab] = useState('diagnostic');
  const data = apiResponse?.[0] || {};

  // Extraction des conseils généraux
  const conseils = data["routine de soin"]?.conseils_generaux;

  // Sécurité pour éviter les erreurs si la structure change
  const routineMatin = data["routine de soin"]?.routine_matin
    ? Object.values(data["routine de soin"].routine_matin)
    : [];
  const routineSoir = data["routine de soin"]?.routine_soir
    ? Object.values(data["routine de soin"].routine_soir)
    : [];

  return (
    <div className="w-full h-screen flex">
      {/* Colonne image */}
      <div className="w-1/3 h-full bg-gray-100 relative flex flex-col justify-center items-center">
        <img src="/images/diagnostic-visage.webp" alt="Diagnostic de peau" className="object-cover w-full h-full" />
        <div className="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">VOTRE DIAGNOSTIC DE PEAU</h2>
          <p className="text-lg text-white">POUR UN RITUEL PERSONNALISÉ</p>
        </div>
      </div>
      {/* Colonne résultats */}
      <div className="w-2/3 h-full flex flex-col p-12 overflow-y-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Diagnostic complété !</h2>
          <p className="text-gray-600">Voici votre diagnostic personnalisé et vos recommandations.</p>
        </div>
        {/* Onglets */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-4 justify-center">
            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`py-2 px-4 font-medium ${
                activeTab === 'diagnostic'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Diagnostic de peau
            </button>
            <button
              onClick={() => setActiveTab('routine')}
              className={`py-2 px-4 font-medium ${
                activeTab === 'routine'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Recommandations
            </button>
            <button
              onClick={() => setActiveTab('recettes')}
              className={`py-2 px-4 font-medium ${
                activeTab === 'recettes'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Recettes personnalisées
            </button>
          </nav>
        </div>
        {/* Contenu des onglets */}
        <div className="mb-8">
          {/* Onglet Diagnostic */}
          {activeTab === 'diagnostic' && (
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-4">Votre diagnostic de peau</h3>
              <p className="text-gray-700 whitespace-pre-line">{data["diagnostique de peau"]}</p>
            </div>
          )}

          {/* Onglet Recommandations */}
          {activeTab === 'routine' && (
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-4">Routine personnalisée</h3>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Routine du matin</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {routineMatin.map((produit, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                      <img
                        src={produit.image_src}
                        alt={produit.produit_recommande}
                        className="w-32 h-32 object-cover rounded-lg mb-2"
                      />
                      <h5 className="font-bold text-primary-600">{produit.produit_recommande}</h5>
                      <p className="text-sm text-gray-500 mb-2">{produit.type_produit}</p>
                      <div className="text-gray-700 text-sm text-left w-full">
                        <p><span className="font-semibold">Raison :</span> {produit.raison}</p>
                        <p><span className="font-semibold">Mode d'application :</span> {produit.mode_application}</p>
                        <p><span className="font-semibold">Bénéfices clés :</span> {produit.benefices_cles?.join(', ')}</p>
                        <p><span className="font-semibold">Ingrédients actifs :</span> {produit.ingredients_actifs?.join(', ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Routine du soir</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {routineSoir.map((produit, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                      <img
                        src={produit.image_src}
                        alt={produit.produit_recommande}
                        className="w-32 h-32 object-cover rounded-lg mb-2"
                      />
                      <h5 className="font-bold text-primary-600">{produit.produit_recommande}</h5>
                      <p className="text-sm text-gray-500 mb-2">{produit.type_produit}</p>
                      <div className="text-gray-700 text-sm text-left w-full">
                        <p><span className="font-semibold">Raison :</span> {produit.raison}</p>
                        <p><span className="font-semibold">Mode d'application :</span> {produit.mode_application}</p>
                        <p><span className="font-semibold">Bénéfices clés :</span> {produit.benefices_cles?.join(', ')}</p>
                        <p><span className="font-semibold">Ingrédients actifs :</span> {produit.ingredients_actifs?.join(', ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conseils généraux */}
              {conseils && (
                <div className="bg-white rounded-xl shadow p-6 mt-8">
                  <h4 className="font-bold text-primary-500 mb-2">Conseils généraux</h4>
                  <p className="mb-2">
                    <span className="font-semibold">Fréquence d'application :</span> {conseils.frequence_application}
                  </p>
                  <div className="mb-2">
                    <span className="font-semibold">Précautions :</span>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      {conseils.precautions?.map((precaution, idx) => (
                        <li key={idx}>{precaution}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <span className="font-semibold">Conseil supplémentaire :</span> {conseils.conseil_supplementaire}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Onglet Recettes */}
          {activeTab === 'recettes' && (
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-4">Recettes de produits personnalisés</h3>
              <div className="grid grid-cols-1 gap-6">
                {data["recettes de produits personnalisés"]?.map((recette, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow p-6 flex flex-col space-y-3"
                  >
                    <h4 className="font-bold text-primary-500 text-lg mb-1">{recette.nom_produit}</h4>
                    <p className="text-gray-700 mb-2">{recette.benefices}</p>
                    <div>
                      <h5 className="font-semibold mb-1">Ingrédients :</h5>
                      <ul className="list-disc list-inside text-gray-600 mb-2">
                        {recette.ingredients.map((ingredient, idx) => (
                          <li key={idx}>
                            {ingredient.nom} - {ingredient.pourcentage} ({ingredient.quantite})
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Instructions :</h5>
                      <ol className="list-decimal list-inside text-gray-600">
                        {recette.instructions.map((instruction, idx) => (
                          <li key={idx}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="mt-auto text-center">
          <button
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            onClick={onRestart}
          >
            Recommencer le diagnostic
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;