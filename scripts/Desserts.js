import { getDessert, setDessert} from "./database.js"

const dessert = getDessert()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "dessert") {
            setDessert(parseInt(changeEvent.target.value))
             
        }
    }
)






export const dessert = () => {
    return `<h2>Dessert</h2>
    <select id="dessert">
    <option value="0">Dessert Items</option>
    ${
        vehicle.map (
        (vehicle) => {
            return `<option name="dessert" value="${dessert.id}">${dessert.type}</option>`
        }
            ).join("")
        }
        </select>`
}