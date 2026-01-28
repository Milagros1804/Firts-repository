#include <stdio.h>

void patronA(int n) {
    printf("\n=== Patron A: Triangulo Ascendente ===\n");
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
}

void patronB(int n) {
    printf("\n=== Patron B: Triangulo Descendente ===\n");
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
}

void patronC(int n) {
    printf("\n=== Patron C: Piramide ===\n");
    for (int i = 1; i <= n; i++) {
        // Espacios
        for (int e = 1; e <= n - i; e++) {
            printf(" ");
        }
        // Asteriscos
        for (int a = 1; a <= 2*i - 1; a++) {
            printf("*");
        }
        printf("\n");
    }
}

int main() {
    int n;
    
    printf("Ingrese N: ");
    scanf("%d", &n);
    
    patronA(n);
    patronB(n);
    patronC(n);
    
    return 0;
}
