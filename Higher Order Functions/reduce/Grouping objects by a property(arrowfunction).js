const peoples = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

  const grouping = (people, property) =>{
    return people.reduce((acc, obj) => {
            let key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        },{})
    }
let firstgroup = grouping(peoples, 'age');
console.log(firstgroup);