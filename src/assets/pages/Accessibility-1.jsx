import { Link } from "react-router-dom"
import Header from "../components/Header"
import { useState } from "react"

export default function Accessibility1() {
    const [isFormSubmitted, setFormSubmit] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        if (data.answer === "A") {
        setFormSubmit(true)
        }
    }

    return(
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
            <div className="questionSection">
                <div className="questions">
                    <p>Question 6 of 10</p>
                    <h2>Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h2>
                    <img src="./src/assets/img/percent-bar.png" alt="Percent Bar" />
                </div>
                <form className="answers" onSubmit={handleSubmit}>
                    <label className="answer">
                        <input type="radio" name="answer" value="A"/><span>A</span><p>4.5 : 1</p> <img src="/images/checkmark.svg" alt="" />
                    </label>
                    <label className="answer">
                        <input type="radio" name="answer" value="B"/><span>B</span><p>3 : 1</p>
                    </label>
                    <label className="answer">
                        <input type="radio" name="answer" value="C"/><span>C</span><p>2.5 : 1</p>
                    </label>
                    <label className="answer">
                        <input type="radio" name="answer" value="D"/><span>D</span><p>5 : 1</p>
                    </label>
                    {
                        !isFormSubmitted ?
                        <button type="submit" className="submitAnswer"><p className="answerBtn">Submit Answer</p></button>
                        :
                        <Link to="/">Next Questions</Link>
                    }
                </form>
            </div>
        </>
    )
}