#### Penalty Shoot-Out II
Problem: [Penalty Shoot-Out II](https://www.codechef.com/LRNDSA02/problems/PSHOT)

tips:
* Win condition:
  - for A: ScoreA - ScoreB > leftRoundB
  - for B: ScoreB - ScoreA > leftRoundA

Note: 
  * We can't use `abs()` to judge, because in odd round, leftRoundA is different from leftRoundA
  * don't forget case games ended in last round
