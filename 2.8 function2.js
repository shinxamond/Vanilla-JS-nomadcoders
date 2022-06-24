//계산기
function plus(a, b) {
    console.log(a + b);
}
function divide(a, b) {
    console.log(a / b);
}

plus(2, 5);
divide(8, 2);


const player = {
    name: "nari",
    sayHello: function (otherPersonName) { //오브젝트 안에 있어서 순서는 바뀌었지만 function sayHello()랑 같음
        console.log("hello " + otherPersonName + " nice to meet you");
    },
};
player.sayHello("dahee");
player.sayHello("hong");