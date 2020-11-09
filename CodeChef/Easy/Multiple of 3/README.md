#### Multiple of 3

Problem: [Multiple of 3](https://www.codechef.com/LRNDSA01/problems/MULTHREE)

tips: 
* if N is a multiple of 3, the sum of all the digit of N is a multiple of 3
    
    <img src="http://latex.codecogs.com/svg.latex?\sum_{i&space;=&space;0}^{k-1}&space;d_i&space;\mod&space;3&space;\equiv&space;0&space;\mod&space;3" title="http://latex.codecogs.com/svg.latex?\sum_{i = 0}^{k-1} d_i \mod 3 \equiv 0 \mod 3" />
    
* we can calculate every digit by:

<img src="http://latex.codecogs.com/svg.latex?d_0&space;=&space;d_0,&space;" title="http://latex.codecogs.com/svg.latex?d_0 = d_0, " />
 
<img src="http://latex.codecogs.com/svg.latex?d_1&space;=&space;d_1," title="http://latex.codecogs.com/svg.latex?d_1 = d_1," />

<img src="http://latex.codecogs.com/svg.latex?d_2=&space;(d_0&space;&plus;&space;d_1)\mod&space;10," title="http://latex.codecogs.com/svg.latex?d_2= (d_0 + d_1)\mod 10," />

<img src="http://latex.codecogs.com/svg.latex?d_3&space;=&space;(d_0&space;&plus;&space;d_1&space;&plus;&space;d_2)&space;\mod&space;10&space;=&space;2(d_0&space;&plus;&space;d_1)\mod&space;10,\cdots" title="http://latex.codecogs.com/svg.latex?d_3 = (d_0 + d_1 + d_2) \mod 10 = 2(d_0 + d_1)\mod 10,\cdots" />

<img src="http://latex.codecogs.com/svg.latex?d_i&space;=&space;\sum_{j&space;=&space;0}^{i-1}d_j(\mod&space;10)&space;=&space;2&space;^{i-2}(d_0&space;&plus;&space;d_1)&space;\mod&space;10,&space;2&space;\leq&space;i&space;\le&space;k" title="http://latex.codecogs.com/svg.latex?d_i = \sum_{j = 0}^{i-1}d_j(\mod 10) = 2 ^{i-2}(d_0 + d_1) \mod 10, 2 \leq i \le k" />
    
* then you will find the digit go into a cycle, and you just need to count the first 3 digit and a cycle and the cycle left digit

