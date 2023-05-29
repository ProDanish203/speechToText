import { useState } from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

function App() {

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-US' })

  if (!browserSupportsSpeechRecognition) {
    return (
      <>
      <h2 className='error'>this browser doesnt support speech recognition. Please try with another browser instead</h2>
      </>
    )
  }

  return (
    <>
    <div className="container">
      <h2>Speech To Text Convertor</h2>
      
      <div className="main">

        <div className="main-content">
            {transcript}
        </div>

        <div className="btns">
          <button className="btn" onClick={startListening}>Start Listening</button>
          <button className="btn" onClick={() => SpeechRecognition.stopListening()}>Stop Listening</button>
        </div>
        
      </div>

    </div>
    </>
  );
}

export default App;
