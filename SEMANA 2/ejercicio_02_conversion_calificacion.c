#include <stdio.h>

int main() {
    int nota;
    
    printf("Ingrese la nota (0-20): ");
    scanf("%d", &nota);
    
    if (nota < 0 || nota > 20) {
        printf("Error: Nota fuera de rango\n");
    } else if (nota >= 18) {
        printf("A - Excelente\n");
    } else if (nota >= 15) {
        printf("B - Muy Bueno\n");
    } else if (nota >= 11) {
        printf("C - Bueno\n");
    } else if (nota >= 8) {
        printf("D - Regular\n");
    } else {
        printf("F - Desaprobado\n");
    }
    
    return 0;
}
