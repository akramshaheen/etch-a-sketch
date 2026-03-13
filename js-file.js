const container = document.querySelector(".container");
const width = 640;
container.style.cssText = `width: ${width}px;`;

const square = document.createElement("div");
square.classList.add("square");
const squareWidth = width / 16;
square.style.cssText = `width: ${squareWidth}px;`;

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 256; i++) {
  const clone = square.cloneNode(true);
  fragment.append(clone);
}

container.append(fragment);
