const main = document.querySelector("body");
const buttonStack = document.querySelector(".button__stack");
const clickOverlay = document.querySelector(".overlay");
const playButton = document.querySelector(".play");
const multiPlayer = document.querySelector(".multi");
const left = document.querySelector(".footer__left");
const right = document.querySelector(".footer__right");
const playGame = document.querySelector(".play__main");
const message = document.querySelector(".modal");
const video = document.querySelector(".video");
const imagesArr = [
  "./assets/start.png",
  "./assets/first.png",
  "./assets/soon.png",
  "./assets/lomascave.png",
  "./assets/lomascave2.png",
  "./assets/lomascave3.png",
  "./assets/lomascave4.png",
  "./assets/lomascave6.png",
  "./assets/lomascave8.png",
  "./assets/ropeToTunnel.png",
  "./assets/question.png",
  "./assets/board.png",
  "./assets/hint.png",
  "./assets/scroll.png",
  "./assets/ropeToTunnel.png",
  "./assets/twoWayPath.png",
  "./assets/correct.png",
  "./assets/end.png",
];

const msgIdx = 0;
const messages = [
  "Now !! where am I ????",
  "Exit is Blocked",
  "Looks like an old Place,seems like i m still in past",
  "Wait !! whats there on the ground",
];
let index = 0;

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
  index = idx;
  main.style.backgroundImage = `url(${imagesArr[idx]})`;
};

const setMessage = (idx) => {
  showElement(message);
  message.textContent = messages[idx];
};

playButton.addEventListener("click", () => {
  hideElement(buttonStack);
  showElement(playGame);
  showElement(video);
  video.play();
});
multiPlayer.addEventListener("click", () => {
  setBackgroundImage(2);
  hideElement(buttonStack);
  hideElement(playGame);
});
playGame.addEventListener("click", () => {
  hideElement(video);
  video.pause();
  setBackgroundImage(3);
  hideElement(playGame);
  setMessage(0);
  setTimeout(() => {
    setBackgroundImage(4);
    setMessage(1);
  }, 3000);
  setTimeout(() => {
    setBackgroundImage(5);
    setMessage(2);
  }, 6000);
  setTimeout(() => {
    setBackgroundImage(6);
    setMessage(3);
    showElement(clickOverlay);
  }, 9000);
});

clickOverlay.addEventListener("click", () => {
  hideElement(message);
  hideElement(clickOverlay);
  setBackgroundImage(8);
});

left.addEventListener("click", () => {
  if (index == 1) {
    setBackgroundImage(0);
    showElement(buttonStack);
    hideElement(playGame);
  } else if (index == 2) {
    setBackgroundImage(0);
    showElement(buttonStack);
    hideElement(playGame);
  }
});
right.addEventListener("click", () => {});
