import { Notify } from 'notiflix/build/notiflix-notify-aio';


//Resolvare exercitiu alt mod decat function createPromise(position, delay)
/*let form = document.querySelector(".form");
console.log(form)

let firstDelay = document.querySelector('label [name="delay"]');
let valueFirstDelay = 0;

let stepDelay = document.querySelector('label [name="step"]')
let valueStepDelay = 0;

let position = document.querySelector('label [name="amount"]')
let valuePosition = 0;          



let counter = 1;
let todalDelay;

let a = () =>
{
  function x(){
      return new Promise((resolve, reject)=>
         {
          const shouldResolve = Math.random();
          if(shouldResolve > 0.5){resolve(`✅ Fulfilled promise ${counter} in ${todalDelay}ms. ${Math.ceil(shouldResolve*100)/100} `)}
          else{reject(`❌ Rejected promise ${counter} in ${todalDelay}ms. ${Math.ceil(shouldResolve*100)/100} `)};
         })
              }

x().then((value)=>{Notify.success(value)})
   .catch((value)=>{Notify.failure(value)})

}

let interval = () => setTimeout(()=>{let interval = setInterval(()=>
  { a();
    counter++;
    todalDelay += valueStepDelay;
    if (counter > valuePosition) {clearInterval(interval);}
  }, valueStepDelay)}, valueFirstDelay)




form.addEventListener("submit", (event)=>
                        {
                          event.preventDefault();
                          const{elements: {delay, step, amount}} = event.currentTarget;
                          valueFirstDelay = parseInt(delay.value);
                          valueStepDelay = parseInt(step.value);
                          valuePosition = amount.value;
                          interval();
                          todalDelay = valueFirstDelay + valueStepDelay;
                          
                        }
                      )
*/

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstDelay = parseInt(this.elements.delay.value);
  const delayStep = parseInt(this.elements.step.value);
  const amount = parseInt(this.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + (i - 1) * delayStep;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});





