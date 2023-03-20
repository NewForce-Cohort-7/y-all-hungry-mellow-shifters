const database = {
    transientState: {},

    foods: [ 
        {id: 1, name: "Hot Dog", image: "img", price: 1.00},
        {id: 2, name: "Pepperoni Roll", image: "img", price: 1.00},
        {id: 3, name: "Fried chicken", image: "img", price: 3.50}, 
        {id: 4, name: "Opossum Pie", image: "img", price: 5.00},
        {id: 5, name: "Fried Raccoon", image: "img", price: 5.00}
        ],
    drinks: [
        { id: 1, name: "Dr. Pepper", image: "img", price: 0.99 },
        { id: 2, name: "Mt. Dew", image: "img", price: 0.99}, 
        { id: 3, name: "Coke", image: "img", price: 0.99}, 
        { id: 4, name: "Coffee", image: "img", price: 1.99}, 
        { id: 5, name: "Tea", image: "img", price: 0.99}
        ],
    desserts: [
        { id: 1, name: "Ice Cream", pic: "img", price: 2.99},
        { id: 2, name: "Apple Pie", pic: "img", price: 6.99},
        { id: 3, name: "Toe Nails", pic: "img", price: 15.99},
        { id: 4, name: "Hot Fudge Sundae", pic:"img", price: 3.99},
        { id: 5, name: "Triple Decker Ice Cream Root Beer Float Explosion", pic: "img", price: 78.99}
        ],
    locations: [
        {id:1, name: "Dogs-R-Us", address: "26 Main St." }, 
        {id:2, name: "Fred's", address: "99 Central Ave." }, 
        {id:3, name: "Food Factory", address: "129 Parkside Dr." }, 
        {id:4, name: "Riverside Grille", address:"89 Riverside Way"}
    ],
    customOrder: [
        {id:1,locationId:1,drinkId:1,dessertId:1,foodId:1,timestamp:1614659931693}
    ]
}

export const getOrders = () => {
    return database.customOrder.map(customOrder =>({...customOrder}))
}
//locations
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
//drinks
export const getDrinks = () => {
    return database.drinks.map(drink => ({...drink}))
}

export const setDrink = (drinkId) => {
    database.transientState.selectedLocation = drinkId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getDesserts = () => {
    return database.desserts.map(dessert => ({...dessert}))
}

export const setDesserts = (dessertId) => {
    database.transientState.selectedDessert = dessertId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

//foods
export const getFoods = () => {
    return database.foods.map(food => ({...food}))
}

export const setFood = (foodId) => {
    database.transientState.selectedLocation = foodId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const completeOrder = () => {

    const newOrder = {...database.transientState}
    const lastIndex = database.customOrder.length - 1
    newOrder.id = database.customOrder[lastIndex].id + 1
    newOrder.timestamp=Date.now()
    database.customOrder.push(newOrder)
    database.transientState ={}
        document.dispatchEvent( new CustomEvent("stateChanged") )
}


