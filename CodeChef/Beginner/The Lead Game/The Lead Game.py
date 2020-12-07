t = int(input())
winner = 1 
lead = 0
score1 = 0
score2 = 0
for i in range(t):
    scores = input().split()
    score1 += int(scores[0])
    score2 += int(scores[1])
    diff = score1 - score2
    if (diff < 0):
        player = 2
        diff = -diff
    else: 
        player = 1
    if (diff > lead):
        winner = player
        lead = diff
        
print(winner, lead)
