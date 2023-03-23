import { getDesserts, getOrders, setDesserts, getDessertLocation, getSingleDessert, getLocation} from "./database.js"

const desserts = getDesserts()
const dessertLocations = getDessertLocation()
const orders = getOrders()


const printDessert = (dessertObject) => {
    const dessertHTML = `<p> ${dessertObject.name}: $${dessertObject.price}</p>` 
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

export const currentLocation = getLocation()
export const Desserts = () => {
    let html = "<h2>Select Your Dessert</h2>"

    html += '<select id="desserts">'
    html += '<option value="0">Select Dessert</option>'

        
    const dessertsAvailable = desserts.map ( currentDessert => { 
                for(let dessertLocation of dessertLocations){
                    if(currentDessert.id === dessertLocation.dessertId){
        
                         
    return `<option value="${currentDessert.id}">${currentDessert.name}</option>`
                    }
                }
    }
            )
            
 

html += dessertsAvailable.join("")
html += '</select>'
return html   }
  

    
