import { getDesserts, setDessert} from "./database.js"

const desserts = getDesserts()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "desserts") {
            setDessert(parseInt(changeEvent.target.value))
             
        }
    }
)






export const Desserts = () => {
    return `<h2>Desserts</h2>
    <select id="desserts">
    <option value="0">Dessert Items</option>
    ${
        desserts.map (
        (dessert) => {
            return `<option name="desserts" value="${dessert.id}">${dessert.name}</option>`
        }
            ).join("")
        }
        </select>`
}