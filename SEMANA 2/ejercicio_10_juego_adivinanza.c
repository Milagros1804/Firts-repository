#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int numeroSecreto, intento, numIntentos = 0;
    int maxIntentos = 10;
    
    // Inicializar generador de numeros aleatorios
    srand(time(0));
    numeroSecreto = rand() % 100 + 1; // Numero entre 1 y 100
    
    printf("====== JUEGO DE ADIVINANZA ======\n");
    printf("Adivina el numero (1-100)!\n");
    printf("Tienes %d intentos.\n\n", maxIntentos);
    
    do {
        numIntentos++;
        printf("Intento %d: ", numIntentos);
        scanf("%d", &intento);
        
        if (intento < 1 || intento > 100) {
            printf("Por favor, ingresa un numero entre 1 y 100\n");
            numIntentos--;
            continue;
        }
        
        if (intento < numeroSecreto) {
            printf("El numero es MAYOR\n");
        } else if (intento > numeroSecreto) {
            printf("El numero es MENOR\n");
        } else {
            printf("\n*** FELICIDADES! ***\n");
            printf("Adivinaste el numero en %d intentos!\n", numIntentos);
            return 0;
        }
        
        if (numIntentos >= maxIntentos) {
            printf("\nLo siento, alcanzaste el limite de intentos.\n");
            printf("El numero era: %d\n", numeroSecreto);
            return 0;
        }
        
    } while (intento != numeroSecreto);
    
    return 0;
}
