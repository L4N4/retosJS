const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
console.log(speedEl.value)
const prog = "We Love Programming!";
let idx = 1;
let speed = 500 / speedEl.value;

// initial call
writeText();

function writeText() {
    textEl.innerText = prog.slice(0, idx)
  
  idx++;
  
  if(idx > prog.length){
      idx = 1;
    }
  
  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 500 / e.target.value; // ==  speedEl.value
});