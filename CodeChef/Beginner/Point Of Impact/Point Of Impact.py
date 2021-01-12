t = int(input())
for i in range(t):
    data = input().split()
    n = int(data[0])
    k = int(data[1])
    x = int(data[2])
    y = int(data[3])
    
    if x == y:
        print(n, n)
        continue
    else:
        point = []
        d = y - x
        if d < 0:
            point.append([n, n + d])
            point.append([n + d, n])
            point.append([0, -d])
            point.append([-d, 0])
        elif d > 0:
            point.append([n - d, n])
            point.append([n, n - d])
            point.append([d, 0])
            point.append([0, d])
        print(point[k % 4 - 1][0], point[k % 4 - 1][1])
