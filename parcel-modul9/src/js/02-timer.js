/* #calendarul trebuie sa-mi permita sa selectez o
data viitoare --btn start dezac. pt OLD-
              --alerta daca incerc sa selectez OLD--
              --cronometru 0 pe old date--
   #la selectare data viitoare --btn Start activ--
                               --cronometru actualizat--
   #design cronometru
   #cronometru countDOWN*/

//import
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// declar
const calendar = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button");
const timerBox  = document.querySelector(".timer");
const fieldBox  = document.querySelectorAll(".field");
const allValue = document.querySelectorAll(".value");
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');


const options = {enableTime: true,
                 time_24hr: true,
                 defaultDate: new Date(),
                 minuteIncrement: 1,
                 onClose(selectedDates)
                        {
                         let now = new Date();
                         let nowTimeStamp = now.getTime();
                         let futureTimeStamp = selectedDates[0].getTime();
                         let countDownTime = futureTimeStamp - nowTimeStamp;

                         const onClicks = () => {Notify.success("START!");
                                                 startBtn.disabled = "true";
                                                 const timer = setInterval(()=>{
                                                                                countDownTime -= 1000;
                                                                                console.log(convertMs(countDownTime));
                                                                                if (countDownTime === 0) {clearInterval(timer);                                                                         
                                                                                Notify.success("CountDown ended");}
                                                                               }, 1000);
                                            
                                         }
                         startBtn.addEventListener("click", onClicks)

                         if(selectedDates[0] <= now){startBtn.disabled = "true";
                                                     Notify.failure("Please choose a date in the future");}
                         else {startBtn.disabled = "";}
                        }
                }
const activeCalendar = flatpickr(calendar, options);


//display and others
document.body.style.marginLeft = "15px";
startBtn.disabled = "true";

const timerBoxStyling = {display: "flex",
                         flexDirection: "row",
                         gap: "30px",
                         marginTop: "20px"};
Object.assign(timerBox.style, timerBoxStyling);

fieldBox.forEach((a,idx,arr) => {a.style.display = "flex";
                                 a.style.flexDirection = "column";})
allValue.forEach( (a,idx,arr) =>{a.style.fontSize = "25px";
                                 a.style.color = "red";  } )


//functions
function convertMs(ms) {
                        const second = 1000;
                        const minute = second * 60;
                        const hour = minute * 60;
                        const day = hour * 24;
                        const days = Math.floor(ms / day);
                        const hours = Math.floor((ms % day) / hour);
                        const minutes = Math.floor(((ms % day) % hour) / minute);
                        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

                        daysCounter.innerHTML = addLeadingZero(days);
                        hoursCounter.innerHTML = addLeadingZero(hours);
                        minutesCounter.innerHTML = addLeadingZero(minutes);
                        secondsCounter.innerHTML = addLeadingZero(seconds);
                       }
function addLeadingZero(value){
                              let y = value.toString().padStart(2,"0");
                              return y;}









