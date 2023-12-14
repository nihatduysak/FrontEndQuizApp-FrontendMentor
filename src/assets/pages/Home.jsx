import Header from "../components/Header"
import FeQuiz from "../components/FeQuiz"
import TopicSelection from "../components/TopicSelection"
import Quiz from "../components/Qpge"
import QuestionPage from "../components/QuestionPage"

export default function Home() {

    return (
        <>
            <div className="welcomePage">
                <Header />
                <div className="hero">
                    <FeQuiz />
                    <TopicSelection />
                </div>
                <Quiz />
                <QuestionPage />
            </div>

        </>

    )
}