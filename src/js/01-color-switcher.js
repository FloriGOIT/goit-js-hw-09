// Microtasks:
//1.un listener care la click Start schimba background color
//2.un listener care la click Stop opreste schimbarea culorii si pastreaza culoarea
//3. o functie care creaza aleatoriu culori - 
//4. o functie interval care apeleaza functia de mai sus si seteaza Back.Col.
//5. o functie care opreste functia interval
//6. btn start disable

// declare
const body = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]')
stopBtn.disabled = true;
let color;
//functions
let changeColor = function () {color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
                               //console.log(color)
                               return color}

function colorUpdate()
{ intervalId = setInterval(() => {changeColor();
                                  body.style.backgroundColor = color;}, 1000);
                                  startBtn.disabled = true;
                                  stopBtn.disabled = false;}

function colorSet(){clearInterval(intervalId);
                    console.log("I like this color.")
                    startBtn.disabled = false;
                    stopBtn.disabled = true;
                    setTimeout (()=>{console.log(`Final color set. Press "Start" to refresh color.`)},2000)}


// listener
startBtn.addEventListener("click", colorUpdate);
stopBtn.addEventListener("click", colorSet)




