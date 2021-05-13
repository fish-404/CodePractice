def calculateMultipleNum(n, k):
    t = (n) // k
    return k * (1 + t) * t // 2

def sumMultiples(n):
    return calculateMultipleNum(n, 3) + calculateMultipleNum(n, 5) - calculateMultipleNum(n, 15)    

t = int(input())
for i in range(t):
    print(sumMultiples(int(input())-1)
