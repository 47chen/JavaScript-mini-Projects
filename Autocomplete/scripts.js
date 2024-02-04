const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grape",
  "Lemon",
  "Orange",
  "Peach",
  "Pear",
  "Strawberry",
];

/* 
TODO --- always clearify all the needs and edge cases first
1. get all ref from DOM
2. add eventListener on input
3. filter + includes value -> to create the filter li
4. clearInput() when use click li | ⭐️ when input change - avoid re-append child
5. assign suggestion value to li.innerText
6. when click li, assign li value to input
*/

const $input = document.getElementById("auto-complete-input");
const $list = document.getElementById("auto-complete-list");

$input.addEventListener("input", () => {
  // - get the input value
  const inputValue = $input.value.toLowerCase();
  clearPrevList();
  // - use input value to filter the sugguest list
  // - 🔥 string.includes() return true if find any char match
  // - array.includes() return true only if match all element
  const filerList = suggestions.filter((suggestion) => {
    return suggestion.toLowerCase().includes(inputValue);
  });

  // 有了filterList, display it on $list with new li
  filerList.forEach((suggestion) => {
    const li = document.createElement("li");
    li.innerText = suggestion;
    $list.appendChild(li);
    // add event listerner to each li - but we can also add event delegation outside on parent elements
  });

  // bug fix - onchange input will re-display filter list
});

// 🔥 event delegation - 也可以在每個li上加上addEventListener, 但效率會比較差
// 把eventListener 放在$list(parent element)上 + e.target 去refer element更有效率

$list.addEventListener("click", (e) => {
  $input.value = e.target.innerText;
  console.log(e.target, $input);
  clearPrevList();
});

const clearPrevList = () => ($list.innerHTML = "");
