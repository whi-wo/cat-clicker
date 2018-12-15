//app. js file

const elem = document.getElementById('cat');
const firstCounter = document.getElementById('clicks');
const elem2 = document.getElementById('cattwo');
const secondCounter = document.getElementById('second_clicks');

let clicks = 0
let secondClicks = 0;
//selects the cat picture and stores it into a variable, 'cat'

elem.addEventListener("click", increaseClicker);
elem2.addEventListener("click", increaseClicker2);
addNames();

function increaseClicker() {
  for (i = 0; i < 1; i++) {
   clicks++;
}
  firstCounter.innerHTML = clicks;
  console.log(firstCounter.innerHTML);

};


function increaseClicker2() {
  for (i = 0; i < 1; i++) {
   secondClicks++;
}
  secondCounter.innerHTML = secondClicks;
  console.log(secondCounter.innerHTML);
};

// function myFunction() {
//     var para = document.createElement("P");
//     var t = document.createTextNode("This is a paragraph.");
//     para.appendChild(t);
//     document.body.appendChild(para);
// }


function addNames() {
    const para = document.createElement("P");
    const catName1 = document.createTextNode("Smokey");
    para.appendChild(catName1);
    document.body.appendChild(para);
    const para2 = document.createElement("P");
    const catName2 = document.createTextNode("Smokey2");
    para2.appendChild(catName2);
    document.body.appendChild(para2);


};
