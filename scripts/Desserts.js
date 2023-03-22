import { getDesserts, setDesserts, getSingleDessert} from "./database.js"

const desserts = getDesserts()

const printDessert = (dessertObject) => {
    const dessertHTML = `<img src=${dessertObject.image}/> <p> ${dessertObject.name}: $${dessertObject.price}</p>` 
    document.querySelector("#dessertorder").innerHTML = dessertHTML
 }

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "desserts") {
            setDesserts(parseInt(changeEvent.target.value))
            const singleDessert = getSingleDessert(parseInt(changeEvent.target.value))
            printDessert(singleDessert)
        }
    }
)

export const Desserts = () => {
    return `<h2>Desserts</h2>
    <select id="desserts">
    <option value="0">Select your Dessert</option>
    ${
        desserts.map (
        (dessert) => {
            return `<option name="desserts" value="${dessert.id}">${dessert.name}</option>`
        }
            ).join("")
        }
        </select>`
}