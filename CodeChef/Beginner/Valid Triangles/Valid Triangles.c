#include<stdio.h>
int main()
{
  int n;
  scanf("%d",&n);
  int i;
  for(i=0;i<n;i++){
    int a,b,c;
    scanf("%d %d %d",&a,&b,&c);
    if(a>0&&b>0&&c>0){
      if((a+b+c)==180)
        printf("YES\n");
      else 
        printf("NO\n");
    }
    else  
      printf("NO\n");
  }
}
