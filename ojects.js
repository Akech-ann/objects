

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  function person (people){
      let teen = []
      for (let i = 0; i < people.length; i++) {
          if(people[i].age >= 18){
              teen.push(people[i].name)
          }
      }
      return teen
  }
  const x = person(people)
  console.log(x);
  
  const stud = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  const highestScore = (arrayObjs) =>{
    const highArr = []
    arrayObjs.forEach( (student) =>{
      const {name, scores} = student
      const sumScores = scores.reduce( (acc, curVal) => acc + curVal, 0) / scores.length
      if(sumScores >= 85) {
        highArr.push(name)
      }
      return highArr
    })
  }
  const scoringStudents = highestScore(stud)
  console.log(scoringStudents)

  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  function separate(products) {
    const separated = {};
    products.forEach(function(product) {
      if (separated[product.category]) {
        separated[product.category].push(product);
      } else {
        separated[product.category] = [product];
      }
    });
    return separated;
  }
  console.log(separate(products));

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  