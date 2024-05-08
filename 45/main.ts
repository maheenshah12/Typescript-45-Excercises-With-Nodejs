//define a function to creat a car object with optional options...
function  create_car(manufacturer, model, ...options){

// initialize a car object with manufacuturer and model
let  car ={
    manufacturer : manufacturer,
    model : model
};

// add  additional options to the car object
  options.forEach(option => {
    let [ key , Value] = option.split(":");
    car[key.trim()] = Value.trim();
  });
   return car
}

//call the function to creat a car object
let my_car = create_car("toyota","corrolla","color: black","sunroof: true");
//print the varible to ensure all the information is stored correctly in the car object
console.log(my_car);



