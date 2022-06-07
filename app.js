//-----------------------------<2.3>-variable-----------------------------

let a=5;  //변수를 업데이트 하려면 let
const b=2; //업데이트 없이 초기화 그대로 상수면 const
var myName="nari";

console.log(a+b); //콘솔에 메세지를 보내는 코드
console.log(a*b);
console.log(a/b);
console.log("hello" + myName);

// let c=5; 
// let c=6; 이렇게 재선언은 안 되는데

// let c=5;
// c=6; 이렇게 재할당은 가능

// const는 재선언, 재할당 모두 불가능
// var는 재선언, 재할당 모두 가능

// 기본적으로 const를 쓰되, 필요한 경우에만 let을 쓸 것.
// const로 값을 보호할 수 있다. 그리고 이것들을 모두 variable 이라고 한다.

//-----------------------------<2.4>-boolean------------------------------

const amIFat=false;
console.log(amIFat); // true/false는 사용자가 로그인 했는가? 할 때 사용.

const dahee=null; // 아무것도 없는 상태. 값은 있는데 아무것도 아닌 것.
let something; // 변수(something)은 있는데 값은 안 준 상태. 정의되지 않음(undefined). 공간은 있는데 값이 들어가지 않은 것.

//-----------------------------<2.5>-arrays-------------------------------

const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[3]); // thu