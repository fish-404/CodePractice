# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## CodeChef [Back](https://blog.fish-404.icu/CodePractice/CodeChef/)

### Beginner [Back](https://blog.fish-404.icu/CodePractice/CodeChef/Beginner/)

#### Villages and Tribes
Probelm: [Villages and Tribes](https://www.codechef.com/problems/VILTRIBE)

tips:

* you should have a `sign` to store which village occurs before, just like a border
* when you meet 'A' or 'B', the behaviour is the same you should do 
  - if `sign` is the same as now you reading, you should add the dots occur in between `sign` and this one
  - whatever `sign` is, you should clear dot counts(if it exits, you must count before) and set the `sign`
* when you meet '.', you just need to add the '.' count

[C Demo](https://github.com/fish-404/CodePractice/blob/main/CodeChef/Beginner/Villages%20and%20Tribes/Villages%20and%20Tribes.c)
