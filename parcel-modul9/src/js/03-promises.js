import { Notify } from 'notiflix/build/notiflix-notify-aio';



let form = document.querySelector(".form");
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








