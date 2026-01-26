// Ejemplo: if-else con operadores aritmeticos
#include <stdio.h>

int main() {
    int a = 10, b = 5;
    int suma = a + b;
    int resta = a - b;

    if (suma > resta) {
        printf("Suma (%d) es mayor que resta (%d)\n", suma, resta);
    } else {
        printf("Resta es mayor o igual\n");
    }

    int resultado = (a > b) ? a * 2 : b * 2;
    printf("Resultado ternario: %d\n", resultado);
    return 0;
}