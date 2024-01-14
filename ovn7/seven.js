var myclass = "pu20h";
var myschool = "Prakticum";
var message = "Jag går på " + myclass + " i " + myschool + "!";
console.log(message);
var uppg7Element = document.getElementById("uppg7");
var divElement = document.createElement("div");
divElement.textContent = message;
uppg7Element.appendChild(divElement);
