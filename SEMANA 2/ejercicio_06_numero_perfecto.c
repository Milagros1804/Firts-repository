#include <stdio.h>

int main() {
    int n, suma = 0;
    
    printf("Ingrese un numero: ");
    scanf("%d", &n);
    
    if (n <= 1) {
        printf("Error: El numero debe ser mayor que 1\n");
        return 1;
    }
    
    printf("Divisores de %d: ", n);
    
    for (int i = 1; i < n; i++) {
        if (n % i == 0) {
            printf("%d ", i);
            suma += i;
        }
    }
    
    printf("\nSuma de divisores: %d\n", suma);
    
    if (suma == n) {
        printf("%d ES un numero PERFECTO\n", n);
    } else {
        printf("%d NO es un numero perfecto\n", n);
    }
    
    return 0;
}
