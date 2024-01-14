var dividend = 8;
var divisor = 2;

var divideResult = dividend / divisor;

var message = "Divisionen är " + divideResult;

console.log(message);

var uppg8Element = document.getElementById("uppg8");

var divElement = document.createElement("div");

divElement.textContent = message;

uppg8Element.appendChild(divElement);
