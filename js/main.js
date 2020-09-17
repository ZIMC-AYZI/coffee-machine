const coffeeList = [
  { name: `late`, price: 6, id: 0 },
  { name: `mocachino`, price: 12, id: 1 },
  { name: `expresso`, price: 11, id: 2 },
  { name: `capuchino`, price: 18, id: 3 },
  { name: `mocco`, price: 7, id: 4 },
];
let pay = document.querySelector(".pay");
let coffeeMenu = document.querySelector(".coffee-menu");
coffeeMenu.innerHTML = getRenderedCoffeeList(coffeeList);
function getRenderedCoffeeList(coffeeList) {
  return coffeeList.reduce(
    (html, { name, id }) =>
      html +
      `
  <button data-uid="${id}">${name}</button>
  `,
    ""
  );
}
coffeeMenu.addEventListener("click", (e) => {
  pay.style.display = "none";
  let currentElement = e.target;
  const coffeeId = +currentElement.getAttribute("data-uid");
  const coffee = coffeeList.find((coffee) => coffee.id === coffeeId);
  showDisplay(".text-display", renderDisplay(coffee));
  buyCoffee(coffee);
});

{
  function renderDisplay(coffee) {
    return `
  <div class="display-Content"> Name : ${coffee.name} $</div>
  <br>
  <div class="display-Content"> Price : ${coffee.price} $</div>
  `;
  }
  function displayBuy(coffee) {
    return `
 <div class="display-Content"> You choose: ${coffee.name} $</div>
 <div class="display-Content"> You must pay: ${coffee.price} $</div>
 `;
  }

  function showDisplay(container, content = "") {
    const display = document.querySelector(container);
    let displayBody = document.querySelector(".display");
    displayBody.innerHTML = content;
  }
}
function buyCoffee(coffee) {
  let buyButton = document
    .querySelector(".buy-coffee")
    .addEventListener("click", (e) => {
      showDisplay(".text-display", displayBuy(coffee));
      let pay = (document.querySelector(".pay").style.display = "block");
    });
}

function renderDisplayMakeCoffee() {
  pay.addEventListener("click", (e) => {
    progressDemo();
    pay.style.display = "none";
  });
}
renderDisplayMakeCoffee();

function progressDemo() {
  let counter = 10;
  let timer = setInterval(() => {
    counter--;
    showDisplay(".text-display", "Please wait " + counter);
    if (counter <= 0) {
      clearInterval(timer);
      showDisplay(".text-display", "Take your coffee");
    }
  }, 1000);
}
