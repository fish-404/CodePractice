def judgeIndia(string, n):
    for i in range(n):
        if string[i] == 'Y':
            return 0
        elif string[i] == 'I':
            return 1
    return -1

t = int(input())
for i in range(t):
    n = int(input()) 
    s = input()
    if judgeIndia(s, n) == 1:
        print("INDIAN")
    elif judgeIndia(s, n) == 0:
        print("NOT INDIAN")
    else:
        print("NOT SURE")
