t = int(input())
for i in range(t):
    n = int(input())
    profit = 0
    for j in range(n):
        case = input().split()
        s = int(case[0])
        p = int(case[1])
        v = int(case[2])
        newProfit = v * (p // (s + 1))
        if (newProfit > profit):
            profit = newProfit
    print(profit)
