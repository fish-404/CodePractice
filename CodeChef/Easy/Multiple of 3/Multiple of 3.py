def calDigit(k, d):
    k = (k - 2) % 4
    if (k == 1):
        d *= 2
    elif (k == 2):
        d *= 4
    elif (k == 3):
        d *= 8
    elif (k == 0):
        d *= 6
    #print(d % 10)
    return d % 10
    

t = int(input())
for i in range(t):
    string = input().split()
    n = int(string[0])
    d0 = int(string[1])
    d1 = int(string[2])
    d = d0 + d1
    d2 = d % 10
    s = (d + d2) % 3
    #print(s)
    kind = []
    
    if (n < 7):
        for j in range(3, n):
            s = (s + calDigit(j, d))
    else:
        for j in range(3, 7):
            kind.append(calDigit(j, d))
        #print(kind)
   
        count = (n - 3) % 4
        group = (n - 3) // 4
        t = 0
        for c in kind:
            t += c
        s = (s + (t*group))%3
        for c in range(count):
            s = (kind[c] + s) % 3
    
    if (s % 3):
        print("NO")
    else:
        print("YES")
