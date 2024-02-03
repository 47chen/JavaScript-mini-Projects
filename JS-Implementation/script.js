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

/* 8. ⭐️⭐️⭐️ deepEqual - 明天來寫 
algorithms steps - function deepEqual(value, other)
*/
const deepEqual = function (o1, o2) {
  // 👉 check type
  if (typeof o1 !== typeof o2) {
    return false;
  }

  // 👉 check primitive data and whether is null or not
  if (typeof o1 !== "object" || o1 === null || o2 === null) {
    return o1 === o2;
  }

  // 👉 check both array
  if (Array.isArray(o1) !== Array.isArray(o2)) {
    return false;
  }

  // 👉 if array check - same length | same element
  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) {
      return false;
    }

    for (var i = 0; i < o1.length; i++) {
      if (!deepEqual(o1[i], o2[i])) {
        return false;
      }
    }

    return true;
  }

  // 👉 到這邊就確定是object了, check key.length | value in object
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    if (!keys2.includes(key) || !deepEqual(o1[key], o2[key])) {
      return false;
    }
  }

  return true;
};
/* primitive data check */
console.log("------ check prim data ------");
console.log(deepEqual(null, null)); // true
console.log(deepEqual(NaN, NaN)); // true
console.log(deepEqual(NaN, 1)); // false
console.log(deepEqual(2, 1)); // false
console.log(deepEqual(2, true)); // false
/* object check */
console.log("------ check object data ------");
console.log(deepEqual([1], [1])); // true
console.log(deepEqual([1], [2])); // false
console.log(deepEqual([1], [1, 2])); // false
console.log(deepEqual([1], 5)); // false
const ori_obj = { a: 12, b: 1 };
const sha2_obj = ori_obj; // shallow copy
console.log(deepEqual(ori_obj, sha2_obj), ori_obj, sha2_obj); // true
const sha_obj = Object.assign({}, ori_obj);
console.log(deepEqual(ori_obj, sha_obj), "sha vs obj"); // true
console.log(deepEqual({ a: 12 }, { a: 12 })); // ✅ true
console.log(deepEqual({ a: 12 }, { b: 12 })); // false
console.log(deepEqual({ a: 12 }, { a: 1 })); // false

/* 9. Implement Promise.race 
- accept an iterable promises ex. array, map, set
- and return the first one which is fulfilled or reject
*/
const promise1 = new Promise((resolve, reject) => resolve(3));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve after 2 second");
  }, 2000);
});
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(() => {
//     reject("This one is rejected");
//   }, 1000)
// );
function promiseRace(promise_array) {
  // ⭐️ 回傳最先fulfilled or rejected => 跟順序沒有關係，誰先resolve/reject誰先return
  // iterate through the promise_array
  // whenever there is one resovle or reject, we return that promise
  // promise.all return an array of promises
  // promise.race return a promise that is firstly resolved or rejected
  // ❌ 我以為value => value就可以當作回傳值，但promiseRace要回傳一個promise!
  // promise_array.forEach((promise) => {
  //   promise.then((value) => value).catch((err) => err);
  // });
  // ✅ return new Promise
  return new Promise((resolve, reject) => {
    for (const promise of promise_array) {
      promise.then((val) => resolve(val)).catch((err) => reject(err));
    }
  });
}
// const results = promiseRace([promise3, promise2]); // This one is rejected
// const results2 = promiseRace([promise2, promise3]); // after 2 sec, return resolve after 2 second
// results.then((val) => console.log(val)).catch((err) => console.log(err));
// results2.then((val) => console.log(val)).catch((err) => console.log(err));

/* 10. call() apply() bind() | this */
