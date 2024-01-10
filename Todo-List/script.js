/* TODO:
-- Create a function that adds a new task to the list 
-- need querySelector the get the input value && appendChild to add li to the ul list
-- need to create a new li element -- document.createElement('li') -- and set the textContent to the input value
-- need to add a delete button to the li element -- document.createElement('button') -- and set the textContent to 'Delete'
-- need to append the button to the li element -- li.appendChild(button) - but we don't have a button, only li text, 
I don't want to create a button, I want to create a span element -- document.createElement('span') -- and set the textContent to 'Delete'
-- need to append the li element to the ul element -- ul.appendChild(li)
*/
// why queryselector wont work? because it only selects the first element
// but I set a unique squery in the html tag, so it should work, why no work?
// let button = document.querySelector("[add-button]"); I've tried this, but it doesn't work

let button = document.getElementById("add-button");
let itemContainer = document.querySelector("[data-item-container]");
let inputText = document.querySelector("[data-input]");
let todoList = [];

// 1. create Add new todo function

button.addEventListener("click", addTodoList);

function addTodoList() {
  // let me try first, when I call you, you then provide me some info, right now, don't do anything
  console.log("call addTodoList function");
  // append new li element child after add class and input value to the parent ul element
  let li = document.createElement("li");
  li.classList.add("todo-item");
  let todo = inputText.value;
  li.textContent = todo;
  itemContainer.appendChild(li);
  clearInput();
}

function clearInput() {
  inputText.value = "";
}

console.log(inputText);
console.log({ itemContainer });
console.log({ button });
