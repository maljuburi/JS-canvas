const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
});

let c = canvas.getContext("2d");

let ball1 = new Ball(centerX, centerY, 20, 2, 1, "#0a4172");
let ball3 = new Ball(centerX, centerY, 30, 1, 3, "#407726");
let ball2 = new Ball(centerX, centerY, 50, -2, -1, "#720b0b");

let moveBall = () => {
  requestAnimationFrame(moveBall);
  c.clearRect(0, 0, innerWidth, innerHeight);
  ball1.anim();
  ball2.anim();
  ball3.anim();
};
moveBall();
