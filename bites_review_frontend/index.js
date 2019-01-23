document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/v1/items")
    .then(res => res.json())
    .then(items => handleItems(items));


      let itemUl = document.querySelector("#items-ul")
      itemUl. addEventListener("click", itemEventHandler)
});


function handleItems(arr) {
  arr.forEach(item => new Item(item));
  Item.showItems();
}


// function displayRestaurants(restaurants) {
//   restaurants.forEach(console.log);
// }
const Item = function(){
  let itemsArr = [];

  return class Item {
  constructor({id, name, description, dislikes, likes, price, comments}) {
    this.id = id
    this.name = name
    this.description = description
    this.dislikes = dislikes
    this.likes = likes
    this.price = price
    this.comments = comments
    itemsArr.push(this);
  }


  static showItems() {
    let ul = document.querySelector("#items-ul")
    itemsArr.forEach((item) => {
      // this in here is the whole class because we are in a class method
      ul.append(item.listItem())
      // instance method needs to be called in an instance of an item

    })
  }
  static all(){
    return itemsArr
  }

  listItem() {
    let li = document.createElement("li")
    li.innerText = this.name
    li.dataset.id = this.id
    li.className = "item-li"
    return li
  }
  itemFeatures(){

    let section = document.querySelector(".item-features")
    section.innerHTML = ""
    section.dataset.id = this.id
    let h2 = document.createElement("h2")
    h2.innerText = `${this.name } $ ${this.price}`
    let p = document.createElement("p")
    p.innerText = this.description
    let ul = document.createElement("ul")
    let h3 = document.createElement("h3")
    h3.innerText = "Reviews:"
    ul.className = "comments"



    this.comments.forEach((comment) => {
      let li = document.createElement("li")
      li.innerText = comment.content
      ul.append(li)
    })
    section.append(h2, p, h3, ul)
  }

}
}()

function itemEventHandler(event){
  if (event.target.className === "item-li"){
    let id = parseInt(event.target.dataset.id)
    Item.all().forEach((item) => {
      if (id === item.id){
        item.itemFeatures()
      }
    })
  }
}
