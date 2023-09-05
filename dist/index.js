const bill = document.querySelector(".bill");
const people = document.querySelector("#people");
const btn = document.querySelector("#reset");
const custom = document.querySelector(".custom");
const btns = document.querySelectorAll(".btn");
const errorElement = document.querySelector("#error");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");

people.addEventListener("focus", () => {
  errorElement.style.display = "none";
  people.style.borderWidth = "0px";
});

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
