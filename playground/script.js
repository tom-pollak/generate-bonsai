import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";
import {
  spline,
  random
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.0";

const svg = SVG(".canvas");
const btn = document.querySelector("button");
const { width } = svg.viewbox();
const numSteps = 10;
const stepSize = width / numSteps;

function generate() {
  console.log("generating...");
  // clear the contents of the SVG
  svg.clear();

  const points = [];

  // plot 10 equally spaced points along the canvas width
  for (let x = 0; x <= width; x += stepSize) {
    // y = vertical center of the viewport (100) +/- 10
    const y = random(90, 110);

    // render an svg circle at the current { x, y } position
    svg.circle(4).cx(x).cy(y).fill("deeppink");

    // store the { x, y } coordinate to use later
    points.push({
      x,
      y
    });
  }

  // array of { x, y } coordinates, tension, "close" the shape
  const pathData = spline(points, 1, false);
  // render an svg <path> using the spline path data
  svg.path(pathData).stroke("#111").fill("none");
}

generate();

btn.addEventListener("click", () => {
  generate();
});
