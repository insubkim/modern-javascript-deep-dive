var person = {
  name: 'insub'
};

console.log(person.name);

const circle = {
  radius: 10,

  getDiameter() {
    return 2 * this.radius + ' 파이';
  }

};

console.log(circle.getDiameter());

function Circle(radius) {
  this.radius = radius;
};

const circle1 = new Circle(20);