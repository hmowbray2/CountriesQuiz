import React, { useState, useEffect } from "react";

const Question = ({ questions, pageId }) => {
  let question = questions[pageId];
  const getCorrectAnswer = (question) => {
    const correctOption = question.options.find((option) => option.correct);
    return correctOption.answer;
  };

  const correctAnswer = getCorrectAnswer(question);
  // console.log("correct answer = " + correctAnswer);

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const checkIfChecked = (value) => selectedOption === value;
  // console.log("You selected = " + selectedOption);

  const [result, setResult] = useState("");

  useEffect(() => {
    setSelectedOption(""); // Reset selected option
    setResult(""); // Reset result
  }, [pageId]); // Depend on pageId

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === correctAnswer) {
      setResult(selectedOption && `${selectedOption} is correct!`);
    } else {
      setResult(selectedOption && `${selectedOption} is incorrect :(`);
    }
  };

  return (
    <div>
      <h3 className="question-no">Question {pageId + 1}</h3>

      <h4 className="question">{questions[pageId].question}</h4>
      <form onSubmit={handleSubmit}>
        <div className="radio-btns">
          <div>
            <label>
              <input
                type="radio"
                name="group"
                value={questions[pageId].options[0].answer}
                checked={selectedOption === questions[pageId].options[0].answer}
                onChange={handleOptionChange}
              />
              {questions[pageId].options[0].answer}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="group"
                value={questions[pageId].options[1].answer}
                checked={selectedOption === questions[pageId].options[1].answer}
                onChange={handleOptionChange}
              />
              {questions[pageId].options[1].answer}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="group"
                value={questions[pageId].options[2].answer}
                checked={selectedOption === questions[pageId].options[2].answer}
                onChange={handleOptionChange}
              />
              {questions[pageId].options[2].answer}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="group"
                value={questions[pageId].options[3].answer}
                checked={selectedOption === questions[pageId].options[3].answer}
                onChange={handleOptionChange}
              />
              {questions[pageId].options[3].answer}
            </label>
          </div>
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default Question;

// <form>
// {Array.from({ length: 4 }, (_, i) => (
//   <div className="form-check" key={i}>
//     <label>
//       <input type="radio" name="group" value={i} checked={true} />
//       {questions[pageId].options[i]?.answer}
//     </label>
//   </div>
// ))}
// </form>
