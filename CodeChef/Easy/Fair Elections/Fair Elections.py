t = int(input())
for i in range(t):
    count = input().split()
    num = min(int(count[0]), int(count[1]))
    a = input().split()
    a = [int(x) for x in a]
    b = input().split()
    b = [int(x) for x in b]
    for i in range(num+1): # max swap times
        #print(a, sum(a), b, sum(b))
        minA = min(a)
        maxB = max(b)
        if sum(a) > sum(b):
            print(i)
            break
        elif minA >= maxB:
            print(-1)
            break
        else:
            a[a.index(minA)] = maxB
            b[b.index(maxB)] = minA
