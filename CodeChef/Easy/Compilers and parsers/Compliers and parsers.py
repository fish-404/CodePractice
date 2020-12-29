t = int(input())
for i in range(t):
    command = input()
    legal = 0 
    stack = []
    for j in range(len(command)):
        if command[j] == '<':
            stack.append(command[j])
        else:
            if len(stack) == 0: # if stack is empty, no '<' can pair '>', end 
                break
            else:
                stack.pop()
                if len(stack) == 0: # if stack is empty, all '<' before current position is paired, but that maybe not the max
                    legal = j + 1
    print(legal)
