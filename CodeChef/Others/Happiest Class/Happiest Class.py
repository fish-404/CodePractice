from collections import Counter

case = input().split()
n = int(case[0])
k = int(case[1])
candies = input().split()
candies = [int(x) for x in candies]
favor = input().split()
favor = [int(x) for x in favor]
happynies = input().split()
happynies = [int(x) for x in happynies]

totalHappy = 0

candies = Counter(candies)
for i in range(n):
    if candies[favor[i]] >= k:
        totalHappy += happynies[-1]
        candies[favor[i]] -= k
    else:
        if candies[favor[i]] != 0: 
            totalHappy += happynies[candies[favor[i]]-1]
            candies[favor[i]] = 0
        
print(totalHappy)
