CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Others [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Others/)

#### Infix to Postfix

Problem: [Infix to Postfix](https://www.codechef.com/LRNDSA02/problems/INPSTFIX)

tips:

  * if character is `(` , push into stack A
  * if character is alphabet character, push into stack B
  * if character is an operator, compare its grade to the top of the stack A
    - if the top of the stack A is greater or equal than the current operator, pop and push into stack B
    - else push into stack A
    - repeat the process
  * if character is `)` , push items in stack A into stack B until meet `(`
  * push items left in stack A into stack B
  
[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Others/Infix%20to%20Postfix/Infix%20to%20Postfix.py)
