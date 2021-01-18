#include<stdio.h>
int main()
{
  int n;
  scanf("%d",&n);
  int i;
  for(i=0;i<n;i++){
    int number,temp=0;
    scanf("%d",&number);
    while(number!=0){
      temp += number % 10;
      number/=10;
    }
    printf("%d\n",temp);
  }
}
