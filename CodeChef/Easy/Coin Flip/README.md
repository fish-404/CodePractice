# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Easy [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Easy/)

#### Coin Flip

Problem: [Coin Flip](https://www.codechef.com/problems/CONFLIP)

tips: 
* The coins have only two case: Head or Tail, which case it is depends on what the init state and the flip times
* The odd flips make the coin oppsite state, the even make the same
* The filps eventually make the coins count two part, T = H or \|T-H\| = 1
* The even flips make the coins Head or Tail counts the same, we don't need to care about the init state i.e. T = H
* The odd filps make the T or H depends on the init state, \|T-H\| = 1, if I = Q, less count will be the desire anwser 

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Easy/Coin%20Flip/Coin%20Flip.py)
  

