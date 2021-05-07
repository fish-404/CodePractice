import re

def handleUKword(UKword):
    return UKword.replace('our', 'or')

def matchCount(UKword, sentence):
    USword = handleUKword(UKword)
    USword = rf"\b{USword}\b"
    UKword = rf"\b{UKword}\b"
    return len(re.findall(UKword, sentence)) + len(re.findall(USword, sentence))    

n = int(input())
sentence = ""
for i in range(n):
    sentence += input() + " "
t = int(input())
for j in range(t):
    print(matchCount(input(), sentence))
    
