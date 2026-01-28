#include <stdio.h>

int main() {
    int n;
    int a = 0, b = 1, siguiente;
    
    printf("Ingrese N (cantidad de terminos): ");
    scanf("%d", &n);
    
    if (n <= 0) {
        printf("Error: N debe ser mayor que 0\n");
        return 1;
    }
    
    printf("Serie de Fibonacci (%d terminos):\n", n);
    
    if (n >= 1) {
        printf("%d ", a);
    }
    
    if (n >= 2) {
        printf("%d ", b);
    }
    
    for (int i = 3; i <= n; i++) {
        siguiente = a + b;
        printf("%d ", siguiente);
        a = b;
        b = siguiente;
    }
    
    printf("\n");
    
    return 0;
}
