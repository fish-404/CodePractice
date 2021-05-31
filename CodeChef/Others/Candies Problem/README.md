# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Others [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Others/)

#### Candies Problem

Problem: [Candies Problem](https://www.codechef.com/MISC2021/problems/MCQ2)

tips:

* Notice that if the last one bigger than now one
  - Take an Example: the sample input case 2
 > 2 4 2 6 1 7 8 9 2 1
 - Seems 9 is bigger than 2, I will give 1 to 2 first;
 - But 1 is the next, if it last one is also 1, 2 is not correct with 1
 - In this case, add 1 to 2 to fix 

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Others/Candies%20Problem/Candies%20Problem.py)
