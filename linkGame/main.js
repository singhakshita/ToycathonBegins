const main = document.querySelector("body");

const clickOverlay = document.querySelector(".overlay");

const left = document.querySelector(".footer__left");
const right = document.querySelector(".footer__right");

const message = document.querySelector(".modal");
const msgContainer = document.querySelector(".modal__msg");
const close = document.querySelector(".modal__close");

const password = document.querySelector(".password");
const button = document.querySelector(".button");
const link = document.querySelector(".end__link");

const imagesArr = [
  "./assets/ropeToTunnel.png",
  "./assets/question.png",
  "./assets/board.png",
  "./assets/hint.png",
  "./assets/scroll.png",
  "./assets/twoWayPath.png",
  "./assets/correct.png",
  "./assets/lomascave.png",
  "./assets/end.png",
];

let imgIdx = 0;

const showElement = (element) => {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  }
};
const hideElement = (element) => {
  if (!element.classList.contains("hidden")) {
    element.classList.add("hidden");
  }
};
const setBackgroundImage = (idx) => {
  imgIdx = idx;
  main.style.backgroundImage = `url(${imagesArr[idx]})`;
};

const setMessage = (msg) => {
  showElement(message);
  msgContainer.textContent = msg;
};

close.addEventListener("click", () => {
  hideElement(message);
});

button.addEventListener("click", () => {
  if (password.value == "50") {
    showElement(link);
  }
});
left.addEventListener("click", () => {
  if (imgIdx === 5) {
    setBackgroundImage(7);
    setMessage("wrong Path you will have to play the game again");
    setTimeout(setBackgroundImage(0), 10000);
  } else if (imgIdx > 0) {
    setBackgroundImage(imgIdx - 1);
  }
});
right.addEventListener("click", () => {
  if (imgIdx === 5) {
    setBackgroundImage(6);
    setMessage("Right Path Congrats!!!");
  } else if (imgIdx == 6) {
    setBackgroundImage(8);
    setMessage("enter the password");
    document.querySelector(".endGame").classList.remove("hidden");
  } else if (imgIdx + 1 < imagesArr.length) {
    setBackgroundImage(imgIdx + 1);
  }
});
