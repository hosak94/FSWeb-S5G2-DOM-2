import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

//keydown
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

//focus - blur
const form = document.querySelectorAll(".nav-link");
const formArr = Array.from(form);

formArr.forEach((element) => {
  element.addEventListener(
    "focus",
    (event) => {
      event.target.style.background = "pink";
    },
    true
  );

  element.addEventListener(
    "blur",
    (event) => {
      event.target.style.background = "orange";
    },
    true
  );
});

//mouseover
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    const colors = ["#FFB6C1", "#89CFF0", "#DAF7A6"];
    const backColors = ["#FF5733", "#581845", "#008080"];
    function generateRandomNumber(number) {
      return Math.floor(Math.random() * number);
    }
    btn.style.backgroundColor = colors[generateRandomNumber(colors.length)];
    btn.style.color = backColors[generateRandomNumber(backColors.length)];
  });
});

//wheel
const texts = document.querySelectorAll(".text-content");
let scale = 1;

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  texts.forEach((text) => {
    text.style.transform = `scale(${scale})`;
  });
}

texts.forEach((text) => {
  text.addEventListener("wheel", zoom);
});

//dblclick
document
  .querySelector(".content-destination img")
  .addEventListener("dblclick", (event) => {
    if (event.target.style.borderRadius === "100%") {
      event.target.style.borderRadius = "";
    } else {
      event.target.style.borderRadius = "100%";
    }
  });

//beforeunload
window.addEventListener("beforeunload", (e) => {
  const confirmationMessage = "\\o/";
  (e || window.event).returnValue = confirmationMessage;
  return confirmationMessage;
});

//mousemove
const texting = document.querySelectorAll("h4");
texting.forEach((h4) => {
  h4.addEventListener("mousemove", () => {
    h4.style.color = "grey";
  });
});

//scroll
const head = document.querySelector("header");
document.addEventListener("scroll", (event) => {
  head.style.backgroundColor = "#008080";
});

const para = document.querySelector("h2");

para.addEventListener("pointerdown", (event) => {
  console.log("Pointer down event");
});

//load
const addlight = document.querySelector("footer");
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("Bizimle iletişime geç!");
    addlight.style.fontSize = "2rem";
    addlight.style.fontWeight = "bolder";
    addlight.style.color = "blue";
    addlight.textContent = "Yigitcan Hosak";
  }, 5000);
});
