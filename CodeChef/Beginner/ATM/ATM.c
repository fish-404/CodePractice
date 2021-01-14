#include <stdio.h>

int main(void) {
	int want;
	double have;
	scanf("%d %lf",&want,&have);
	if(want > (have-0.5))
		printf("%.2f",have);
	else if(want % 5!=0)
		printf("%.2f",have);
	else
		printf("%.2f",have-want-0.5);
	return 0;
}
