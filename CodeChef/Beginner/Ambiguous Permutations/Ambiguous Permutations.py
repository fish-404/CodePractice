while True:
    n = int(input())
    if n == 0:
        break
    pRead = input().split()
    pRead = [int(x) for x in pRead]
    pNew = [None] * n
    for i in range(n):
        pNew[pRead[i]-1] = i+1
    if pRead == pNew:
        print("ambiguous")
    else:
        print("not ambiguous")
