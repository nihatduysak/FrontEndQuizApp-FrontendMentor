export default function Header() {
    return (
        <div className="lightDark">
            <img src="./src/assets/img/light-mode-icon.svg" alt="Light Mode Icon" />
                    <div onClick={()=> document.body.classList.toggle("dark-theme")} className="switchContainer">
                        <img src="/public/images/ellipse-10.svg" />
                    </div>
            <img src="./src/assets/img/dark-mode-icon.svg" alt="Dark Mode Icon" />
        </div>
    )
}