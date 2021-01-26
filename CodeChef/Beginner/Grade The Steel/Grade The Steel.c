#include<stdio.h>
int main()
{
  int n;
  scanf("%d",&n);
  int i;
  for(i=0;i<n;i++){
  	int hardness,tensile;
    float carbon;
    scanf("%d %f %d",&hardness,&carbon,&tensile);
    int flag = 0x0,grade;
    if(hardness>50)
      flag |= 1<<2;
    if(carbon<0.7)
      flag |= 1<<1;
    if(tensile>5600)
      flag |= 1<<0;
    switch(flag){
      case 0x7: grade = 10; break;
      case 0x6: grade = 9; break;
      case 0x3: grade = 8; break;
      case 0x5: grade = 7; break;
      case 0x1: case 0x2: case 0x4:
        grade = 6; break;
      default: grade = 5; 
    }
    printf("%d\n",grade);
  }
}
