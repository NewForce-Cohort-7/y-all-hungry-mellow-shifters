import { getDesserts, setDessert} from "./database.js"

const desserts = getDesserts()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "dessert") {
            setDessert(parseInt(changeEvent.target.value))
             
        }
    }
)






export const dessert = () => {
    return `<h2>Desserts</h2>
    <select id="desserts">
    <option value="0">Dessert Items</option>
    ${
        vehicle.map (
        (vehicle) => {
            return `<option name="desserts" value="${dessert.id}">${dessert.type}</option>`
        }
            ).join("")
        }
        </select>`
}