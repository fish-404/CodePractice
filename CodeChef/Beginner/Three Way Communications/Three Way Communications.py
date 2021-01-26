t = int(input())
for i in range(t):
    r = int(input())
    chef = input().split()
    head = input().split()
    sub = input().split()
    chef = [int(x) for x in chef]
    head = [int(x) for x in head]
    sub = [int(x) for x in sub]
    chefHeadPow = (chef[0] - head[0])**2 + (chef[1] - head[1])**2
    subHeadPow = (sub[0] - head[0])**2 + (sub[1] - head[1])**2
    chefSubPow = (chef[0] - sub[0])**2 + (chef[1] - sub[1])**2
    rPow = r**2
    if (chefSubPow > rPow and chefHeadPow > rPow) or (chefHeadPow > rPow and subHeadPow > rPow) or (subHeadPow > rPow and chefSubPow > rPow):
        print("no")
    else: 
        print("yes")
    
