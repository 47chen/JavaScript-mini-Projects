// TODO 1: get DOM elements for reference
let listContainer = document.querySelector("[data-list-container]");
let input = document.querySelector("[data-input]");
const LOCAL_STORAGE_KEY = "todo.lists";

let curList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function addTodo() {
  if (input.value === "") {
    alert("You must write something!");
    return;
  } else {
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerText = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  clearInput();
  save();
}

// function render() {
//   listContainer.innerHTML = "";
//   // why we set this to empty string?
//   // because we want to clear the listContainer before we render the new todo
//   todoLists.forEach((todo) => {
//     let newTodo = document.createElement("li");
//     newTodo.classList.add("todo-item");
//     newTodo.innerText = todo;
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     newTodo.appendChild(span);
//     listContainer.appendChild(newTodo);
//   });
// }

function clearInput() {
  input.value = "";
}

function save() {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(listContainer.innerHTML)
  );
}

function render() {
  listContainer.innerHTML = curList;
}

// TODO : check todoList

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName.toLowerCase() === "span") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

// TODO: Delete TodoList

render();
