import { yallHungry } from "./MellowShifters.js"

const mainContainer = document.querySelector("#container")

const renderAllHtml = () => {
    mainContainer.innerHTML = yallHungry()
}

renderAllHtml()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
     renderAllHtml()
 })


