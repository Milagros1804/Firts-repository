#include <stdio.h>

int main() {
    int opcion;
    float a, b, resultado;
    
    do {
        printf("\n====== CALCULADORA ======\n");
        printf("1. Suma\n");
        printf("2. Resta\n");
        printf("3. Multiplicacion\n");
        printf("4. Division\n");
        printf("0. Salir\n");
        printf("Opcion: ");
        scanf("%d", &opcion);
        
        if (opcion >= 1 && opcion <= 4) {
            printf("Numero 1: ");
            scanf("%f", &a);
            printf("Numero 2: ");
            scanf("%f", &b);
        }
        
        switch (opcion) {
            case 1:
                printf("Resultado: %.2f\n", a + b);
                break;
            case 2:
                printf("Resultado: %.2f\n", a - b);
                break;
            case 3:
                printf("Resultado: %.2f\n", a * b);
                break;
            case 4:
                if (b == 0)
                    printf("Error: Division por cero!\n");
                else
                    printf("Resultado: %.2f\n", a / b);
                break;
            case 0:
                printf("Saliendo...\n");
                break;
            default:
                printf("Opcion no valida!\n");
        }
    } while (opcion != 0);
    
    return 0;
}
