const container = document.querySelector("#阿公");

/* 
🔥 Event Delegation
when you don't want to add too many same eventListener on same elements
we can use event delegation on the parent container
👉 use event.target to target the element we use
ex. e.target.tagName.toLowerCase() === "li" (todoList)
    e.target refer to the element we click

🔥 currentTarget - return the element whose event listener trigger the event
ex. 阿公當container - currentTarget =<div id='阿公'></div>
ex. #container當container - currentTarget = <div id='container'></div>
- read-only
- useful during capturing and bubbling
🔥 e.currentTarget vs e.target
- currentTarget refer to the element whose event listener trigger the event
- target refer to the elemen that triggered the event

-- 總結
when we add lots of event listeners within  parent -> child-> grand-child ...
1. capturing | bubbling 是event傳遞的兩個原則(跟DOM 是Tree有關) 
- lastChild element會一路往上(bubbling) trigger event listener (看隔壁event-bc.html)
2. 當事件傳到target本身，沒有分capturing and bubbling
3. 透過event-delegation, 我們可以直接對(parent)做eventListener
- 提高效率
- 透過冒泡捕獲原則，自動由parent element往下傳
*/

container.addEventListener("click", (e) => {
  console.log(e.currentTarget, ":", e.target);
  if (e.target.id === "container") return;
  // Assign value(basic)
  //   if (e.target.style.backgroundColor == "blue") {
  //     e.target.style.backgroundColor = "red";
  //   } else e.target.style.backgroundColor = "blue";
  let random = Math.random().toFixed(2);
  random *= 100;
  // Toggle className 😎
  if (random > 50) {
    e.target.classList.toggle("blue");
  } else e.target.classList.toggle("tomato");

  console.log(random);
});
