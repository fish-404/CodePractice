# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Others [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Others/)

#### Matched Bracket

Problem: [Matched Brackets](https://www.codechef.com/LRNDSA02/problems/ZCO12001)

tips: 

* for nest depth: 
  - opening brackets: add depth, if it is larger than now max, update and record the occurence position
  - close brackets: reduce depth
* for max pairs:
  - opening brackets: 
    * if it is parent opening occurs, record occurence position
    * add pairs count
    * if it is larger then now max, update max pairs and the position
  - close bracket:
    * if depth is zero after depth reduce, it means parent bracket ended, so clear the temp pairs record

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Others/Matched%20Brackets/Matched%20Brackets.py)
