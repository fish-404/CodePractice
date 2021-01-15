#include <stdio.h>

int main(void) {
	int n,count=0;
	long int k;
	scanf("%d %d",&n,&k);
	int i;
	for(i=0;i<n;i++){
		long long int temp;
		scanf("%lld",&temp);
		if(temp % k ==0)
			count++;
	}
	printf("%d",count);
}
