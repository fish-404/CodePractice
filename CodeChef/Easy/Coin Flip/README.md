#### Coin Flip

Problem: [Coin Flip](https://www.codechef.com/problems/CONFLIP)

tips: 
* The coins have only two case: Head or Tail, which case it is depends on what the init state and the flip times
* The odd flips make the coin oppsite state, the even make the same
* The filps eventually make the coins count two part, T = H or |T-H| = 1
* The even flips make the coins Head or Tail counts the same, we don't need to care about the init state i.e. T = H
* The odd filps make the T or H depends on the init state, |T-H| = 1, if I = Q, less count will be the desire anwser 
