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

// let $input = document.getElementById("add-to-do");
// let $listContainer = document.getElementById("list-container");
// let $button = document.querySelector("[add-btn]");

// const LOCAL_STORAGE_KEY = "todo.list";

// $button.addEventListener("click", (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(this);
//   addTodo();
// });

// let curList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

// function clearInput() {
//   $input.value = "";
// }

// function addTodo() {
//   if ($input.value === "") {
//     alert("you must type something!");
//     return;
//   } else {
//     /* create new li element */
//     let li = document.createElement("li");
//     /* get the input value */
//     let newTodo = $input.value;
//     /* assign value to the new li element */
//     li.textContent = newTodo;
//     /* add classList */
//     li.classList.add("list-item");
//     /* append to list-container */
//     $listContainer.appendChild(li);
//     /* span for delete todo */
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   clearInput();
//   save();
// }

// function save() {
//   // remember to stringify dom object to string in order to store in localStorage
//   localStorage.setItem(
//     LOCAL_STORAGE_KEY,
//     JSON.stringify($listContainer.innerHTML)
//   );
// }

// function render() {
//   // assign curList to listContainer.innerHTML
//   $listContainer.innerHTML = curList;
// }

// // handle checked and delete todo
// // event delegation for listContainer
// $listContainer.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() === "li") {
//     e.target.classList.toggle("checked");
//   } else if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//   }
//   save();
// });

// render();

/* 
TODO -
1. get all ref from DOM
3. create addTodo function to add input value to list
-- this need to have get the value from $input.value
-- create new element li
-- add new span ❌ to delete todo
3.5 need delete todo function
-- appendChild to $list-containe

4. display function to display all the list to #list-container.innerHTML
5. check function to check uncheck todo
-- classList.toggle to add checked

@advanced add localstorage to add cache-like list when refreshing the list

*/

{
  /* <input type="text" placeholder="Add to do...">
    <button id="add-btn">Add to do</button>
    <ul id="list-container">
      <li class="complete">Offer from Yahoo</li>
      <li>Have a good day</li>
      <li>Wish all you guys happy new year!</li>
    </ul> */
}
const LOCAL_STORAGE_KEY = "add.todo";

const curList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
console.log(curList);
function save() {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify($listContainer.innerHTML)
  );
}

function render() {
  $listContainer.innerHTML = curList;
  save();
}

const $input = document.getElementById("todo-input");
const $listContainer = document.getElementById("list-container");
const $btn = document.getElementById("add-btn");

$btn.addEventListener("click", () => {
  addTodo();
});

const addTodo = () => {
  const todo = $input.value;
  if (todo === "") alert("You must type something in order to add todo");
  else {
    const li = document.createElement("li");
    li.innerText = todo;
    const deleteBtn = document.createElement("span");
    deleteBtn.innerText = "❌";
    li.appendChild(deleteBtn);
    $listContainer.appendChild(li);
    clearInput();
    save();
  }
};

const clearInput = () => {
  $input.value = "";
};

// later on we will add event delegation on listContainer
// if we click li, it means checkTodo, if we click span, it means delete Todo

$listContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    // ⭐️ forget the syntax how to remove node
    // span is the child of li, we can use parentElement to remove
    e.target.parentElement.remove();
  }
});

// @ advanced - add localstorage to make a cache-like list
// save() function to save the curList to localStorage
render();
