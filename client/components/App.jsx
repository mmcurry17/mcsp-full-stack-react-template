import React, { useEffect, useState } from "react";
import Header from "./Header"
import Figure from "./Figure"
import WrongLetters from "./WrongLetters";
import Word from "./Word";
import Popup from "./Popup";
import Notification from "./Notification";


const App = () => {
  const [playable, setPlayable] = useState(true)
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [wordsArr, setWordsArr] = useState([])
  const [selectedWord, setSelectedWord] = useState("");
  console.log(correctLetters)

  useEffect(() => {
    const handleKeyDown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        handleGuess(letter);
      }
    }
    
    const handleGuess = (letter) => {
      if (selectedWord.includes(letter)) {
        handleCorrectGuess(letter);
      } else {
        handleWrongGuess(letter);
      }
    }

    const handleCorrectGuess = (letter) => {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters, letter]);
        } else {
          // HANDLE USER INPUT HAS ALREADY BEEN GUESSED
        }
      }
    }
    
    const handleWrongGuess = (letter) => {
      if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // HANDLE IF USER INPUTS INVALID KEY
          }
        }
        
        window.addEventListener('keydown', handleKeyDown);
        
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [playable, selectedWord, correctLetters, wrongLetters])


  
  useEffect(() => {
    fetch("/api/words")
      .then((res) => {
        if(!res.ok) {
          throw new Error('Failed to fetch words')
        }
        return res.json()
      })
      .then((words) => {
        setWordsArr(words);
        setSelectedWord(words[Math.floor(Math.random() * words.length)].word)
        // setSelectedWord(words[0].word)
      })
      .catch((error) => {
      })
 }, []);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        {/* <Popup />
        <Notification /> */}
      </div>
    </>
  );
};

export default App;
