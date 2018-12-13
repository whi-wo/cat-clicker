//app. js file

const elem = document.getElementById('cat');
const counter = document.getElementById('clicks');
//selects the cat picture and stores it into a variable, 'cat'

elem.addEventListener('click', function(){
  console.log("yee");
  var i;
  for (i = 0; i; i++) {
  var text = i;
  console.log(text);

document.getElementById("clicks").innerHTML = text;
}
}, false);
