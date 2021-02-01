import {isWeekend, getDayName} from "./date-helpers.js";



const calendar = document.querySelector("#app-calendar");


  


for (let day = 1; day <= 31; day++){
    // console.log(day);
    let name = "";
    if (day <= 7) {
    const dayName = getDayName(day);
    name = `<div class = "name">${dayName}</div>`;
    }
    // console.log(getDayName(day));
    const weekend = isWeekend(day);
    // console.log(weekend? "weekend":"");
    calendar.insertAdjacentHTML("beforeend",`<div class = "day ${weekend? "weekend": ""}">${name}${day}</div>`);
}

document.querySelectorAll("#app-calendar .day").forEach(day => {
  day.addEventListener("click", event => {
    event.currentTarget.classList.toggle("selected");
  })
})





















