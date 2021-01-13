#include<stdio.h>
#include<string.h>
int main()
{
  int n;
  scanf("%d",&n);
  getchar();
  int i;
  for(i=0;i<n;i++){
    char ch,sign=' ';
    int a=0,b=0,dot=0;
    while((ch=getchar())!='\n'){
      //ch=getchar();
      if(ch=='A'){
        a++;
        if(sign=='A')
          a+=dot;
        sign='A';
        dot=0;
      }
      else if(ch=='B'){
        b++;
        if(sign=='B')
          b+=dot;
        sign='B';
        dot=0;
      }
      else if(ch=='.')
        dot++;
   }
    printf("%d %d\n",a,b);
 }
}
