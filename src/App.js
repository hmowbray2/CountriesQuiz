import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import NavButton from "./components/NavButton";
import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: [
        { answer: "London", correct: false },
        { answer: "Paris", correct: true },
        { answer: "Rome", correct: false },
        { answer: "Dublin", correct: false },
      ],
    },
    {
      id: 2,
      question: "What is the capital of Japan?",
      options: [
        { answer: "Tokyo", correct: true },
        { answer: "Osaka", correct: false },
        { answer: "Beijing", correct: false },
        { answer: "Manila", correct: false },
      ],
    },
    {
      id: 3,
      question: "What is the capital of Kenya?",
      options: [
        { answer: "Lagos", correct: false },
        { answer: "Cape Town", correct: false },
        { answer: "Nairobi", correct: true },
        { answer: "Marrakech", correct: false },
      ],
    },
    {
      id: 4,
      question: "What is the capital of Australia?",
      options: [
        { answer: "Sydney", correct: false },
        { answer: "Melbourne", correct: false },
        { answer: "Adelaide", correct: false },
        { answer: "Canberra", correct: true },
      ],
    },
  ]);

  const [pageId, setPageId] = useState(0);
  // console.log("Q length " + questions.length);

  const nextPage = (id) => {
    {
      id < questions.length - 1 && setPageId(() => id + 1);
    }
  };
  const prevPage = (id) => {
    {
      id > 0 && setPageId(() => id - 1);
    }
  };

  return (
    <div className="container">
      <Header />
      <Question questions={questions} pageId={pageId} />
      <div className="nav-buttons">
        <NavButton name="back" pageId={pageId} prevPage={prevPage} />
        <NavButton name="next" pageId={pageId} nextPage={nextPage} />
      </div>
    </div>
  );
}

export default App;
