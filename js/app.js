//app. js file

const elem = document.getElementById('cat');
const counter = document.getElementById('clicks');
let clicks = 0
//selects the cat picture and stores it into a variable, 'cat'

document.getElementById("cat").addEventListener("click", increaseClicker);


function increaseClicker() {
  for (i = 0; i < 1; i++) {
   clicks++;
}
  counter.innerHTML = clicks;
  console.log(counter.innerHTML);
};
