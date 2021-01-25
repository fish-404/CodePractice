import re
t = int(input())
pattern = re.compile(r'^[_\.]\d+[a-zA-Z]*_?$')
for i in range(t):
    if pattern.match(input()):
        print("VALID")
    else:
        print("INVALID")
