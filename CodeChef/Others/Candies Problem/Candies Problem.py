n = int(input())
last = 0
lastGrade = 0
s = 0
for i in range(n):
    nowGrade = int(input())
    if nowGrade > lastGrade:
        last += 1
        s += last 
    elif nowGrade == lastGrade:
        s += 1
    else:
        if last == 1:
            s += 1 
        else:
            last = 1
        s += last
    lastGrade = nowGrade
    #print(nowGrade, last)
print(s)
