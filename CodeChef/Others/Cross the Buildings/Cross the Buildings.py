case = input().split()
n = int(case[0])
green = int(case[1])
buildings = input().split()
buildings = [int(x) for x in buildings]
red = [] 

flag = 1
for i in range(n-1):
    if buildings[i] == buildings[i+1]:
        continue
    elif buildings[i] < buildings[i+1]:
        if red != []:
            if (red[-1] + green) < (buildings[i+1] - buildings[i]):
                flag = 0
                break
            elif (red[-1] + green) == (buildings[i+1] - buildings[i]):
                del(red[-1])
                green = 0
            else:
                if red[-1] >= (buildings[i+1] - buildings[i]):
                    red[-1] = red[-1] + buildings[i] - buildings[i+1]
                else:
                    green = green - ((buildings[i+1]-buildings[i]) - red[-1])
                    del(red[-1])
        else:
            if green < buildings[i+1] - buildings[i]:
                flag = 0
                break
            else:
                green -= buildings[i+1] - buildings[i]
    else:
        red.append(buildings[i] - buildings[i+1])

if flag:
    print("YES")
else:
    print("NO")
