t = int(input())
letters = 'abcdefghijklmnop'
for i in range(t):
    n = int(input())
    result = []
    string = input()
    for j in range(n // 4): # every 4 digit as a group
        result.append(letters[int(string[j*4:j*4+4], 2)])
    print(''.join(result))
