import './App.css';
import Home from './Components/Home';
import Figure from './Components/Figure';
import WrongLetter from './Components/WrongLetter';
import Word from './Components/Word';
import { useEffect, useState } from 'react';


const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];



function App() {
  const [playable,setPlayable] = useState('true')
  const [correctLetters,setCorrectLetters] = useState([])
  const [wrongLetters,setWrongLetters] = useState([])
  useEffect(()=>{
     const handleKeyDown = event => {
      const { key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters =>[...currentLetters,letter])
            } else {
              // showNotification();
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters =>[...wrongLetters,letter])
    
            } else {
              // showNotification();
            }
          }
        }
      }
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown',handleKeyDown);
},[correctLetters,wrongLetters,playable]);
  return (
  <>
      <Home/>
      <div className='game-container'>
       <Figure/>
       <WrongLetter wrongLetters={wrongLetters}/>
       <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>

  </>
  );
}

export default App;
