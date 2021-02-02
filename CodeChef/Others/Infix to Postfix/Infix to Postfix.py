def infixToPostfix(string):
    stackA = []
    stackB = []
    operator = {
        '+': 1, 
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    }   
    
    for c in string: 
        if c == '(':
            stackA.append(c)
        elif c.isalpha():
            stackB.append(c)
        elif c == ')':
            while stackA[-1] != '(':
                stackB.append(stackA.pop())
            stackA.pop()
        else:
            while len(stackA) != 0 and operator.get(stackA[-1], -1) >= operator.get(c, -1):
                stackB.append(stackA.pop())
            stackA.append(c)
    while len(stackA):
        stackB.append(stackA.pop())
        
    return ''.join(stackB)
                

t = int(input())
for i in range(t):
    l = input()
    string = input()
    print(infixToPostfix(string))
    
    
