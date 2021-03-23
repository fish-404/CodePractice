t = int(input())
for i in range(t):
    case = int(input())
    nums = input().split()
    nums = [int(x) for x in nums]
    print(min(nums) * (case - 1))
