const player = {
    name: "nari",
    points: 98,
    fat: true,
};
console.log(player);
console.log(player.name);
player.fat = false;
//property(fat=false부분) 변경 가능
player.hair = "short";
//property 추가 가능. 하지만 object는 변경/추가 불가능
//우리는 선언된 object 안을 수정하는 거지, object를 수정하는 게 아니다. const 전체를 하나의 값으로 업데이트 하려고 할 때 (예: player=false 처럼 이미 선언된 player(const)를 불리언값으로 바꿀 때, 에러발생
player.points = player.points + 15;
//이렇게 점수 더하기 가능
console.log(player);