/* flaten array - LeetCode 2625 */
// array.flat() - data preprocessing
//
const people = [
  { name: "Mike", items: ["hammer", "axe"] },
  { name: "Steve", items: ["rock", "stick"] },
];

const allItems = people.map((p) => p.items).flat();
console.log(allItems);

/* Recursive flatten array */
const flat = function (arr, n) {
  if (n === 0) return arr; // recursive endpoint
  let res = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      res.push(...flat(element, n - 1));
    } else res.push(element);
  }

  return res;
};

/* 另外一種寫法 */
const flat2 = function (arr, n) {
  let res = [];
  const flattenArray = (ar, l) => {
    for (const a of ar) {
      if (Array.isArray(a) && l > 0) {
        flattenArray(a, l - 1);
      } else res.push(a);
    }
  };
  flattenArray(arr, n);
  return res;
};

const test = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(test, 1));
console.log(flat(test, 2));
console.log("-------------------");
console.log(flat2(test, 1));
console.log(flat2(test, 2));

/* 
key takeaway
- Array.isArray(element) - check whether element is array
if yes, do recursive
if no, directly push the element into res[]

- recursive need an endpoint so the function know when to stop,
otherwise, it will continue on forevery(TLE)
--- if(n === 0) return arr
same as if(node == null) in dfs
*/

/* ----  ---- Flatten Nested Object using typeof ---- ---- */
/* 
Algorithm:
- iterate through key-value pair in object
-** check whether current value is object && !Array
- if is object, invoke recursive call which will return an object
    - iterate through that obj and add parentkey + '.' + childkey to get a.b.c
- if not an object, directly add key-value pair 

*/

const flattenObject = (obj) => {
  const res = {};

  for (const parentKey in obj) {
    // check whether it is a object and not array
    if (typeof obj[parentKey] === "object" && !Array.isArray(obj[parentKey])) {
      const subObject = flattenObject(obj[parentKey]);
      for (const subKey in subObject) {
        res[parentKey + "." + subKey] = subObject[subKey];
      }
    } else res[parentKey] = obj[parentKey];
  }
  return res;
};

let testObj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
    Backend: {
      framework: ["nodejs", "express", "django"],
      RDBMS: "MongoDB",
    },
  },
};

console.log(flattenObject(testObj));
