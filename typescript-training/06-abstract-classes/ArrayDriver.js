"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(2, 22, 26);
let myRectangle = new Rectangle_1.Rectangle(1, 1, 4, 8);
// declare an array of shapes ... initally empty
let theShapes = [];
// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
