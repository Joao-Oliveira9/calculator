/*
*! selectin elements of the DOM
*/
//selection DOM element with querySelector(not have to select a specific element) number
const numberButtons = document.querySelector("#numbers");

//selection DOM element with id commands
const commandButtons = document.getElementById("commands");

const resultButton = document.getElementById("value")

let contDot = 0;
let input = [];
let command;
let operand;
let i = 0;
let number1;
let number2;
let result = 32111;

numberButtons.addEventListener('click',function(e){
    //string que vai ter os numeros de entrada
    input[i] = e.target.textContent;
    
    if(document.getElementById("result").textContent == "0"){
        document.getElementById("result").textContent = input[i];
    }
    else
        document.getElementById("result").textContent = document.getElementById("result").textContent +  input[i] ;

    
    i++;
    /* console.log(input); */
})
 
commandButtons.addEventListener('click',function(e){
    //seleciona a operação que vai ser realizada
    command = e.target.textContent;
    document.getElementById("result").textContent = "0";
    
    //transforma o array em uma string que não tem separador e em seguida converte para um numero
    operand = input.join('');
    operand = parseFloat(operand);

    if(contDot == 0){
        number1 = operand;
        contDot++;
    }
   

    input = [];
    input.length = 0;
        
  /*   console.log(operand); */
})

resultButton.addEventListener('click',function(e){
    operand = input.join('');
    operand = parseFloat(operand);

    if(contDot == 1){
        number2 = operand;
        contDot--;
    }
     let teste = number1 + number2

     /* console.log(command) */
    selectinOperation(command);
    document.getElementById('result').textContent = result;

})

function selectinOperation(operationValue)
{
   
    switch(operationValue)
    {
        case '-':
        {
            result = number1 - number2;
            break
        }
        case '+':
        {
            result = number1 + number2;
            break
        }
        case 'x':
        {
            result = number1 * number2;
            break        
        }
        case '+':
        {
            result = number1 / number2;
            break
        }
    }
 
}