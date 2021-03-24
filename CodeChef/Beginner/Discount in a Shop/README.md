# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Beginner [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Beginner/)

#### Discount in a Shop

Problem: [Discount in a Shop](https://www.codechef.com/ICPCTR01/problems/DISCSHOP)

Reference: [c-How to get the leat number after deleting k digits from the input number - Stack Overflow](https://stackoverflow.com/questions/28223580/how-to-get-the-least-number-after-deleting-k-digits-from-the-input-number)

tips:

* use a stack to store the num you want to left
* push condition:
  - if stack size less than `n-k` digit, i.e. the stack size less than you want to left digit
* pop condition(fit all i.e. use `and`):
  - stack is not empty
  - the top element of the stack bigger than the digit you handle now
  - the sum of stack size and the left digit greater than the num of digit you want to left

[Python Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Beginner/Discount%20in%20a%20Shop/Discount%20in%20a%20Shop.py)
