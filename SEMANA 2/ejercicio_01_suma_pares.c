#include <stdio.h>

int main() {
    int n, suma = 0;
    
    printf("Ingrese N: ");
    scanf("%d", &n);
    
    // Metodo 1: Incremento de 2
    for (int i = 2; i <= n; i += 2) {
        suma += i;
    }
    
    printf("Suma: %d\n", suma);
    
    return 0;
}
