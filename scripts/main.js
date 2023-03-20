import { yallHungry } from "./MellowShifters.js"

const mainContainer = document.querySelector("#container")

const renderAllHtml = () => {
    mainContainer.innerHTML = yallHungry()
}

renderAllHtml()

