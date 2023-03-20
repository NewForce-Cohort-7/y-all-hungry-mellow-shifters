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
    ]
}

export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}


export const getFood = () => {
    return database.foods.map(food => ({...food}))
}

export const setFood = (foodId) => {
    database.transientState.selectedLocation = foodId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}