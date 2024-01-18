let inputBx = document.getElementById("inputBx");
let list = document.getElementById("list");

inputBx.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addItem(inputBx.value);
    inputBx.value = "";
  }
});
let addItem = (inputBx) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBx}<i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });
  list.appendChild(listItem);
};
