// Ejemplo: for y while con operadores logicos
#include <stdio.h>

int main() {
    int i;
    printf("Pares del 1 al 10: ");
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            printf("%d ", i);
        }
    }
    printf("\n");

    int n = 5;
    while (n > 0 && n < 10) {
        printf("n = %d\n", n);
        n--;
    }
    return 0;
}
