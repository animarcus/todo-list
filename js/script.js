let completed = document.getElementsByClassName("completed");
let deleters = document.getElementsByClassName("delete");
let items = document.getElementsByClassName("item");
let list = document.getElementById("list");



let todo = {
  list: [{
    "text": "According to all known laws of aviation there is no possible way a bee could fly. howvere, the bee doesnt care",
    "isCompleted": false
  }],
  display : () => {
    //
  },
  edit : (value, index) => {
    //
  },
  toggle : (index) => {
    //
  },
  delete : (index) => {
    //
  }
};








list.addEventListener("click", e => {
  let current = e.target;
  if (current.className === "completed") {
    console.log(current);
  }
  if (current.className === "delete") {
    console.log(current);
  }
});

document.addEventListener("keyup", key => {
  if (key.target.className === "item") {
    // console.log(key.target);
    let value = key.target.innerHTML;
    let index = key.target.parentNode.id;
    console.log(value, index);
  }
  if (key.target.id === "newTodo" && key.key === "Enter") {
    let value = key.target.value;
    console.log(value);
  }
});
