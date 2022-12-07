/* 
  타입 지정을 하지 않을 경우 가정 먼저 들어온 값의 타입으로 지정.
*/

let count = 0; //count -> number
count += 1;
count = "string"; //error

/*  
  : 사용하여 타입지정  
  ex) const a: number = 1
*/

const message: string = "hello world";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];
numbers.push(4);
messages.push("!");
messages.push(1); //error

let mightBeUndefined: string | undefined = undefined; // string type or undefined type
let nullableNumber: number | null = 1; //number type or null type

let color: "red" | "orange" | "yellow" = "red"; // red type or orange type or yellow type
color = "yellow";
color = "green"; //error

let anyType: any = 1; // any type is possible
anyType = "hello world";
anyType = [1, 2, 3];
