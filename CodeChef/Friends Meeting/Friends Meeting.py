def isPrime(num):
    prime = [2, 3, 5, 7
    , 11, 13, 17, 19
    , 23, 29
    , 31, 37
    , 41, 43, 47
    , 53, 59
    , 61, 67
    , 71, 73, 79
    , 91, 97]
    
    return num in prime
    
t = int(input())
for i in range(t):
    n = int(input())
    nums = input().split()
    #print(nums)
    nums = [int(x) for x in nums]
    nums.sort()
    #print(nums)
    p = 0
    if (nums[0] == 1):
        for j in range(1, n):
            if (isPrime(nums[j])):
                p = nums[j]
                break
        if(p == 0):
            print("-1")
        else: 
            print(p)
    else:
        print("-1")
        
