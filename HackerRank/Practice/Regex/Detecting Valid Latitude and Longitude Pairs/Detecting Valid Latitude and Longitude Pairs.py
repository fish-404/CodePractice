import re

def formatCheck(s):
    pattern = re.compile(r'^\([+-]?\d{1,2}(\.\d+)?,\s[+-]?\d{1,3}(\.\d+)?\)$')
    if pattern.match(s):
        if numCheck(s):
            return True
        else: 
            return False
    else:
        return False

def numCheck(s):
    s = s.lstrip('(').rstrip(')')
    s = re.split(',', s)
    if float(s[0]) > 90 or float(s[0]) < -90:
        return False
    if float(s[1]) > 180 or float(s[1]) < -180:
        return False
    
    return True
        
t = int(input())
for i in range(t):
    case = input()
    if formatCheck(case):
        print("Valid")
    else:
        print("Invalid")
    
