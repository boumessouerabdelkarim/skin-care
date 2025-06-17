import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-primary-600">Bienvenue sur notre plateforme IA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        {/* Service 1 : Diagnostic de peau */}
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <img src="/images/diagnostic-visage.webp" alt="Diagnostic de peau" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Diagnostic de peau</h2>
          <p className="text-gray-600 mb-4 text-center">
            Analysez votre peau grâce à l'IA et obtenez une routine personnalisée et des recommandations de produits.
          </p>
          <button
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
            onClick={() => navigate('/skinCare')}
          >
            Commencer le diagnostic
          </button>
        </div>
        {/* Service 2 : SEO Writer */}
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <img src="/images/seo_writer.png" alt="SEO Writer" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h2 className="text-2xl font-semibold mb-2">SEO Writer</h2>
          <p className="text-gray-600 mb-4 text-center">
            Rédigez des articles optimisés pour le référencement en quelques clics grâce à notre IA spécialisée.
          </p>
          <button
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition"
            onClick={() => navigate('/seoWriter')}
          >
            Accéder au SEO Writer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 