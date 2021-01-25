import re

def judgeNum(n):
    if n >= 0 and n <=255:
        return True 
    else:
        return False

def ipv4Judge(s):
    ipv4 = re.compile(r'^(\d{1,3}\.){3}\d{1,3}$')
    if ipv4.match(s):
        s = s.split('.')
        s = [int(x) for x in s]
        for i in s:
            if judgeNum(i) == False:
                return False
        return True
    return False

def ipv6Judge(s):
    ipv6 = re.compile(r'^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$')
    if ipv6.match(s):
        return True
    else:
        return False

t = int(input())
for i in range(t):
    s = input()
    if ipv4Judge(s.rstrip()):
        print("IPv4")
    elif ipv6Judge(s.rstrip()):
        print("IPv6")
    else:
        print("Neither")
    
