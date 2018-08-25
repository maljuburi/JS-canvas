class Ball {
  constructor(x, y, r, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.beginPath();
    c.font = "20px Courier";

    c.fillText("Object Props:", this.x - this.r, this.y - this.r - 100);

    c.font = "15px Courier";
    c.fillText("X: " + this.x, this.x - this.r, this.y - this.r - 85);
    c.fillText("Y: " + this.y, this.x - this.r, this.y - this.r - 70);
    c.fillText("Radius: " + this.r, this.x - this.r, this.y - this.r - 55);
    c.fillText("X Speed: " + this.dx, this.x - this.r, this.y - this.r - 40);
    c.fillText("y Speed: " + this.dy, this.x - this.r, this.y - this.r - 25);
    c.fillText("Color: " + this.color, this.x - this.r, this.y - this.r - 10);
  }

  anim() {
    if (this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}
