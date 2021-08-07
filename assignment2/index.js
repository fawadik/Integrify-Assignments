function displayEnteredTask() {
  let inpuField = document.getElementById("inputField");
  if (inputField.value==="") {
    alert("Please enter the task");
  } else {
  let newTask = inpuField.value;
  let li = document.createElement("li"); 
  li.className = "unchecked"; 
  let ul = document.getElementById("tasks");
  let span = document.createElement("span");
  span.className = "closeBtn";
  span.innerText = "\u00D7";
  li.innerText = newTask;
  li.appendChild(span);
  ul.appendChild(li);
  inpuField.value = "";
  span.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
  let counter = 0;
  li.onclick = function () {      
    let tick = document.createElement("span");
    tick.className = "checkBox";
    tick.innerText = "\u2713";    
    if (counter===0) {        
      li.appendChild(tick);
      li.style.background = "green";
      li.style.textDecoration = "line-through";
      counter = 1;
    } else {      
      li.style.textDecoration = "none";      
      li.style.background = "white";
      li.removeChild(li.lastElementChild);
      counter=0;
    }
  }
  }
}

function deleteAllTasks() {
  document.getElementById("tasks").innerHTML = " ";
}
