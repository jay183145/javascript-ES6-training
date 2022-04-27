const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * 陣列透過搜尋條件（查詢）過濾物件
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
