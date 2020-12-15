t = int(input())
for i in range(t):
    case = input().split()
    quantity = int(case[0])
    price = int(case[1])
    if quantity > 1000:
        print("{:.6f}".format(quantity*price*0.9))
    else: 
        print("{:.6f}".format(quantity*price))
