import { useState } from "react";

const words = [
  { original: "apple", translation: "яблоко" },
  { original: "house", translation: "дом" },
  { original: "cat", translation: "кот" },
  { original: "dog", translation: "собака" },
  { original: "window", translation: "окно" },
];

function getRandomIndex() {
  return Math.floor(Math.random() * words.length);
}

function App() {
  const [index, setIndex] = useState(getRandomIndex());
  const [showTranslation, setShowTranslation] = useState(false);

  const currentWord = words[index];

  function handleNewWord() {
    setIndex(getRandomIndex());
    setShowTranslation(false);
  }

  function handleShowTranslation() {
    setShowTranslation(true);
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Тренажёр слов</h1>

      <p>Слово: <b>{currentWord.original}</b></p>

      {showTranslation && (
        <p>Перевод: <b>{currentWord.translation}</b></p>
      )}

      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={handleNewWord}>Новое слово</button>
        <button onClick={handleShowTranslation}>Показать перевод</button>
      </div>
    </div>
  );
}

export default App;
