const title = document.querySelector("div.hello:first-child h1");

const box = document.querySelector("div.box");

function handleTitleClick() {
    console.log("title was clicked!")
}

function checksome() {
    console.log("copied!")
}

title.addEventListener("click", handleTitleClick);
box.addEventListener("copy", checksome);

// listen하고 싶은 event를 찾는 가장 좋은 방법은, 구글에 찾고 싶은 element의 이름, 예를들어 h1 html element mdn을 검색. 우리는 javascript의 element를 원하니, 링크에 Web APIs라는 문장이 포함된 페이지를 찾아. 왜냐면 이건 JS관점의 HTML Heading Element란 의미야.
