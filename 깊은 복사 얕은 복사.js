var person = {
  name: 'lee'
};

// 얕은 복사임. 참조값만 복사가 됨. 
// 원본이 바뀌면 영향 받음.
var copy = person;

// true  동일한 객채 참조
// 객체 인스턴스 비교는 == === object.is() 를 쓰면된다.
// 내부 값 비교, 혹은 아주 큰 오브젝트 비교는 키 비교를 하라는거 같다.
//https://dmitripavlutin.com/how-to-compare-objects-in-javascript
console.log(copy === person);
console.log(Object.is(copy, person));


copy.name = 'kim';
person.name = 'park';

//함께 바뀜.
console.log(person);
console.log(copy);
