def count(i, n, q):
    if (n % 2): 
        if (i == q):
            return n // 2
        else:
            return n // 2 + 1
    else:
        return n // 2
    
t = int(input())
for i in range(t):
    g = int(input())
    for j in range(g):
        s = input().split()
        print(count(int(s[0]), int(s[1]), int(s[2])))
