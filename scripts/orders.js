import { getDrinks, getOrders, getDesserts, getFoods,} from "./database.js";

const buildOrderListItem = (order) => {
    
    const drinks = getDrinks()
    const desserts = getDesserts()
    const foods = getFoods()
    
const foundDrinks = drinks.find(
    (drink) => {
        return drink.id === order.drinkId
    }
)

const foundFoods = foods.find(
    (food) => {
        return food.id === order.foodId
    }
)

const foundDesserts = desserts.find(
    (dessert) => {
        return dessert.id === order.dessertId
    }
)
// const subTotalBuilder = () => {
// const foundPrices =[]
// foundPrices.push(foundDesserts.price, foundDrinks.price, foundFoods.price)
// // let subTotal = 0
// for (const price of foundPrices){

// const subTotal = price += price

// console.log(subTotal)}}

    const subTotal = (foundDrinks.price + foundDesserts.price + foundFoods.price)
    const totalCost = subTotal * (1 + 6 / 100)

    const subString = subTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
    Subtotal: ${subString}
</li>
<li>
    Total: ${costString}
</li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

