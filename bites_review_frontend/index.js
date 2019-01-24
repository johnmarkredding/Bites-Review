document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search").addEventListener("submit", searchHandler);
});

function getData(url, cb) {
  fetch(url)
    .then(res => res.json())
    .then(items => cb(items));
}
function postData(url, data, cb) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(cb);
}

function searchHandler(e) {
  e.preventDefault();
  Item.all().length = 0;
  let searchText = e.target.querySelector("input[name='search-text']");
  getData(`http://localhost:3000/api/v1/restaurants/search/${searchText.value}`, restaurantHandler);
}
function restaurantHandler(restaurant) {
  let itemUL = document.querySelector("#items-ul");
  itemUL.className = "";
  itemUL.innerHTML = "";
  handleItems(restaurant.items);
  itemUL.addEventListener("click", itemEventHandler);
}
function handleItems(arr) {
  arr.forEach(item => new Item(item));
  Item.showItems();
}
function itemEventHandler(event) {
  if (event.target.className === "item-li") {
    let id = parseInt(event.target.dataset.id)
    Item.all().forEach((item) => {
      if (id === item.id) {
        item.itemFeatures()
        let newCommentForm = document.querySelector(".item-features form");
        newCommentForm.addEventListener("submit", newCommentHandler);
      }
    })
  }
}
function createComment(comment) {
  let commentLI = document.createElement("li");
  commentLI.innerText = comment.content;
  return commentLI;
}
function displayComment(ul, commentLI) {
  ul.prepend(commentLI);
}
function newCommentHandler(e) {
  e.preventDefault();
  let content = e.target.querySelector("#comment-content");
  let comment = {
    content: content.value,
  }
  content.value = "";

  postData(`http://localhost:3000/api/v1/items/${e.target.dataset.id}/comments`, comment, (comment) => {
    let comments = document.querySelector(".comments");
    createAndDisplayComment(comments, comment);
  });
}
function createAndDisplayComment(ul, comment) {

  let commentLI = createComment(comment);
  displayComment(ul, commentLI);
}
function createAndDisplayComments(ul, comments) {
  comments.forEach(comment => {createAndDisplayComment(ul, comment)});
}

//Item Class
const Item = function() {

  let itemsArr = [];
  return class Item {
    constructor({
      id,
      name,
      description,
      dislikes,
      likes,
      price,
      comments
    }) {
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
    static all() {
      return itemsArr;
    }

    listItem() {
      let li = document.createElement("li")
      li.innerText = this.name
      li.dataset.id = this.id
      li.className = "item-li"
      return li
    }
    itemFeatures() {

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

      let form = document.createElement("form");
      form.dataset.id = this.id;
      form.innerHTML = `
        <input id="comment-content" type="text" placeholder="New Review" required autofocus></input>
        <input type="submit" value="Post"></input>
      `;
      section.append(h2, p, h3, form)

      getData(`http://localhost:3000/api/v1/items/${this.id}/comments`, (data) => {
        createAndDisplayComments(ul, data);
      });
      section.append(ul);
    }
  }
}()
