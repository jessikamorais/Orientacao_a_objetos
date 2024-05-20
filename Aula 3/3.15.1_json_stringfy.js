//Exemplo 3.15.1
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  let json = JSON.stringify(student);

  //O objeto é transformado em texto (formato JSON)
  console.log(json);
  