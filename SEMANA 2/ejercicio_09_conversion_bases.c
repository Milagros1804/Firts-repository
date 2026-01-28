#include <stdio.h>

void decimalABinario(int n) {
    int binario[32];
    int i = 0;
    
    if (n == 0) {
        printf("0\n");
        return;
    }
    
    while (n > 0) {
        binario[i] = n % 2;
        n = n / 2;
        i++;
    }
    
    printf("Binario: ");
    for (int j = i - 1; j >= 0; j--) {
        printf("%d", binario[j]);
    }
    printf("\n");
}

void decimalAOctal(int n) {
    int octal[32];
    int i = 0;
    
    if (n == 0) {
        printf("0\n");
        return;
    }
    
    while (n > 0) {
        octal[i] = n % 8;
        n = n / 8;
        i++;
    }
    
    printf("Octal: ");
    for (int j = i - 1; j >= 0; j--) {
        printf("%d", octal[j]);
    }
    printf("\n");
}

void decimalAHexadecimal(int n) {
    char hex[32];
    int i = 0;
    
    if (n == 0) {
        printf("0\n");
        return;
    }
    
    while (n > 0) {
        int resto = n % 16;
        if (resto < 10) {
            hex[i] = '0' + resto;
        } else {
            hex[i] = 'A' + (resto - 10);
        }
        n = n / 16;
        i++;
    }
    
    printf("Hexadecimal: ");
    for (int j = i - 1; j >= 0; j--) {
        printf("%c", hex[j]);
    }
    printf("\n");
}

int main() {
    int opcion, numero;
    
    do {
        printf("\n====== CONVERSION DE BASES ======\n");
        printf("1. Decimal a Binario\n");
        printf("2. Decimal a Octal\n");
        printf("3. Decimal a Hexadecimal\n");
        printf("4. Salir\n");
        printf("Opcion: ");
        scanf("%d", &opcion);
        
        if (opcion >= 1 && opcion <= 3) {
            printf("Ingrese numero decimal: ");
            scanf("%d", &numero);
            
            if (numero < 0) {
                printf("Error: Ingrese un numero positivo\n");
                continue;
            }
        }
        
        switch (opcion) {
            case 1:
                decimalABinario(numero);
                break;
            case 2:
                decimalAOctal(numero);
                break;
            case 3:
                decimalAHexadecimal(numero);
                break;
            case 4:
                printf("Saliendo...\n");
                break;
            default:
                printf("Opcion no valida!\n");
        }
    } while (opcion != 4);
    
    return 0;
}
