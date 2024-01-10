// TODO 1: get DOM elements for reference
let listContainer = document.querySelector("[data-list-container]");
let input = document.querySelector("[data-input]");
const LOCAL_STORAGE_KEY = "todo.lists";

let todoLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

// TODO 2: render the list of todos
function render() {
  listContainer.innerHTML = "";
  // why we set this to empty string?
  // because we want to clear the listContainer before we render the new todo
  todoLists.forEach((todo) => {
    let newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    listContainer.appendChild(newTodo);
  });
}

function clearInput() {
  input.value = "";
}

// TODO 3: add new todo function
function addTodo() {
  if (input.value === "") {
    alert("You must write something!");
    return;
  }
  todoLists.push(input.value);
  clearInput();
  save();
  render();
}

render();
// TODO 4: delete todo function -- use span to delete todo

// TODO 5: Save() using localStorage

function save() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoLists));
  // console.log(todoLists);
  // console.log(JSON.stringify(todoLists));
  // console.log(localStorage.getItem(LOCAL_STORAGE_KEY));
  // console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
}
