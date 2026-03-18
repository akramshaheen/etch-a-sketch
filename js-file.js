const setGrid = document.querySelector("#set-grid");
const clear = document.querySelector("#clear");
const colorSwitch = document.querySelector("#color-switch");

const container = document.querySelector(".container");
let grid = 16;

const square = document.createElement("div");
square.classList.add("square");

const generateGrid = () => {
  square.style.flexBasis = `calc(100% / ${grid})`;
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= grid * grid; i++) {
    const clone = square.cloneNode(true);
    fragment.append(clone);
  }
  container.append(fragment);
};

setGrid.addEventListener("click", () => {
  let input = prompt("Enter grid size (16-100):");

  if (input === null) {
    return;
  }

  let userChoice = Number(input);

  if (!Number.isInteger(userChoice) || userChoice > 100 || userChoice < 16) {
    alert("invalid! Please enter a WHOLE NUMBER between 16 and 100.");
  } else {
    grid = userChoice;
    container.innerHTML = "";
    generateGrid();
    return;
  }
});

clear.addEventListener("click", () => {
  container.innerHTML = "";
  generateGrid();
});

generateGrid();

//Black hover event
function blackColorCallBack(e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = "black";
  }
}
container.addEventListener("mouseover", blackColorCallBack);

//Random color hover event
function randomColor() {
  const rdm = "#" + Math.floor(Math.random() * 16777216).toString(16);
  return rdm;
}

function randomColorCallBack(e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = randomColor();
  }
}

colorSwitch.addEventListener("click", () => {
  if (colorSwitch.innerHTML === "Black Mode") {
    colorSwitch.innerHTML = "Color Mode";
    container.removeEventListener("mouseover", blackColorCallBack);
    container.addEventListener("mouseover", randomColorCallBack);
  } else if (colorSwitch.innerHTML === "Color Mode") {
    colorSwitch.innerHTML = "Black Mode";
    container.addEventListener("mouseover", blackColorCallBack);
    container.removeEventListener("mouseover", randomColorCallBack);
  }
});
