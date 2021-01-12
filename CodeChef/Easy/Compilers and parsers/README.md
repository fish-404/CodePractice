# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Easy [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Easy/)

#### Compilers and parsers

Problem: [Compilers and parsers](https://www.codechef.com/problems/COMPILER)

tips: 
* use a stack to store
* if command is `<`, push into stack
* if command is `>`
  - if stack is empty, means there is no `<` to pair `>`, end
  - if stack is not empty, pop a element
    * judge again, if stack is empty, record now legal lenth, maybe the lenth is not the max, like command string `<<>><>` in position 4
    * if the stack is not empty, there is still `<` to pair, maybe `<` is more than required, like command string `<<<>>`
    
[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Easy/Compilers%20and%20parsers/Compliers%20and%20parsers.py)
