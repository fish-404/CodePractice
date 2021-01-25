t = int(input())
for i in range(t):
    input()
    case = input().split()
    case = [int(x) for x in case]
    case.sort()
    print(case[0] + case[1])
