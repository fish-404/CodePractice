# You can run and test this code in https://replit.com/@fish404/boilerplate-arithmetic-formatter
import re 

limit = 5
limitDigit = 4

def isOverLimit(problems):
  if len(problems) > limit:
    return True
  else:
    return False

def isOperatorValid(operator):
  if operator == '+' or operator == '-':
    return True
  else:
    return False

def isNumbersOnly(numbers):
  if re.search(r'\D', numbers):
    return False
  else:
    return True

def isNumberDigitValid(numbers):
  if len(numbers) > limitDigit:
    return False
  else:
    return True

def isProblemValid(problems):
  status = 0
  for p in problems:
    elements = p.split()
    if isOperatorValid(elements[1]) == False:
      status = 1 
    elif isNumbersOnly(elements[0]) == False or isNumbersOnly(elements[2]) == False:
      status = 2
    elif isNumberDigitValid(elements[0]) == False or isNumberDigitValid(elements[2]) == False:
      status = 3
  return status

def handleError(problems):
  if isOverLimit(problems):
    return "Error: Too many problems."

  status = isProblemValid(problems)
  if status == 1:
    return "Error: Operator must be '+' or '-'."
  elif status ==2:
    return "Error: Numbers must only contain digits."
  elif status == 3: 
    return "Error: Numbers cannot be more than four digits."
  
  return "NOTHING"

def handleSignleProblem(lines, p, notAns):
  elements = p.split()

  l1 = len(elements[0])
  l2 = len(elements[2])

  length = max(l1, l2) + 2 # max operand add space and operator

  # calculate how many space should be added
  d1 = length - l1
  d2 = length - l2 - 1 

  lines[0].append(d1*" " + elements[0])
  lines[1].append(elements[1] + d2*" " + elements[2])
  lines[2].append(length * "-")

  if notAns == False:
    ans = str(eval(p)) 
    space = length - len(ans)
    lines[3].append(space * " " + ans)

  return lines

def joinLines(lines):
  result = ""
  for line in lines:
    result += "    ".join(line) + '\n'
    
  return result.rstrip('\n')

def handleArithmetic(problems, *showAns):
  lines = [[] for x in range(4)]
  for p in problems: 
    lines = handleSignleProblem(lines, p, showAns[0]==())
  return joinLines(lines)

def arithmetic_arranger(problems, *showAns):
  arranged_problems = ""

  errorMessage = handleError(problems)
  if errorMessage == "NOTHING":
    arranged_problems = handleArithmetic(problems, showAns)
  else:
    arranged_problems = errorMessage
  
  return arranged_problems
