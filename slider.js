var slider = document.getElementById("myRange");
var output = document.getElementById("demo")
output.innerhtml = slider.value;
var number = 23;

function start(){
startTime();
output.innerHTML = (number + '&#8451');
	
}



slider.oninput = function (){
	output.innerHTML = (this.value + '&#8451');
}

function plus () {	
slider.value++;
number++;
output.innerHTML =  (number + '&#8451');
return;
}

function minus () {	
slider.value--;
number--;
output.innerHTML =  (number + '&#8451');
return;
} 


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
  return i;
}