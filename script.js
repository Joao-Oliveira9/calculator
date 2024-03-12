/*
*! selectin elements of the DOM
*/
//selection DOM element with id number
const numberButtons = document.querySelector("#numbers");

//selection DOM element with id symbols
const symbolsButtons = document.getElementById("symbols");

//selection DOM element with id commands
const commandButtons = document.getElementById("commands");

let number1, numero1;//:string
let operationSymbol;//:string
let number2,numero2;//:string
let result;

console.log(numberButtons);

//using a object event to catch the componers of a container,with this i will use a eventListener for every button, the e object especify what div we talking a about
numberButtons.addEventListener('click',function(e){
  //string value for number1
  number1 = e.target.textContent;
/*   console.log("passei aqui"); */
  //verify if the string corresponds a number or a leater
  if(!isNaN(number1))
  {
     numero1 = parseInt(number1);
      symbolsButtons.addEventListener('click',function(e){
      operationSymbol = e.target.textContent;
      if(isNaN(operationSymbol)){
        numberButtons.addEventListener('click',function(e){
          number2 = e.target.textContent
          if(!isNaN(number2))
          {
            numero2 = parseInt(number2);
            switch(operationSymbol)
            {
              case("+"): 
              {
                result = numero2 + numero1 
                alert(result);
                break;
              }
              default:
                alert("deu errado")
                break
            }
          }
        })
      }
    })
  }
})






///

/* var totalNumber = document.getElementById("total");
totalNumber.textContent = "0";



document.getElementById("numbers").addEventListener('click', function(){
    number += this.textContent;
    totalNumber.textContent = number;
})

//
number  = "";

document.getElementById("numbers").addEventListener('click', function(e){
    number += e.target.textContent;
    totalNumber.textContent = number;
}) */


/* <!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Useful event target example</title>
    <style>
      .tile {
        height: 100px;
        width: 25%;
        float: left;
      }
    </style>
  </head>
  <body>
    <div id="container">
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
     <div class="tile"></div>
   </div>

    <script>
      function random(number) {
        return Math.floor(Math.random()*number);
      }

      function bgChange() {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        return rndCol;
      }

      const container = document.querySelector('#container');
      container.addEventListener('click', event => event.target.style.backgroundColor = bgChange());
    </script>
  </body>
</html>
 */