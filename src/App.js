import { useState, useEffect } from "react";
import uniqid from "uniqid";
import cardsInfo from "./components/cardsInfo";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(cardsInfo());

  useEffect(() => {
    console.log(cards);
  });

  function randomiseCards() {
    return cards.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="game-wrap">
      <div className="header">
        <h1>The Memory Game</h1>
      </div>
      <div className="score-area">
        <p>Score: {score}</p>
        <button onClick={() => setScore(score + 1)}>click</button>
        <p>Best score: {bestScore}</p>
      </div>
      <div className="card-grid">
        {randomiseCards().map((card) => (
          <Card key={uniqid()} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
