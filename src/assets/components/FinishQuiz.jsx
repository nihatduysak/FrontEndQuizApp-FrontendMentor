import Header from "./Header"

export default function FinishQuiz({ score }) {
    return (
        <>
            <div className="questionHeader">
                <div className="questionTitle">
                    <img src="./src/assets/img/accessibility-icon.svg" alt="Accessibility Icon" />
                    <p>Accessibility</p>
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
                            <img src="./src/assets/img/accessibility-icon.svg" alt="Accessibility Icon" />
                            <p className="topic">Accessibility</p>
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