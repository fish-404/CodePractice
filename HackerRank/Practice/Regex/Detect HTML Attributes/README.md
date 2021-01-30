# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## HackerRank [Back](https://blog.fish-404.icu/CodePractice/HackerRank/)

### Practice [Back](https://blog.fish-404.icu/CodePractice/HackerRank/Practice/)

#### Regex [Back](https://blog.fish-404.icu/CodePractice/HackerRank/Practice/Regex/)

##### Detect HTML Attributes

Problem: [Detect HTML Attributes](https://www.hackerrank.com/challenges/html-attributes/problem)

tips:

* Detect HTML tags first (Reference: [Detect HTML Tags](https://blog.fish-404.icu/CodePractice/HackerRank/Practice/Regex/Detect%20HTML%20Tags/))
* For each tags, search the attribute dependly
  - find out the opening tag statement `new RegExp('<' + tag + '\\b[^>]*>', 'g'`
  - don't forget use `\b` to limit the tag match, or it may return more than you want. (eg. `<br ...>` will be return when you match `<b>`)
  - find out the attribute in each opening tag statement you matched, use `/[a-z]+=["']/g`
    - you can't just match end at `=`, it also will match the request parametere (eg. `<a href="...test.aspx?name=test`, `name=` will be returned)  
  
[JavaScript Demo](https://github.com/fish-404/CodePractice/blob/main/HackerRank/Practice/Regex/Detect%20HTML%20Attributes/Detect%20HTML%20Attributes.js)
