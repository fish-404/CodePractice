import math

def getLargestPrime(n):
    maxPrime = 1
    if n % 2 == 0:
        maxPrime = 2
        while n % 2 == 0:
            n = n // 2
    for i in range(3, int(math.sqrt(n))+1, 2):
        if n % i == 0:
            maxPrime = i
            while n % i == 0:
                n = n // i
    if n == 1:
        return maxPrime
    else:
        return n
        
t = int(input())
for i in range(t):
    print(getLargestPrime(int(input())))
