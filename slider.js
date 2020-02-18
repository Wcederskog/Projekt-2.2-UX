var slider = document.getElementById("myRange");
var output = document.getElementById("demo")
output.innerHTML = number;
var number = 23;
var farveskift = document.querySelector('.colorChanger')





function start(){
startTime();
output.innerHTML = (number + '&#176');
	
}



slider.oninput = function (){
output.innerHTML = (this.value + '&#176');
number = this.value;
	
}


function plus () {	
if (number < 28)
{	
slider.value++;
number++;
output.innerHTML =  (number + '&#176');
skiftfarve()
return;
	
}
}

function minus () {	
	if (number > 18) {
slider.value--;
number--;
output.innerHTML =  (number + '&#176');
skiftfarve()
return;
}

} 

function skiftfarve() {
	if (number > 23){
		
	farveskift.classList.add('redwarm')	
	farveskift.classList.remove('bluecold')
	}
if (number < 23){
	farveskift.classList.add('bluecold')	
	farveskift.classList.remove('redwarm')
}
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

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}



