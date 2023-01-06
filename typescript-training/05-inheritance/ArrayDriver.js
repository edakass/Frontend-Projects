"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
//console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(2, 22, 26);
//console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(1, 1, 4, 8);
//console.log(myRectangle.getInfo());
// declare an array of shapes ... initally empty
let theShapes = [];
// add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
