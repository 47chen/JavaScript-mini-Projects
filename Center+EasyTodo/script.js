/* 
get the dom element first
TODO
- get the input text value 
- onclick button to append child
- append child need to createElement and 'addClass'(classList.add) and 'appendChild'
- toggle - e.target.classList.toggle('check') - we can use text-decoration:
*/
// addTodo
// save
// render
// event delegation for listContainer

let $input = document.getElementById("add-to-do");
let $listContainer = document.getElementById("list-container");
let $button = document.querySelector("[add-btn]");

const LOCAL_STORAGE_KEY = "todo.list";

$button.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(this);
  addTodo();
});

let curList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

function clearInput() {
  $input.value = "";
}

function addTodo() {
  if ($input.value === "") {
    alert("you must type something!");
    return;
  } else {
    /* create new li element */
    let li = document.createElement("li");
    /* get the input value */
    let newTodo = $input.value;
    /* assign value to the new li element */
    li.textContent = newTodo;
    /* add classList */
    li.classList.add("list-item");
    /* append to list-container */
    $listContainer.appendChild(li);
    /* span for delete todo */
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  clearInput();
  save();
}

function save() {
  // remember to stringify dom object to string in order to store in localStorage
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify($listContainer.innerHTML)
  );
}

function render() {
  // assign curList to listContainer.innerHTML
  $listContainer.innerHTML = curList;
}

// handle checked and delete todo
// event delegation for listContainer
$listContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  save();
});

render();
