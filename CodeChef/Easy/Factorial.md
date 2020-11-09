#### Factorial

Problem: [Factorial](https://www.codechef.com/problems/FCTRL)

```python
t = int(input())
for i in range(t):
    n = int(input())
    s = 0
    p = 5
    while p <= n:
        s += n // p
        p *= 5
    print(s)
```
