import React, { useState } from 'react';
import QuestionnaireProgress from './QuestionnaireProgress';
import QuestionDisplay from './QuestionDisplay';
import Navigation from './Navigation';
import CompletionScreen from './CompletionScreen';
import LoadingIndicator from './LoadingIndicator';
import useQuestionnaire from '../hooks/useQuestionnaire';
import apiService from '../services/apiService';

function SkinCareApp() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    responses,
    nextQuestion,
    prevQuestion,
    handleResponse,
    hasResponse,
    isLastQuestion,
    getFormattedResponses,
    resetQuestionnaire
  } = useQuestionnaire();

  const [status, setStatus] = useState('in-progress');
  const [faceImage, setFaceImage] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleImageUpload = async (file) => {
    setFaceImage(file);
    handleResponse(file);
  };

  const handleSubmit = async () => {
    setStatus('loading');
    try {
      const formattedResponses = getFormattedResponses();
      const response = await apiService.submitSkinDiagnostic(formattedResponses, faceImage);
      setApiResponse(response);
      setStatus('completed');
    } catch (error) {
      setStatus('completed');
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleSubmit();
    } else {
      nextQuestion();
    }
  };

  const handleRestart = () => {
    setStatus('in-progress');
    setFaceImage(null);
    resetQuestionnaire();
  };

  if (status === 'loading') {
    return <LoadingIndicator message="Envoi de vos réponses en cours..." />;
  }

  if (status === 'completed') {
    return (
      <CompletionScreen
        onRestart={handleRestart}
        apiResponse={apiResponse}
      />
    );
  }

  return (
    <div className="w-full h-screen flex">
      {/* Colonne image */}
      <div className="w-1/2 h-full bg-gray-100 relative flex flex-col justify-center items-center">
        <img src="/images/diagnostic-visage.webp" alt="Diagnostic de peau" className="object-cover w-full h-full" />
        <div className="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">VOTRE DIAGNOSTIC DE PEAU</h2>
          <p className="text-lg text-white">POUR UN RITUEL PERSONNALISÉ</p>
        </div>
      </div>
      {/* Colonne questionnaire */}
      <div className="w-2/3 h-full flex flex-col p-12 overflow-y-auto">
        <div className=" mb-6">
          <QuestionnaireProgress
            currentStep={currentQuestionIndex + 1}
            totalSteps={totalQuestions}
            progress={progress}
          />
        </div>
        <QuestionDisplay
          question={currentQuestion}
          response={responses[currentQuestion?.id]}
          onRespond={currentQuestion?.type === 'image_upload' ? handleImageUpload : handleResponse}
        />
        <div className="mt-auto pt-8">
          <Navigation
            onPrev={prevQuestion}
            onNext={handleNext}
            canGoPrev={currentQuestionIndex > 0}
            canGoNext={hasResponse()}
            isLastQuestion={isLastQuestion}
          />
        </div>
      </div>
    </div>
  );
}

export default SkinCareApp;