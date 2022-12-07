/*
  Class에서의 Interface
*/

interface Shape {
  getArea(): number; //Shape interface에는 getArea 함수가 반드시 있어야하며 반황값은 number이다.
}

// Circle Class
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

// Rectangle Class
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

console.log(circle.radius); // radius를 public으로 설정했기 때문에 접근 가능.

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

/*
  ---------------------------
  일반 객체를 interface로 타입 설정
*/

interface Person {
  name: string;
  age?: number; // ? -> 필수가 아닌 값임을 뜻한다.
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "김사람",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

const people: Person[] = [person, expert];
console.log(people);
