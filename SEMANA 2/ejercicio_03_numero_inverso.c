#include <stdio.h>

int main() {
    int n, original;
    int inverso = 0;
    
    printf("Ingrese numero: ");
    scanf("%d", &n);
    original = n;
    
    while (n > 0) {
        int digito = n % 10;
        inverso = inverso * 10 + digito;
        n = n / 10;
    }
    
    printf("Original: %d\n", original);
    printf("Inverso: %d\n", inverso);
    
    return 0;
}
