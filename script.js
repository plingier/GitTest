var color1 = document.getElementById("color1");
var color2= document.getElementById("color2");

var section = document.getElementsByTagName("section")[0];


color1.addEventListener("change", changeLinearGradient);
color2.addEventListener("change", changeLinearGradient);

section.style.backgroundImage = "linear-gradient(90deg," + color1.value + "," + color2.value + ")";

function changeLinearGradient (e) {
	section.style.backgroundImage = "linear-gradient(90deg," + color1.value + "," + color2.value + ")";
}
