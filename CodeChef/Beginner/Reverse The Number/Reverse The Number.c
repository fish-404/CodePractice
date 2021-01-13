#include<stdio.h>
int main()
{
  int n;
  scanf("%d",&n);
  int i;
  for(i=0;i<n;i++){
    int number,dig,sta=0;
    scanf("%d",&number);
    while(number!=0){
        dig = number%10;
        if(dig!=0)
            sta++;
        if(sta!=0)
            printf("%d",dig);
        number/=10;
    }
    printf("\n");
  }
}
