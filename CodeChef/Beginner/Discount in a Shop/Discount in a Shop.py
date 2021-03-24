def handleNum(num, k):
    stack = []
    n = len(num)
    for i in range(n):
        while len(stack) != 0 and stack[-1] > num[i] and (len(stack) + (n - i -1)) >= (n - k):
            stack.pop()
        
        if len(stack) < n - k:
            stack.append(num[i])
    return stack
    
def handleStrip(stack):
    s = ''.join(stack).lstrip('0')
    if s == '':
        return 0
    else:
        return s

t = int(input())
for i in range(t):
    print(handleStrip(handleNum(list(input()), 1)))
