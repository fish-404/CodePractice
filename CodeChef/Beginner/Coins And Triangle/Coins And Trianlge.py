import math
t = int(input())
for i in range(t):
    n = int(input())
    print((math.floor(math.sqrt(1+8*n))-1) // 2) # get the positive solution of r*r+r-2n=0
