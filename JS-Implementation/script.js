/* 1. Implement clamp - ex. clamp(number, low_boundary, high_boundary)  */
const clamp = (num, low, high) => {
  if (num < low) return low;
  else if (num > high) return high;

  return num;
};

console.log(clamp(7, 0, 9)); // 7
console.log(clamp(-12, -4, 5)); // -4
console.log(clamp(18, 3, 9)); // 9

/* 2. Implement Chunk ex. chunk(arr, n) -> split arr into n part */

// edge case??? arr.length = 8, n = 3, can I split into 3, 3, 2? yes
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

const chunkedArray = (arr, n) => {
  if (arr.length === 0) return [];
  let res = [];
  let sub = [];
  let counter = 0;
  arr.forEach((a) => {
    sub.push(a);
    counter++;
    if (counter == n) {
      // push sub to res reset counter, sub
      counter = 0;
      res.push(sub);
      sub = [];
    }
  });
  // edge case
  if (sub.length !== 0) res.push(sub);
  return res;
};
console.log(chunkedArray(array1, 3));
console.log(chunkedArray(array2, 3));

/* 3. Implement compact - filter all falsy value in an array 
      👉 compact() return a new array
*/

const arr3 = [0, 1, false, 2, "", 3, "hello"];
const arr4 = [null, undefined, NaN, " "];
const arr5 = [{ name: "Alice" }, null, { age: 30 }, undefined];

const compact1 = (arr) => {
  let res = [];
  arr.forEach((a) => {
    if (a) res.push(a);
  });

  return res;
};
const compact2 = (arr) => arr.filter((a) => a && a);
console.log(compact2(arr3)); // [1,2,3,'hello']
console.log(compact2(arr4)); // [' ']
console.log(compact2(arr5)); // [{name:'Alice},{age:30}]

/* 4. Implement difference - take two array as args, return unique value in first arg array  */

const difference = (arr1, arr2) => {
  const set = new Set(arr2);
  let res = [];
  arr1.forEach((a) => {
    if (!set.has(a)) res.push(a);
  });
  return res;
};

console.log(difference([1, 2, 3], [2, 3])); // 1
console.log(difference([1, 1, 2, 3], [2, 3])); // [1,1] - cannot use hashset
console.log(difference([1, 2, 3], [2, 3])); // 1

/* 5. ⭐️ Implement dropRightWhile - use counter to check how many item should we slice 
notice that second arg is a callback function return true|false
*/
const dropRightWhile = (array, cb) => {
  if (array.length === 0) return [];

  let len = array.length - 1;
  let counter = 0;
  for (let i = len; i >= 0; i--) {
    if (cb(array[i])) {
      counter++;
    } else break;
  }
  return array.slice(0, array.length - counter);
};

console.log(dropRightWhile([10, 20, 30, 40, 50, 10], (value) => value !== 10));
console.log(dropRightWhile([1], (value) => value > 0));
console.log(
  dropRightWhile(
    [
      { name: "Alice", age: 25 },
      { name: "Charlie", age: 20 },
      { name: "Bob", age: 30 },
    ],
    (obj) => obj.age > 25
  )
); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

/* 6. Debounce(防抖)🔥中文解釋: 
透過延遲呼叫function, 直到delay完成, 才執行特定function()來達到優化 
ex. Handle User Input Search -ex. autocomplete 打api
wait for a pause before triggering an action
*/

const debounce = (cb, delay = 1000) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

/* 7. Throttle(節流)🔥中文解釋：
在一段時間內只會執行一次觸發事件的回調(callback)函式
若在這個時間間隔內又有新事件觸發，則不執行此callback

- use a boolean shouldWait to handle throttle

- 監聽事件 scrolling event
*/

const throttle = (cb, delay = 1000) => {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
};

/* 8. ⭐️⭐️⭐️ deepEqual - 明天來寫 */
