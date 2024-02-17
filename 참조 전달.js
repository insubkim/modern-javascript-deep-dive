var person = {
  name: 'insub'
};

var some_str = 'hello js';
// 원시값은 call by value
// 객체는 call by reference 로 작동한다.
function callByReference(person, some_str) {
  person.name = 'lemonade';
  some_str = 'HELLO JS';
}

console.log(person);
console.log(some_str);

callByReference(person, some_str);

console.log(person);
console.log(some_str);
