// write your code here
//My code here...

document.addEventListener('DOMContentLoaded', () => {
    getData()
})

function getData() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    //.then(data => {
    //    renderRamen(data)
    //})
    .then(data => data.forEach(dish => {
        renderRamen(dish)
    }))
}

function renderRamen(dish) {
        const menuImg = document.createElement('img')
        menuImg.src = dish.image
        menuImg.name = dish.name  //This populates the "Name" section in the Details Div
        menuImg.restaurant = dish.restaurant //This populates the "Restaurant" section in the details Div
        menuImg.rating = dish.rating
        menuImg.comment = dish.comment
        document.querySelector('#ramen-menu').appendChild(menuImg)
    
    //This works but when you click BETWEEN the images it breaks :/
    document.querySelector(`#ramen-menu`).addEventListener('click', (e) => {
      const details = document.querySelector(`#ramen-detail`)
      details.children[0].src = e.target.src //Photo   
      details.children[1].innerText = e.target.name //Dish name
      details.children[2].innerText = e.target.restaurant //Restaurant
      const rating = document.querySelector("#rating-display").innerText = e.target.rating
      const comment = document.querySelector('#comment-display').innerText = e.target.comment
    })
}

const form = document.querySelector('#new-ramen').addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#new-name').value
    const restaurant = document.querySelector('#new-restaurant').value
    const image = document.querySelector('#new-image').value
    const rating = document.querySelector('#new-rating').value
    const comment = document.querySelector('#new-comment').value

    const menuImg = document.createElement('img')
    menuImg.src = image
    menuImg.name = name  //This populates the "Name" section in the Details Div
    menuImg.restaurant = restaurant //This populates the "Restaurant" section in the details Div
    menuImg.rating = rating
    menuImg.comment = comment
    document.querySelector('#ramen-menu').appendChild(menuImg)
})