import re

t = int(input())
for i in range(t):
    case = input()
    case = re.split(r'\D+', case);
    print("CountryCode={0[0]},LocalAreaCode={0[1]},Number={0[2]}".format(case))
