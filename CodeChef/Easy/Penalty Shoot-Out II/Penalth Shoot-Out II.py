t = int(input())
for i in range(t):
    n = int(input())
    team = "01"*n
    score = input()
    countA = 0
    countB = 0
    c = 0
    pairTS = [(team[i], score[i]) for i in range(0, len(team))]
    for j in pairTS:
        c += 1 # count round
        if j == ('0', '1'):
            countA += 1
        elif j == ('1', '1'):
            countB += 1
        if c % 2 == 0:
            leftA = leftB = (2 * n - c) // 2
        else:
            leftA = (2 * n - c) // 2
            leftB = leftA + 1
        if countB - countA > leftA or countA - countB > leftB or c == 2 * n:
            print(c)
            break
