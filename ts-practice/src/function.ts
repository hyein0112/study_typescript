/* 
  인자와 리턴값에 타입 지정이 가능
*/

function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

function sumArray(numbers: Array<number>): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

/* 
  반환하지 않는 함수는 반환 타입을 void로 설정
*/

function returnNothing(): void {
  console.log("I am just saying hello world");
}
