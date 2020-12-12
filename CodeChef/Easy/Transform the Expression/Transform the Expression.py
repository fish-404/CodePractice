def tranExpression(expression):
    stackA = []
    stackB = []
    # read every char in the expression
    for c in expression:
        if c.isalpha(): # operator push into stack
            stackA.append(c)
            continue
        elif c == '(':
            continue
        elif c == ')':
            if stackB:
                stackA.append(stackB.pop()) #operand pop from B push into A
        else: # operand push into stack
            stackB.append(c)
    return "".join(stackA)
    
t = int(input())
for i in range(t):
    e = input()
    print(tranExpression(e))
