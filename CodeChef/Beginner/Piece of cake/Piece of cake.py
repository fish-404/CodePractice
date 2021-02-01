import collections
t = int(input())
for i in range(t):
    string = input()
    dic = collections.Counter(string)
    if max(dic.values())*2 == len(string):
        print("YES")
    else:
        print("NO")
