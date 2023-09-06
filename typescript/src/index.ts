import { newRenderer } from "./renderer.js"
import { Rectangle } from "./shapes/rectangle.js";

const rectangle: Shape = Rectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();