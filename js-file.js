const container = document.querySelector(".container");
const containerWidth = 640;
container.style.cssText = `width: ${containerWidth}px;`;

const square = document.createElement("div");
square.classList.add("square");
const squareWidth = containerWidth / 16;
square.style.cssText = `width: ${squareWidth}px;`;

container.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square")) {
    e.target.classList.add("hover");
  }
});

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 256; i++) {
  const clone = square.cloneNode(true);
  fragment.append(clone);
}
container.append(fragment);
