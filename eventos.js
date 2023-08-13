const div = document.createElement("div");
div.style.padding = "5px";
div.style.backgroundColor = "green";
const btn = document.querySelector("button");

document.body.appendChild(div);
div.appendChild(btn);

div.addEventListener("click", function(){
alert("Hola! Soy el Div.")

})