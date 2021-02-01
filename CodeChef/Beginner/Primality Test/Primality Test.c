#include<stdio.h>
int main()
{
  int n;
  scanf("%d",&n);
  int i;
  for(i=0;i<n;i++){
    int number,truth=1;
    scanf("%d",&number);
    int j;
    for(j=2;j*j<number;j++){
      if(number%j==0){
        truth=0;
        break;
      }
    }
    if(number==2)
      truth=1;
    if(truth==1)
      printf("yes\n");
    else
      printf("no\n");
  }
}
