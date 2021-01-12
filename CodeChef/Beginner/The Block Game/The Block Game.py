def ispalindrome(string):
    if string[0] == '0':
        return False
    for i in range(len(string) // 2):
        if string[i] != num[-(i+1)]:
            return False
    return True
    
t = int(input())
for i in range(t):
    num = input()
    if ispalindrome(num):
        print("wins")
    else:
        print("loses")
