t = int(input())
for i in range(t):
    case = input().split()
    m = int(case[0])
    x = int(case[1])
    y = int(case[2])
    police = input().split()
    police = [int(j) for j in police]
    room = [1] * 100
    for j in range(m):
        if (police[j]-x*y) <= 0:
            begin = 0
        else: 
            begin = police[j] - x*y - 1
        if (police[j]+x*y) >= 100:
            end = 100
        else:
            end = police[j] + x*y
        for k in range(begin, end):
            room[k] = 0
    print(sum(room))    
    
    
