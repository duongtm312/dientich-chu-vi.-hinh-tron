let inputRadius;
const pi = 3.14159265359


inputRadius= prompt("Enter the Radius");

let Radius = parseInt(inputRadius);

let  Perimeter = Radius *2*pi
let circleArea = Radius*Radius*pi
document.write("Perimeter is: " + Perimeter);
document.write("circleArea is: " + circleArea);