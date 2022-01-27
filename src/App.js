import { useState, useEffect } from "react";
import uniqid from "uniqid";
import cardsInfo from "./components/cardsInfo";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(cardsInfo());

  function handler(name) {
    if (wasClicked(name)) {
      if (bestScore < score) {
        setBestScore(score);
      }
      setScore(0);
      setCards(cardsInfo());
    } else {
      setScore(score + 1);
      isClicked(name);
    }
  }

  function isClicked(name) {
    const newArray = cards;

    const index = newArray.findIndex((card) => card.name === name);

    newArray[index].clicked = true;

    setCards(newArray);
  }

  function wasClicked(name) {
    const card = cards.find((card) => card.name === name);
    return card.clicked ? true : false;
  }

  function randomiseCards() {
    return cards.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="game-wrap">
      <div className="header">
        <h1>The Memory Game</h1>
        <div className="score-area">
          <p>Score: {score}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </div>
      <div className="instructions">
        <p>
          Click on the books to get points but don't click on the same book
          twice!
        </p>
      </div>

      <div className="card-grid">
        {randomiseCards().map((card) => (
          <Card key={uniqid()} {...card} handleClick={handler} />
        ))}
      </div>
    </div>
  );
}

export default App;
