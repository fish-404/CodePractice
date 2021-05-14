def countFn(n):
    s = 0
    first = 1
    second = 2
    while second <= n:
        if second % 2 == 0:
            s += second 
        now = first + second
        first = second
        second = now
    return s

t = int(input())

for i in range (t):
    print(countFn(int(input()))
