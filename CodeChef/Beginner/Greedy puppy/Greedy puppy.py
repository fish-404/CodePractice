t = int(input())
for i in range(t):
    maxLeft = 0
    case = input().split()
    n = int(case[0])
    k = int(case[1])
    left = 0
    for j in range(1, k+1):
        left = n - n // j * j
        if left > maxLeft:
            maxLeft = left
    print(maxLeft)
