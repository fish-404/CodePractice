n = int(input())
brackets = input().split()
brackets = [int(x) for x in brackets]
nestDepth = 0
depth = 0
maxPairs = 0
pairs = 0
for i in range(n):
    if brackets[i] == 1:
        depth += 1
        if pairs == 0: # parent opening bracket
            pairsOccur = i + 1 # record occurence
        pairs += 1
        if maxPairs < pairs:
            maxPairs = pairs
            maxPairsOccur = pairsOccur # update occurence
        if nestDepth < depth:
            nestDepth = depth
            nestOccur = i + 1
    else:
        depth -= 1
        if depth == 0:
            pairs = 0 # clear pairs temp count
print(nestDepth, nestOccur, maxPairs*2, maxPairsOccur)
