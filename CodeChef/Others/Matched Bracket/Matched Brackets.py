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
        if pairs == 0:
            pairsOccur = i + 1
        pairs += 1
        if maxPairs < pairs:
            maxPairs = pairs
            maxPairsOccur = pairsOccur
        if nestDepth < depth:
            nestDepth = depth
            nestOccur = i + 1
    else:
        depth -= 1
        if depth == 0:
            pairs = 0
print(nestDepth, nestOccur, maxPairs*2, maxPairsOccur)
