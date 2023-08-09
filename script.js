/*
**A prompt based calculator
**From Danny's Notepad🖱️
**v2.0
*/

//assigning top level variables
let funcInit = document.getElementById('funcInit')
let recentCalculatons = document.getElementById('recent')

//the calculator function
funcInit.addEventListener("click", (event) => {
  
  alert('Prompt Based Calculator🧮 from Daniel @github.com/Dannysnotepad')
  alert('New mode added! \'Convertion mode, it\'s basically for converting time and more....')
  
  let calculatorMode = prompt(' What calculation mode do you want \n Enter 1 for basic calculations like +,-,*,/ \n Enter 2 for advanced calculation mode like cos, tan, sin e.t.c \n Enter 3 for Converting units like minute to seconds e.t.c')
  let calType;
  //condition for basic mode
  if (calculatorMode == 1){
    
    let firstNumber = prompt('Enter a number:')
    let operator = prompt('Enter any operator(+,-,/,*):')
    let secondNumber = prompt('Enter the second number to complete the operation')
    let result, previous;
    //using switch to check the operator, do operation and display output in html
    switch (operator) {
      case '+':
        alert(parseInt(firstNumber) + parseInt(secondNumber))
        result = parseInt(firstNumber) + parseInt(secondNumber)
        previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
        recentCalculatons.innerHTML += previous
        break;
      case '-':
        alert(parseInt(firstNumber) - parseInt(secondNumber))
        result = parseInt(firstNumber) - parseInt(secondNumber)
        previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
        recentCalculatons.innerHTML += previous
        break;
      case '/':
        if (operator == '/' && firstNumber <= 0) {
          alert(' Can\'t procced with this operation because 0 can\'t divided')
        } else {
          alert(parseFloat(firstNumber) / parseFloat(secondNumber))
          result = parseFloat(firstNumber) / parseFloat(secondNumber)
          previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
      case '*':
        if (operator == '*' && firstNumber <= 0) {
          alert('Can\'t procced with this operation because 0 can\'t be multiplied')
        } else {
          alert(firstNumber * secondNumber)
          result = parseInt(firstNumber) * parseFloat(secondNumber)
          previous = `<li>${firstNumber} ${operator} ${secondNumber} = ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
      default:
        alert('Invalid operator!')
    }
  //condition for advance calculator  
  } else if(calculatorMode == 2) {
    let calType = prompt(' Enter\n 1 for sine\n 2 for cosine\n 3 for tanget\n 4 for square root')
    let mathNumber, input;
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
      mathNumber = prompt('square root of')
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
  //code for converting mode
  } else if(calculatorMode == 3){
    calType = prompt('Enter 1 for Celsius to Fahrenheit Converter \n 2 for Time converter')
    switch (calType) {
      case '1':
        input = prompt('Enter degree in Celcuis')
        if(isNaN(input)){
          alert('Invalid input')
        }else{
          alert(`${parseFloat(input)} in Fahrenheit is ${(input * 9/5)+32}`)
          result = (parseFloat(input) * 9 / 5) + 32
          previous = `<li>${input} Celcuis in Fahrenheit is ${result}</li>`
          recentCalculatons.innerHTML += previous
        }
        break;
      case '2':
        input = prompt(' Enter 1 to convert day to hour \n 2 to convert hours to minutes \n 3 to convert minutes to seconds')
        if(isNaN(input)) {
          alert('Enter a valid number')
        }else{
          switch (input) {
            case '1':
              let timeHandler = parseInt(prompt(' Enter number of days you want to convert:'))
              if (isNaN(timeHandler)) {
                alert('Invalid input')
              }else{
                alert(`${timeHandler} days converted to hours is ${timeHandler*24}`)
                result = timeHandler * 24
                previous = `<li>${timeHandler} days converted to hour is ${result} hours</li>`
                recentCalculatons.innerHTML += previous
              }
              break;
            case '2':
              let timeHandler1 = parseInt(prompt(' Enter number of hours you want to convert to minute:'))
              if (isNaN(timeHandler1)) {
                alert('Invalid input')
              } else {
                alert(`${timeHandler1} hours converted to minute is ${timeHandler1*60}`)
                result = timeHandler1 * 60
                previous = `<li>${timeHandler1} hours converted to minute is ${result} minutes</li>`
                recentCalculatons.innerHTML += previous
              }
              break;
            case '3':
              let timeHandler2 = parseInt(prompt(' Enter number of minutes you want to convert to seconds:'))
              if (isNaN(timeHandler2)) {
                alert('Invalid input')
              } else {
                alert(`${timeHandler2} minutes converted to seconds is ${timeHandler2*60}`)
                result = timeHandler2 * 60
                previous = `<li>${timeHandler2} minutes converted to seconds is ${result} hours</li>`
                recentCalculatons.innerHTML += previous
              }
              break;
            default:
              alert('Invalid input')
          }
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
