const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;

  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

// always request once the last input changed
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// delay the request by setting a timer by each delay time, get one request, ex. resize or scroll
function throttle(cb, delay = 500) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
