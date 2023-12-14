import Header from "./Header"
import data from '/data.json';


export default function FinishQuiz({ score, currentQuiz }) {
    return (
        <>
            <div className="questionHeader">
                <div className="questionTitle">
                    <img src={currentQuiz.icon} alt={currentQuiz.title} />
                    <p>{currentQuiz.title}</p>
                </div>
                <div className="div">
                    <Header />
                </div>
            </div>
            <div className="finishQuizContainer">
                <div className="quizComplete">
                    <h2 className="quizStatus">Quiz completed</h2>
                    <h2 className="scoreText"><b>You scored...</b></h2>
                </div>
                <div className="scoreBoard">
                    <div className="quizScore">
                        <div className="access">
                            <img src={currentQuiz.icon} alt={currentQuiz.title} />
                            <p className="topic">{currentQuiz.title}</p>
                        </div>
                        <span>{score}</span>
                        <p>out of 10</p>
                    </div>
                    <div className="playAgainBtn">
                        <button><p>Play Again</p></button>
                    </div> 
                </div>
            </div>
        </>
    )
}