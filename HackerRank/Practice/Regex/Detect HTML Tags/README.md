# CodePractice [Back](https://blog.fish-404.icu/CodePractice/)

## HackerRank [Back](https://blog.fish-404.icu/CodePractice/HackerRank/)

### Practice [Back](https://blog.fish-404.icu/CodePractice/HackerRank/Practice/)

#### Regex [Back](https://blog.fish-404.icu/CodePractice/HackerRank/Practice/Regex/)

##### Detect HTML Tags

Problem: [Detect HTML Tags](https://www.hackerrank.com/challenges/detect-html-tags/problem)

tips:

* Tags come in pairs: we can only catch the closing tag. (use `/<\/[a-z][a-z|\d]*>/g`)
  - don't forget the tags may be serveral characters like `</div>`, and may be with numbers like `</h1>`
* Self-closing tags: we should catch the whole self-closing tag. (use `/<[a-z][^>]*\/>/`)
  - similar as tags come in pairs, don't forget the tags with serveral letters
  - don't forget self-closing tags may include attribute, like `<br class="test"/>`, so we must match the whole fragment
  - to aovid match the openning tag of tags come in pairs, you should escape `>`
* After you get the tags with `<>`, you should use regex to rid the `<>` symbol again. (use `/[a-z][a-z|\d]*/g`)
  - your task is match letters in you matched array
  - don't forget tags may be serveral characters
  - don't forget tags with number
  - for self-closing, the regex will also return its attribute since we match the whole fragment, so you can just use the first matched in the array
* use set to aovid add the same tags duplicate

[JavaScript Demo](https://github.com/fish-404/CodePractice/blob/main/HackerRank/Practice/Regex/Detect%20HTML%20Tags/Detect%20HTML%20Tags.js)
