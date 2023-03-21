import { Locations } from "./locations.js"
import { Drinks } from "./drinks.js"
import { Orders } from "./orders.js"
import { completeOrder } from "./database.js"
import { Desserts } from "./Desserts.js"
import { Foods } from "./Foods.js"

document.addEventListener(
    "click", (event) => {
    const itemClicked =event.target
    if (itemClicked.id.startsWith("button")){

        completeOrder()}
    }
)

// document.addEventListener(
//     "click", (event) => {
//     const itemClicked =event.target
//     if (itemClicked.class.startsWith("button")){

//         // Call the function responsible for generating order here
//         }
//     }
// )


export const yallHungry = () => {
    return `

<h1>Y'ALL HUNGRY?</h1>

    <article class="container"

    <section class="location">
        ${Locations()}
    </section>

    <section class="createorder">
    <div id="foodorder"></div>
    <div id="drinkorder"></div>
    <div id="dessertorder"></div>
    </section>
    <section class="food">
        ${Foods()}
      
    </section>
    <section class="drink">
        ${Drinks()}
    </section>
    <section class="dessert">
        ${Desserts()}

    </section>
    <section class="ordertotal">
        ${Orders()}
      </section>
   
    <button id="button">Place Your Order</button>

</article>
`
}
