var li = document.createElement("li")
var button = document.querySelector("#add_todo")
var clear = document.querySelector("#clear")
var ul = document.querySelector("ul")
button.addEventListener("click", function(){
	var li = document.createElement("li")
	var input = document.getElementById("toDo")
	li.innerHTML = input.value
	ul.appendChild(li);
})


