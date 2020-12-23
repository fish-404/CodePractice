def countOnce(nums):
    minNum = min(nums)
    minOrder = nums.index(minNum)
    nums = [x - minNum for x in nums]
    if nums[0] == 0: # recursion end
        return minNum * len(nums)
    else:
        return minNum * len(nums) + countOnce(nums[:minOrder])
    
    
t = int(input())
for i in range(t):
    n = int(input())
    s = input().split()
    s = [int(x) for x in s]
    print(countOnce(s))
