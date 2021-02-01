const isWeekend = day=> {
  //6 when it's saturday, 0 when it's sunday
  return day % 7 === 6 || day % 7 === 0;
}


const getDayName = day => {
  const date = new Date(2018, 0, day);


return new Intl.DateTimeFormat("en-US", { weekday: "short"} ).format(date);
    
}


export {isWeekend, getDayName}