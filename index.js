const convertToCelsius = (nu) => {
    const celTemp = (num - 32) * (5/9);
}

// have the user input run through the equation

// have a function take the farenheitTemp and describe that number.
// if less than 32 - very cold, if less than 64 - cold, 
// if less than 86 - warm, if less than 100 - hot, if greater than 100 - very hot 


let message = ``;

if (farenheitTemp <= 32) {
  message = `Very Cold!`
} else if(farenheitTemp <= 64){
  message = `Cold!`
} else if(farenheitTemp <= 86){
  message = `Warm!`
} else if(farenheitTemp <=100){
  message = `Hot!`
} else if(farenheitTemp >=100){
  message = `Very Hot!`
}
alert(`Your Temperature in Celcius: `)

console.log(farenheitTemp)