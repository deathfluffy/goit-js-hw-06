const categoryItems = document.querySelectorAll(".item");

console.log(`Number of categories ul#categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.lenght}`);
});
