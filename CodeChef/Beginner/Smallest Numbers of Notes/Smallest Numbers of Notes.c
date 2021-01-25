#include<stdio.h>
void carry(int *out,int *number,int x)
{
  while(*number>=x){
    int temp;
    temp = *number/x;
    *out+=temp;   
      *number=*number-temp*x;
  }
}

int main()
{
  int n;
  scanf("%d",&n);
  int i;
  for(i=0;i<n;i++){
    int number,out=0;
    scanf("%d",&number);
    carry(&out,&number,100);
    carry(&out,&number,50);
    carry(&out,&number,10);
    carry(&out,&number,5);
    carry(&out,&number,2);
    out+=number;
    printf("%d\n",out);
  }
}
