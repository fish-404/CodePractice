var power = 0;
var precision = 4;
var input = "";
var show = "0";
var result = "";
var expressionDiv = document.getElementById("expression");

function showScreen(input) {
  if (power) {
    expressionDiv.innerText = input;
    expressionDiv.scrollLeft = expressionDiv.scrollWidth; // keep the scroll to right end in div
  } 
}

function appendShow(input) {
  if (power && isAppend(input) == true) {
    show += input;
  }
  showScreen(show);
}

function removeLastChar(input) {
  return input.substring(0, show.length-1);
}

function showResult(input) {
  if (power)
    document.getElementById("result").innerText = input;
}

function blinkWarn() {
  $('.powerSign').css('background-color', 'red').fadeIn("fast", function() {
    $('.powerSign').fadeOut("fast", function() {
      $('.powerSign').css('background-color', '#99ffcc').fadeIn();
    })
  })
}

let operationMap = new Map([
  ['+', 1], 
  ['-', 2], 
  ['*', 3],
  ['//', 4] 
]); // just to recognize, not relate to properity

function isOperation(s) {
  if (operationMap.get(s) != undefined)
    return true;
  else
    return false;
}

function lastChar(s) {
  return s[s.length-1];
}

function isAppend(input) {
    // should handle twice, e.g. 5 * - + 5 should be 10, when we read '+', first remove '-', second remove '*', because when we read '-', '*' would not be removed
  if (isOperation(input)) {
    handleOperationConsetive(input);
    handleOperationConsetive(input); 
  }
  else if (input == '.') {
      return handleDecimal();        
  }
  else { // num
    if (show.length == 1 && lastChar(show) == "0") {
      show = removeLastChar(show);
    }
  }
  return true;
}

function handleDecimal() {
  if (lastChar(show) == '.') {
    blinkWarn();
    return false;   
  }
  else if (isOperation(lastChar(show))) {
    return true;
  }
  else {
    let pattern = /\b[\d.]+\b/g;
    let nums = show.match(pattern);
    if (nums[nums.length-1].includes(".")) {
      blinkWarn();
      return false;
    }
    return true;
  }
}

function handleOperationConsetive(input) {
  if (isOperation(lastChar(show)) && isOperation(input)) { // operation consecutively 
    if (operationMap.get(input) != 2) { // not '-'
      blinkWarn();
      show = removeLastChar(show); // ignore operation before
    }
  }
}

$('#zero').on('click', function(){
  appendShow("0");
})

$('#one').on('click', function(){
  appendShow(1);
})

$('#two').on('click', function(){
  appendShow(2);
})

$('#three').on('click', function(){
  appendShow(3);
})

$('#four').on('click', function(){
  appendShow(4);
})

$('#five').on('click', function(){
  appendShow(5);
})

$('#six').on('click', function(){
  appendShow(6);
})

$('#seven').on('click', function(){
  appendShow(7);
})

$('#eight').on('click', function(){
  appendShow(8);
})

$('#nine').on('click', function(){
  appendShow(9);
})

$('#equals').on('click', function(){
  result = math.format(math.evaluate(show), precision);
//show = result.toString();
  showResult(result);
})

$('#add').on('click', function(){
  appendShow('+');
})

$('#subtract').on('click', function(){
  appendShow('-');
})

$('#multiply').on('click', function(){
  appendShow('*');
})

$('#divide').on('click', function(){
  appendShow('/');
})

$('#decimal').on('click', function(){
  appendShow('.');
})

$('#copy').on('click', function(){
  show = result;
  showScreen(show);
})

$('#clear').on('click', function(){
  show = "0";
  showScreen(show);
})

$('#back').on('click', function(){
  show = removeLastChar(show);
  if (show == "") {
    show = "0";
  }
  showScreen(show);
})

$('#power').on('click', function(){
  power = !power;
  if (power) {
    $('.powerSign').css('background-color', '#99ffcc');
    if (show == "0")
      showScreen("POWER ON");
    else {
      showScreen(show);
      showResult(result);
    }
  }
  else {
    $('.powerSign').css('background-color', '#333333');
    result = "";
    document.getElementById('result').innerText = "";
    expressionDiv.innerText = "POWER OFF";
  }
})
