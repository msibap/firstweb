"use strict";

let images = [
  "pics/pic1.webp",
  "pics/pic2.webp",
  "pics/pic3.webp",
  "pics/pic4.webp",
  "pics/pic5.webp",
];

let num = 0;

function next() {
  let slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}

function prev() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}
