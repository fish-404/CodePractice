def sum(d, n):
    if (d == 1):
        return (1 + n)* n / 2
    else:
        return sum(1, sum(d-1, n))

t = int(input())
for i in range(t):
    case = input().split()
    d = int(case[0])
    n = int(case[1])
    print(int(sum(d, n)))
