const setGrid = document.querySelector("#set-grid");

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

generateGrid();

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

container.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square")) {
    e.target.classList.add("hover");
  }
});
