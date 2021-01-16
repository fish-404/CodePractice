# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Beginner [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Beginner/)

#### Good Joke!

Problem: [Good Joke!](https://www.codechef.com/problems/RRJOKE)

tips:

- The problem ask you find out the short path
- The problem ask you output the H(p), where p is a permutation which is the short path permutation lexicographically
- H(P) = P1 xor P2 xor ... xor PN
- xor is commutative, so we don't need care about p's order
- At last, we find we just need calculte 1 xor 2 xor ... xor n, and we don't need to care about the short path 🤣

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Beginner/Good%20Joke!/Good%20Joke!.py)
