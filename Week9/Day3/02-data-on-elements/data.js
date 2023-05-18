// Your code here
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("form");
  const list = document.getElementById("shopping-list");

  const eventHandler = (event) => {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const newListItem = document.createElement("li");
    newListItem.innerText = `${type.toUpperCase()} | ${name.toUpperCase()}`;
    newListItem.setAttribute("data-type", type);
    list.appendChild(newListItem);
    form.reset();
    event.preventDefault();
  }

  form.addEventListener("submit", eventHandler);

})