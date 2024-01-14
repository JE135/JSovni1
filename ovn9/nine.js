
var resultat = Math.ceil((3 * 4.765) / 2);

console.log("Resultatet är " + resultat);

var uppg9Element = document.getElementById("uppg9");

var divElement = document.createElement("div");

divElement.textContent = "Resultatet är " + resultat;

uppg9Element.appendChild(divElement);
