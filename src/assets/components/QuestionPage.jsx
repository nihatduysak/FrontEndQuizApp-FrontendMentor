import Header from "./Header"
import React, { useState } from 'react';
import data from '/data.json';
import FinishQuiz from "./FinishQuiz";

export default function QuestionPage({ currentQuiz, setCurrentQuiz, currentQuestion, setCurrentQuestion}) {

    const [userAnswer, setUserAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [isSelectAnswer, setIsSelectAnswer] = useState(true);
    const [abcd, setAbcd] = useState("A");
  
    const handleAnswer = (answer) => {
      setUserAnswer(answer)
    };
    console.log(userAnswer)
    
    const handleSubmit = () => {
        if(userAnswer === null) return(setIsSelectAnswer(false));
        if (userAnswer === currentQuiz.questions[currentQuestion].answer) {
          setScore(score + 1);
        }
        setIsSelectAnswer(true);
        setSubmitted(true);
    };

    const nextQuestion = () => {
      if (currentQuestion < currentQuiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
      setUserAnswer(null);
      setSubmitted(false);
    };

    return (
        <>  
            {
                currentQuestion <= 9 ?
                (
                    <>
                        <div className="container">
                            <div className="questionHeader">
                                <div className="questionTitle">
                                    <img src={currentQuiz.icon} alt="Accessibility Icon" />
                                    <p>{currentQuiz.title}</p>
                                </div>
                                <div className="div">
                                    <Header />
                                </div>
                            </div>
                            <div className="questionSection">
                                <div className="questions">
                                    <div className="questionsText">
                                        <p>Question {currentQuestion + 1} of 10</p>
                                        <h2>{currentQuiz.questions[currentQuestion].question}</h2>
                                    </div>
                                    <div className="progressbarContainer">
                                        <div className="progressbar" style={{width: `${(currentQuestion + 1) / (currentQuiz.questions.length - 1) * 100}%`}}>

                                        </div>
                                    </div>
                                </div>
                                <div className="answers">

                                    {currentQuiz.questions[currentQuestion].options.map((answer, index) => (
                                        <div className="answer">

                                            <button key={index} onClick={() => handleAnswer(answer)}>
                                                {index === 0 && ("A") || index === 1 && ("B") || index === 2 && ("C") || index === 3 && ("D")}
                                                {' '}
                                                <p>{answer}</p></button>
                                        </div>
                                    ))}
                                    {!submitted ? 
                                        (<button onClick={handleSubmit} className="submitAnswer"><p className="answerBtn">Submit Answer</p></button>)
                                        :
                                        (<button onClick={nextQuestion} className="submitAnswer"><p className="answerBtn">Next Question</p></button>)
                                    }
                                    {
                                        !isSelectAnswer && <p className="errorText">Please select an answer</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                )
                :
                (
                    <FinishQuiz score={score} />
                )
            }
        </>
    )
}