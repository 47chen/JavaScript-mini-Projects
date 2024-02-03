/*
TODO
1. get DOM reference
2. addEventListener on input field
3. display normal
4. create debounce function
5. create throttle function
6. create updatefunction arg passed by the input value
*/

const $input = document.getElementById("input-field");
const $normal = document.getElementById("normal");
const $debounce = document.getElementById("debounce");
const $throttle = document.getElementById("throttle");

// 用this + w/o arrow function可以這樣用
// $input.addEventListener("input", function (e) {
//   e.preventDefault();
//   console.log(this); // 指向當前event.target
//   updateNormal(this.value);
// });

// ⭐️ event delegation
$input.addEventListener("input", (e) => {
  e.preventDefault();

  updateNormal(e.target.value);
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

const updateNormal = (text) => {
  $normal.innerText = text;
};

// ⭐️ why write code like this?
// since we wrtie debounce function() as a factory helper,
// we accept any form of argument (...args)
// And the updateDebounceText is use to update $debounce value
const updateDebounceText = debounce((text) => ($debounce.innerText = text));
const updateThrottleText = throttle((text) => ($throttle.innerText = text));
// always request once the last input changed
// accept a callback and optional delay
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// ⭐️ always delay request by setting wait boolean and delay timeout
function throttle(cb, delay = 1000) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, 1000);
  };
}

/* 
🔥🔥🔥 Takeaway Sumup 學會用中文解釋

1. The reason why we wrtie function like this
- function throttle() {
  return () => {}
- }
is because ⭐️ Encapsulation(factory customized purpose) | Closures 
and 
⭐️ const updateThrottleText = throttle(() => ...) 🔥 Invoke the outer function and get the return function
updateThrottleText(); 🔥 Invoke the return function
-----------------------------------------------------
⭐️2. Debounce:
- Delays the execution of a function until after a specified delay period.
- If the function is called multiple times within the delay, the timer is reset.
- Useful for scenarios like 👉 handling user input (e.g., typing) to wait for a pause before triggering an action.

-----------------------------------------------------

⭐️3. Throttle:

- Limits the rate at which a function is invoked to a fixed interval.
- Ensures that the function is called at most once within the specified interval.
- Useful for scenarios like 👉handling scroll events to reduce the frequency of function calls.
*/
