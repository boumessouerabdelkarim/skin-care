import React, { useState } from 'react';

function SeoWriter() {
  const [topic, setTopic] = useState('');
  const [article, setArticle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Remplacez cette URL par l'URL de votre webhook n8n
  const WEBHOOK_URL = 'http://localhost:5678/webhook/seoWriter';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      setError('Veuillez saisir un sujet d\'article');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setArticle(data[0].article);
    } catch (err) {
      console.error('Erreur lors de l\'appel au webhook:', err);
      setError(`Erreur lors de la génération de l'article: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </a>
        </div>
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">SEO Article Writer</h1>
          <p className="text-lg text-gray-600">Générez des articles SEO optimisés en quelques clics</p>
        </header>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <label htmlFor="topic" className="block text-md font-medium text-gray-900 mb-2">
              Sujet de l'article
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Les bienfaits du yoga pour la santé"
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Génération en cours...' : 'Générer l\'article'}
          </button>
        </form>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {isLoading && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Génération de votre article en cours...</p>
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        )}

        {article && !isLoading && (
          <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article généré</h2>
            <hr className="mb-8 border-gray-300" />
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-10
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-5
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
                prose-li:mb-2 prose-li:text-gray-700
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-md
                prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg"
              dangerouslySetInnerHTML={{ __html: article }}
            />
          </div>
        )}

        
      </div>
    </div>
  );
}

export default SeoWriter; 