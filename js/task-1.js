const fullCategories = document.querySelectorAll('#categories .item');
const itemsArray = [];
const catItems = Object.values(fullCategories);

console.log(`Number of categories:`, fullCategories.length);

fullCategories.forEach(item => {
  const itemsTmp = [];
  item.querySelectorAll(`li`).forEach(itemOfList => {
    itemsTmp.push(itemOfList);
    itemOfList.classList.add(`item-item`);
  });
  itemsArray.push({ [item.querySelector(`h2`).textContent]: [itemsTmp] });
});

for (const index of itemsArray) {
  let category = Object.keys(index)[0];
  let categoryLength = index[category][0].length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${categoryLength}`);
}
