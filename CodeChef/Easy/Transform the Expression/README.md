# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Easy [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Easy/)

#### Transform the Expression
Problem: [Transform the Expression](https://www.codechef.com/problems/ONP)

tips:
* use two stack to store, one for operater(called A), one for operand(called B)
* read each character `c` in the expression, take a judgement:
  * if `c` is a left brace, ignore
  * if `c` is a letter, push into A
  * if `c` is a oprand, push into B
  * if `c` is a right brace, pop a oprand from B, and push it into A
  
> each expression has only one RPN form

Note: the restriction in problem simplify the problem, we don't need considerate the operand proprity

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Others/Matched%20Brackets/Matched%20Brackets.py)
