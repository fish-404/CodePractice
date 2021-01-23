t = int(input())
for i in range(t):
    case = input().split()
    n = int(case[0])
    m = int(case[1])
    k = int(case[2])
    diff = abs(n-m)
    if k >= diff: 
        print(0)
    else:
        print(diff-k)
