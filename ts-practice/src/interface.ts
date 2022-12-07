/*
  Interface
*/

interface Shape {
  getArea(): number; //Shape interface에는 getArea 함수가 반드시 있어야하며 반황값은 number이다.
}

class Circle implements Shape {
  // implements 키워드 사용 -> 해당 클래스가 Shape interface의 조건을 충족

  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
