t = int(input())
for i in range(t):
    string = input().split()
    k = int(string[1])
    d = int(string[2])
    
    a = input().split()
    a = [int(x) for x in a]
    s = sum(a)
    if s // k > d:
        print(d)
    else:
        print(s // k)
