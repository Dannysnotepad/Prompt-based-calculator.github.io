/*
**A prompt based calculator
**From Danny's Notepad🖱️
*/

//assigning top level variables
let funcInit = document.getElementById('funcInit')
let recentCalculatons = document.getElementById('recent')

//the calculator function
funcInit.addEventListener("click", (event) => {
  
  alert('Prompt Based Calculator🧮 from Daniel @Dannysnotepad.github.io')
  
  let calculatorMode = prompt('What calculation mode do you want \n Enter 1 for basic calculation like +,-,*,/ \nEnter 2 for advanced calculation mode like cos, tan, sin e.t.c')
  //condition for basic
  if (calculatorMode == 1){
    
    let firstNumber = prompt('Enter a number:')
    let operator = prompt('Enter any operator(+,-,/,*):')
    let secondNumber = prompt('Enter the second number to complete the operation')
    let result, previous;
    //using switch to check the operator, do operation and display output in html
    switch (operator) {
      case '+':
        alert(firstNumber + secondNumber)
        result = firstNumber + secondNumber
        previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
        recentCalculatons.innerHTML += previous
        break;
      case '-':
        alert(firstNumber - secondNumber)
        result = firstNumber - secondNumber
        previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
        recentCalculatons.innerHTML += previous
        break;
      case '/':
        if (operator == '/' && firstNumber <= 0) {
          alert('Can\'t procced with this operation because 0 can\'t divided')
        } else {
          alert(firstNumber / secondNumber)
          result = firstNumber / secondNumber
          previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
      case '*':
        if (operator == '*' && firstNumber <= 0) {
          alert('Can\'t procced with this operation because 0 can\'t be multiplied')
        } else {
          alert(firstNumber * secondNumber)
          result = firstNumber * secondNumber
          previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
      default:
        alert('Invalid operator!')
    }
  //condition for advance calculator  
  } else if(calculatorMode == 2) {
    let calType = prompt('Enter 1 for sine\n 2 for cosine\n 3 for tanget\n or 4 for square root')
    let mathNumber;
    switch (calType) {
      case '1':
        mathNumber = prompt('Enter number')
        if (isNaN(mathNumber)) {
          alert('Invalid input')
        }else{
          alert(Math.sin(mathNumber))
          result = Math.sin(mathNumber)
          previous = `<li>Sine ${mathNumber} = ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
      case '2':
        mathNumber = prompt('Enter number')
        if (isNaN(mathNumber)) {
          alert('Invalid input')
        } else {
          alert(Math.cos(mathNumber))
          result = Math.cos(mathNumber)
          previous = `<li>Cosine ${mathNumber} = ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
    case '3':
      mathNumber = prompt('Enter number')
      if (isNaN(mathNumber)) {
        alert('Invalid input')
      } else {
        alert(Math.tan(mathNumber))
        result = Math.tan(mathNumber)
        previous = `<li>Tan ${mathNumber} = ${result}</li>`
        recentCalculatons.innerHTML += previous
      }
      break;
    case '4':
      mathNumber = prompt('Enter number')
      if (isNaN(mathNumber)) {
        alert('Invalid input')
      } else {
        alert(Math.sqrt(mathNumber))
        result = Math.sqrt(mathNumber)
        previous = `<li>Square root of ${mathNumber} = ${result}</li>`
        recentCalculatons.innerHTML += previous
      }
      break;
  
      default:
        alert('Invalid input')
    }
  }else{
    alert('Wrong input')
    console.warn('Wrong input!')
  }
  
});
