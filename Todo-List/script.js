// TODO 1: get DOM elements for reference
let input = document.querySelector("[data-input]");
let listContainer = document.querySelector("[data-list-container]");
let todoLists = [
  "create addTodo func",
  "create render func",
  "create delete func",
];

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
  todoLists.push(input.value);
  clearInput();
  render();
}

render();
// TODO 4: delete todo function -- use span to delete todo

// TODO 5: Save() using localStorage
