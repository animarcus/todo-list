let completed = document.getElementsByClassName("completed");
let deleters = document.getElementsByClassName("delete");
let items = document.getElementsByClassName("item");
let container = document.getElementById("list");

let todoList = [];

let todo = {
  add : (value) => {
    todoList.push({"text": value, "isCompleted": false});
    view.display();
    console.log(todoList);
    localStorage.setItem("list", JSON.stringify(todoList));
  },
  edit : (value, index) => {
    todoList[index].text = value;
    localStorage.setItem("list", JSON.stringify(todoList));
  },
  toggle : (index) => {
    todoList[index].isCompleted = !todoList[index].isCompleted;
    view.display();
    localStorage.setItem("list", JSON.stringify(todoList));
  },
  delete : (index) => {
    todoList.splice(index, 1)[0];
    view.display();
    localStorage.setItem("list", JSON.stringify(todoList));
  }
};


let view = {
  display : () => {
    let container = document.getElementById("list");
    container.innerHTML = "";
    // console.log(todoList);
    if (todoList.length === 0) {
      console.log("empty");
      container.innerHTML = "";
    } else {
      todoList.forEach((current, index) => {
        let gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.id = index;
        let completeItem = document.createElement("div");
        completeItem.className = "completed";
        if (current.isCompleted) {
          completeItem.innerHTML = "O";
        } else {
          completeItem.innerHTML = "";
        }
        let textItem = document.createElement("label");
        textItem.className = "item";
        textItem.innerHTML = current.text;
        textItem.contentEditable = true;

        let deleteItem = document.createElement("div");
        deleteItem.className = "delete";
        deleteItem.innerHTML = "X";

        container.appendChild(gridItem);
        gridItem.appendChild(completeItem);
        gridItem.appendChild(textItem);
        gridItem.appendChild(deleteItem);
      });
    }
  },
};
// localStorage.setItem("list",JSON.stringify([{"text": "a"}]))
// console.log(JSON.parse(localStorage.getItem("list")));
// let todoList = {};
if (!localStorage.getItem("list")) {
  todo.add("Try out this todo list!");
  todo.add("<-- Toggle the todo");
  todo.add("Delete this todo -->");
  todo.add("Edit any to do by selecting the text");
  todo.add("Add new todos below");

  localStorage.setItem("list", JSON.stringify(todoList));
  // view.display();
} else {
  todoList = JSON.parse(localStorage.getItem("list"));
  // console.log(todoList);
  view.display();
}





container.addEventListener("click", e => {
  let current = e.target;
  if (current.className === "completed") {
    console.log(current, parseInt(current.parentNode.id));
    todo.toggle(parseInt(current.parentNode.id));
  }
  if (current.className === "delete") {
    console.log(current, parseInt(current.parentNode.id));
    todo.delete(parseInt(current.parentNode.id));
  }
});

document.addEventListener("keyup", key => {
  if (key.target.className === "item") {
    let value = key.target.innerHTML;
    let index = key.target.parentNode.id;
    console.log(value, index);
    todo.edit(value, index);
  }
  if (key.target.id === "newTodo" && key.key === "Enter" && key.target.value.length > 0) {
    let value = key.target.value;
    todo.add(value);
    console.log(value);
    key.target.value = "";
  }
});
