def checkMatch(chara, charb):
    if chara == charb or chara == '?' or charb == '?':
        return True
    else:
        return False
        
def checkStringMatch(stringa, stringb):
    for i in range(len(stringa)):
        if checkMatch(stringa[i], stringb[i]) == False:
            return False
    return True

t = int(input())
for i in range(t):
    stringa = input()
    stringb = input()
    if checkStringMatch(stringa, stringb):
        print('Yes')
    else:
        print('No')
    
