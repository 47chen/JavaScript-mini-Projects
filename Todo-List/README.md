![Demo Image](https://github.com/47chen/JavaScript-mini-Projects/assets/44563581/726bf3cd-fdef-4d91-a724-b816bfc2511f)

- Get HTML elements in JS to manipulate its DOM attribute
  - getElementById
  - getElementByClassName (may return array)
  - getElementByTagName
  - querySelector('[find-query-in-html-tag]')

- Create/Get DOM attribute | classList.add() classList.toggle()
  - let li = document.createElement("li")
  - li.innerText = htmlElement.value (htmlElement -- input = querySelector('[todo-input]'
  - li.classList.add('todo-item')
  - listContainer.appendChild(li)
  
  - toggle - add/remove className to the HTML tag
    - listContainer.addEventListener(
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

- innerHTML vs innerText vs innerContent

- localStorage, sessionStorage
  - let curList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  - localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(listContainer.innerHTML)
  - sessionStorage syntax same as localStorage
