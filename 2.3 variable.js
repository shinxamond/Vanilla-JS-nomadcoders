let a = 5;  //변수를 업데이트 하려면 let
const b = 2; //업데이트 없이 초기화 그대로 상수면 const
var myName = "nari";

console.log(a + b); //콘솔에 메세지를 보내는 코드
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

// let c=5;
// let c=6; 이렇게 재선언은 안 되는데

// let c=5;
// c=6; 이렇게 재할당은 가능

// const는 재선언, 재할당 모두 불가능
// var는 재선언, 재할당 모두 가능

// 기본적으로 const를 쓰되, 필요한 경우에만 let을 쓸 것.
// const와 let은 각각의 뜻이 있지만
// 예) const : 바꾸지 않고 고정할 값
// let : 후에 업데이트 할 수도 있는 값
// var은 뜻이 없기 때문에 var를 쓰지 말아라.
// const로 값을 보호할 수 있다. 그리고 이것들을 모두 variable 이라고 한다.