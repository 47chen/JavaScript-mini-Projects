// const suggestions = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Date",
//   "Grape",
//   "Lemon",
//   "Orange",
//   "Peach",
//   "Pear",
//   "Strawberry",
// ];

// const input = document.getElementById("autocomplete-input");
// const list = document.getElementById("autocomplete-list");

// input.addEventListener("input", () => {
//   console.log("123");
//   const inputValue = input.value.toLowerCase();
//   clearPrevList();

//   // filter and display matching suggestions
//   const filterSuggestions = suggestions.filter((suggestion) =>
//     suggestion.toLowerCase().includes(inputValue)
//   );

//   // then we based on the filter suggestions to paint the html element
//   filterSuggestions.forEach((suggestion) => {
//     // create li element and assign suggestion to DOM node
//     const listItem = document.createElement("li");
//     listItem.textContent = suggestion;

//     listItem.addEventListener("click", () => {
//       input.value = suggestion;
//       clearPrevList();
//     });
//     list.appendChild(listItem);
//   });
// });

// function clearPrevList() {
//   list.innerHTML = "";
// }

// Sample data for autocomplete
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

// Get input and list elements
// const input = document.getElementById("autocomplete-input");
// const list = document.getElementById("autocomplete-list");

// // Event listener for input changes
// input.addEventListener("input", function (e) {
//   console.log("successfully add listner");
//   const inputValue = e.target.value.toLowerCase();
//   // Clear previous suggestions
//   list.innerHTML = "";

//   // Filter and display matching suggestions
//   const filteredSuggestions = suggestions.filter((suggestion) =>
//     suggestion.toLowerCase().includes(inputValue)
//   );
//   filteredSuggestions.forEach((suggestion) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = suggestion;
//     // Add click event to populate input with clicked suggestion
//     listItem.addEventListener("click", function () {
//       console.log("123");
//       input.value = suggestion;
//       list.innerHTML = "";
//     });
//     list.appendChild(listItem);
//   });
// });
const input = document.getElementById("auto-complete-input");
const list = document.getElementById("list-container");
console.log(typeof list);

input.addEventListener("input", () => {
  const inputValue = input.value.toLowerCase();
  clearPrevList();
  console.log("running input eventListener");
  const filterList = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue)
  );
  console.log(filterList);

  filterList.forEach((fList) => {
    const listItem = document.createElement("li");
    listItem.textContent = fList;
    listItem.addEventListener("click", () => {
      input.value = fList;
      clearPrevList();
    });
    console.log(typeof list);
    list.appendChild(listItem);
  });
});

function clearPrevList() {
  list.innerHTML = "";
}
