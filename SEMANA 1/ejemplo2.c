// Ejemplo: switch con operadores de comparacion
#include <stdio.h>

int main() {
    int opcion = 2;
    int x = 8, y = 4;

    switch (opcion) {
        case 1:
            printf("Suma: %d\n", x + y);
            break;
        case 2:
            printf("Multiplicacion: %d\n", x * y);
            break;
        case 3:
            printf("Division: %d\n", x / y);
            break;
        default:
            printf("Opcion no valida\n");
    }
    return 0;
}
