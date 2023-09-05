const bill = document.querySelector(".bill");
const people = document.querySelector("#people");
const btn = document.querySelector("#reset");
const custom = document.querySelector(".custom");
const btns = document.querySelectorAll(".btn");
const errorElement = document.querySelector("#error");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");

// if (people.value == 0) {
//   messages.push("Can't be zero");
// }

people.addEventListener("focus", () => {
  // people.style.borderColor = "hsl(172, 67%, 45%)";
  // people.style.borderWidth = "2px";

  // people.style.borderColor = "";
  errorElement.style.display = "none";
  people.style.borderWidth = "0px";
});

// people.addEventListener("focus", () => {
//   people.style.borderWidth = "0px";
// });

// function finallResult() {
//   let messages = [];
//   btn.addEventListener("click", (e) => {
//     if (custom.value > 0 && people.value > 0) {
//       output1.textContent = result(bill.value, custom.value).toFixed(2);
//     } else {
//       messages.push("Can't be zero");

//       people.style.borderColor = "rgb(244 63 94)";
//       people.style.borderWidth = "2px";
//     }
//     custom.value = "";
//     if (messages.length > 0) {
//       errorElement.textContent = messages[0];
//       e.preventDefault();
//     }
//   });
//   // resultTip();
//   // custom.value = "";
//   // console.log("this is the custom value ");

//   if (custom.value == 0) {
//     console.log(result(bill.value, resultTip));
//   }
// }

// finallResult();

// function resultTip() {
//   let number;
//   btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       number = parseInt(btn.textContent.trim());
//       console.log(number);
//     });
//   });
// }
// resultTip();

// function result(num, per) {
//   return ((num / 100) * per) / people.value;
// }

// if (custom.value == 0) {
//   btn.addEventListener("click", (e) => {
//   });
// } else {
//   console.log("not my job");
// }

// btn.addEventListener("click", () => {
//   if (custom.value > 0) {
//     console.log(result(bill.value, custom.value));
//     // custom.value = 0;
//   }
//   custom.value = "";
// });
// resultTip();

// btn.addEventListener("click", (e) => {
//   let messages = [];
//   if (people.value === "" || people.value == null) {
//     messages.push("Can't let this be empty");
//   }
//   if (custom.value > 0) {
//     console.log(result(bill.value, custom.value));
//   }
//   if (custom.value <= 0) {
//     // btns.forEach((btn) => {
//     //   console.log(btn.textContent);
//     // });
//     // let array = [];
//     // btns.forEach((btn) => {
//     //   btn.addEventListener("click", (e, i) => {
//     //     const precentig = parseInt(e.currentTarget.textContent);
//     //     array.shift();
//     //     array.push(precentig);
//     //     console.log(Number(array.join("")));
//     //   });
//     // });
//     // in process
//     // let array = [];
//     // btns.forEach((btn) => {
//     //   btn.addEventListener("click", (e) => {
//     //     const btnText = parseInt(btn.textContent.trim());
//     //     // console.log(btnText);
//     //     array.shift();
//     //     array.push(btnText);
//     //     // console.log(Number(array.join("")));
//     //     console.log(array);
//     //     console.log(result(bill.value, array));
//     //   });
//     // });
//     // btns.forEach((btn, i, arr) => {
//     //   btn.textContent();
//     // });
//     // let number;
// let number;
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     number = parseInt(btn.textContent.trim());
//     // console.log(btnText);
//     // console.log(result(bill.value, number));
//     console.log(result(bill.value, number) / people.value);
//   });
// });

//   if (messages.length > 0) {
//     error.textContent = messages;
//     e.preventDefault();
//   }
// });

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e, i) => {
//     const precentig = parseInt(e.currentTarget.textContent);
//     array.shift();
//     array.push(precentig);
//     console.log(result(bill.value, Number(array.join(""))));
//     console.log(Number(array.join("")));
//   });
// });

// let array = [];
// let array1 = [...array];

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const btnText = parseInt(btn.textContent.trim());
//     // console.log(btnText);
//     array.shift();
//     array.push(btnText);
//     // console.log(Number(array.join("")));
//     // console.log(array);
//     console.log(result(bill.value, array));
//   });
// });
// btns.forEach((btn, i, arr) => {
//   btn.textContent();
// });

// console.log(array1);

// const ages = [20, 28, 19, 56];
// const newAges = [];

// ages.forEach(function (age) {
//   newAges.push(age + 5);
// });

// console.log(newAges);
// Output: [25, 33, 24, 61]
// let playerChoice;
// let setPlayerChoice = (choice) => {
//   playerChoice = choice;
//   // we can use the value of playerChoice now,
//   // because this callback is being triggered
//   // by the user clicking the button.
//   console.log(playerChoice);
// };
// btns.forEach((button) => {
//   button.addEventListener("click", () => {
//     setPlayerChoice(button.textContent);
//   });
// });

function result(num, per) {
  return ((num / 100) * per) / people.value;
}

function finallResult() {
  let messages = [];
  btn.addEventListener("click", (e) => {
    if (people.value == 0 || people.value == null) {
      e.preventDefault();
      messages.push("Can't be zero");
      errorElement.textContent = messages[0];
      errorElement.style.display = "block";
      people.style.borderColor = "rgb(244 63 94)";
      people.style.borderWidth = "2px";
    } else {
      let finallResult = (
        Math.round(result(bill.value, custom.value) * 100) / 100
      ).toFixed(2);

      console.log(finallResult);
      let total = result(bill.value, custom.value) * people.value;
      if (custom.value > "") {
        output1.textContent = `$${finallResult}`;
        output2.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;
        custom.value = "";
      } else {
        output1.textContent = `$${finallResult}`;
        output2.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;
        // output2.textContent = `$${}`;
      }
    }
  });
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      number = parseInt(btn.textContent.trim());
      custom.value = number;
    });
  });
}

finallResult();

let num = 2;

// console.log((Math.round(num * 100) / 100).toFixed(2));
