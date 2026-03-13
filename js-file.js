const container = document.querySelector(".container");

const square = document.createElement("div");
square.classList.add("square");

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 256; i++) {
  const clone = square.cloneNode(true);
  fragment.append(clone);
}

container.append(fragment);
