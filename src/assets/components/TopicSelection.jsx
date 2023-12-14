

export default function TopicSelection() {
    return (
        <div className="topicSelection">
            <button><img src="./src/assets/img/html-icon.svg" alt="HTML Icon" /><p>HTML</p></button>
            <button><img src="./src/assets/img/css-icon.svg" alt="CSS Icon" /><p>CSS</p></button>
            <button><img src="./src/assets/img/js-icon.svg" alt="Javascript Icon" /><p>Javascript</p></button>
            <button to="/accessibility-1"><img src="./src/assets/img/accessibility-icon.svg" alt="Accessibility Icon" /><p>Accessibility</p></button>
        </div>
    )
}