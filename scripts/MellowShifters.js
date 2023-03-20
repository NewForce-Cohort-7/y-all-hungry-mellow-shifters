import { Locations } from "./locations.js"
import { Drinks } from "./drinks.js"

document.addEventListener(
    "click", (event) => {
    const itemClicked =event.target
    if (itemClicked.class.startsWith("button")){

        // Call the function responsible for generating order here
        }
    }
)


export const yallHungry = () => {
    return `

<h1>Y'ALL HUNGRY?</h1>

<article class="order_container"

    <section class="location_container">
        <div class="location">
        ${Locations()}
    </section>
    <section class="createorder_container">
        <div class="createorder">

        </div>
    </section>
    <section class="food_container">
        <div class="food">

        </div>
    </section>
    <section class="drink_container">
        <div class="drink">
        ${Drinks()}
        </div>
    </section>
    <section class="dessert_container">
        <div class="dessert">
        ${Desserts()}

        </div>
    </section>
    <section class="ordertotal_container">
        <div class="ordertotal">

        </div>
    </section>
        <section class="button_container">
        <button class="button"></button>
    </section>
</article>
`
}
