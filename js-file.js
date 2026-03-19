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
    let opacity = parseFloat(e.target.dataset.opacity) || 0;

    if (opacity < 1) opacity += 0.2;

    e.target.dataset.opacity = opacity;

    e.target.style.opacity = opacity;
    e.target.style.backgroundColor = "black";
    e.target.style.transition = "ease 0.2s";
  }
}
container.addEventListener("mouseover", blackColorCallBack);

//Random color hover event
function randomColor() {
  let colors = [
    "#8a00ff",
    "#1e00ff",
    "#00d5ff",
    "#00ff1e",
    "#eeff00",
    "#ff5500",
    "#ff00b3",
    "#ff0000",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomColorCallBack(e) {
  if (e.target.matches(".square")) {
    e.target.style.backgroundColor = randomColor();
    e.target.style.transition = "ease 0.2s";
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
