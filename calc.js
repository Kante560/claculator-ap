// CALCULATOR PROJECT

const display = document.getElementById('display');
let array = []
function appendToDisplay(input){
  array.push(input)
  display.value = array.join('')
}

function clearDisplay(){
 array.pop()
 display.value = array.join('')

}
function calculate(){
  try{
  display.value = eval(display.value);
  array = display.value.split('')
}
catch(error) {
  display.value = "U r dumb type well"
};

}
if ( input === '') {
try{
  display.value = eval(display.value);
  array = display.value.split('')

} catch (error) {
  display.value = "werey"
}
}