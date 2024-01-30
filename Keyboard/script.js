/* 
steps
1. get the dom element $box first
2. document.onkeydown to anchor the user press keyword
3. wrtie a function to control box.style.left, box.style.top
4. offsetLeft / offsetTop to control left top right down
5. add some condition such as speed up, back to originial


*/

const $box = document.getElementById("box");

// document.onkeydown = function (event) {
//   // init divMove for the speed of moving box
//   let divMove = 10;
//   // if press CTRL, speed up
//   if (event.ctrlKey) {
//     console.log("Press CTRL, sit tied, bro!");
//     divMove = 50;
//   } else if (event.altKey) {
//     console.log("Press ALT, Lets go home bro!");
//     $box.style.left = 0;
//     $box.style.top = 0;
//   } else if (event.shiftKey) {
//     let isGreen = $box.style.backgroundColor === "green";
//     console.log("Press Shift, 變色龍來了!");
//     if (!isGreen) $box.style.backgroundColor = "green";
//     if (isGreen) $box.style.backgroundColor = "tomato";
//   }
//   console.log("keyCode" + event.keyCode);
//   switch (event.keyCode) {
//     // left
//     case 37:
//       $box.style.left = $box.offsetLeft - divMove + "px";
//       break;
//     // top
//     case 38:
//       $box.style.top = $box.offsetTop - divMove + "px";
//       break;
//     // right
//     case 39: {
//       $box.style.left = $box.offsetLeft + divMove + "px";
//       break;
//     }
//     // down
//     case 40: {
//       $box.style.top = $box.offsetTop + divMove + "px";
//       break;
//     }
//   }
// };

// document.addEventListener("keydown", (event) => {
//   // init divMove for the speed of moving box
//   let divMove = 10;
//   // if press CTRL, speed up
//   if (event.keyCode == 91) {
//     console.log("Press Capslook, sit tied, bro!");
//     divMove = 500;
//   } else if (event.altKey) {
//     console.log("Press ALT, Lets go home bro!");
//     $box.style.left = 0;
//     $box.style.top = 0;
//   } else if (event.shiftKey) {
//     let isGreen = $box.style.backgroundColor === "green";
//     console.log("Press Shift, 變色龍來了!");
//     if (!isGreen) $box.style.backgroundColor = "green";
//     if (isGreen) $box.style.backgroundColor = "tomato";
//   }
//   console.log("keyCode" + event.keyCode);
//   switch (event.keyCode) {
//     // left
//     case 37:
//       $box.style.left = $box.offsetLeft - divMove + "px";
//       break;
//     // top
//     case 38:
//       $box.style.top = $box.offsetTop - divMove + "px";
//       break;
//     // right
//     case 39: {
//       $box.style.left = $box.offsetLeft + divMove + "px";
//       break;
//     }
//     // down
//     case 40: {
//       $box.style.top = $box.offsetTop + divMove + "px";
//       break;
//     }
//   }
// });

const domKeyBoard = (event) => {
  let divMove = 10;
  // if press CTRL, speed up
  if (event.keyCode == 91) {
    console.log("Press Capslook, sit tied, bro!");
    divMove = 500;
  } else if (event.altKey) {
    console.log("Press ALT, Lets go home bro!");
    $box.style.left = 0;
    $box.style.top = 0;
  } else if (event.shiftKey) {
    let isGreen = $box.style.backgroundColor === "green";
    console.log("Press Shift, 變色龍來了!");
    if (!isGreen) $box.style.backgroundColor = "green";
    if (isGreen) $box.style.backgroundColor = "tomato";
  }
  console.log("Press " + event.key + " Key");
  switch (event.key) {
    // left
    case "ArrowLeft":
      $box.style.left = $box.offsetLeft - divMove + "px";
      break;
    // top
    case "ArrowUp":
      $box.style.top = $box.offsetTop - divMove + "px";
      break;
    // right
    case "ArrowRight": {
      $box.style.left = $box.offsetLeft + divMove + "px";
      break;
    }
    // down
    case "ArrowDown": {
      $box.style.top = $box.offsetTop + divMove + "px";
      break;
    }
  }
};

document.addEventListener("keydown", (event) => domKeyBoard(event));
