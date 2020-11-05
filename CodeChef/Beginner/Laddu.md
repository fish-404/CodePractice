#### Laddu

Problem: [Laddu](https://www.codechef.com/LRNDSA01/problems/LADDU)

``` python
t = int(input())
for i in range(t):
    string = input().split() 
    activities = int(string[0])
    #print(activities)
    origin = string[1]
    
    laddus = 0
    for j in range(activities):
        item = input().split()
        #print(item[0])
        if (item[0] == "CONTEST_WON"):
            laddus += 300
            rank = int(item[1])
            if (rank < 20):
                laddus = laddus + 20 - rank
            continue
        if (item[0] == "TOP_CONTRIBUTOR"):
            laddus += 300
            continue
        if (item[0] == "BUG_FOUND"):
            laddus += int(item[1])
            continue
        if (item[0] == "CONTEST_HOSTED"):
            laddus += 50
            continue

    
    if (origin == "INDIAN"):
        print(laddus // 200)
    else:
        print(laddus // 400)
  ```
