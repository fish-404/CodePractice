# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Beginner [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Beginner/)

#### Encoded String

Problem: [Point Of Impact](https://www.codechef.com/problems/BILLRD/)

tips:

* if the starting coordinate is in diagonal, the collision will happen at the first time, so it must be (n, n)
* other cases can be devided into two kinds, both collision coordinate will go into a cycle every 4 times
  - if starting x larger than y, the collision will be counterclockwise
  - if starting y larger than x, the collision will be clockwise
  
  ![route](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Beginner/Point%20Of%20Impact/route.png)

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Beginner/Point%20Of%20Impact/Point%20Of%20Impact.py) 
