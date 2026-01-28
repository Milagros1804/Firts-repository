#include <stdio.h>
#include <string.h>

int main() {
    char password[100];
    int longitud, tieneMayuscula = 0, tieneMinuscula = 0;
    int tieneDigito = 0, tieneEspecial = 0;
    
    printf("Ingrese una contrasena: ");
    scanf("%s", password);
    
    longitud = strlen(password);
    
    // Verificar cada caracter
    for (int i = 0; i < longitud; i++) {
        char c = password[i];
        
        if (c >= 'A' && c <= 'Z') {
            tieneMayuscula = 1;
        } else if (c >= 'a' && c <= 'z') {
            tieneMinuscula = 1;
        } else if (c >= '0' && c <= '9') {
            tieneDigito = 1;
        } else if (c == '!' || c == '@' || c == '#' || c == '$' || c == '%') {
            tieneEspecial = 1;
        }
    }
    
    printf("\n=== Verificacion de Criterios ===\n");
    printf("Longitud minima (8): %s\n", longitud >= 8 ? "OK" : "FALTA");
    printf("Letra mayuscula: %s\n", tieneMayuscula ? "OK" : "FALTA");
    printf("Letra minuscula: %s\n", tieneMinuscula ? "OK" : "FALTA");
    printf("Digito: %s\n", tieneDigito ? "OK" : "FALTA");
    printf("Caracter especial (!@#$%%): %s\n", tieneEspecial ? "OK" : "FALTA");
    
    if (longitud >= 8 && tieneMayuscula && tieneMinuscula && tieneDigito && tieneEspecial) {
        printf("\nContrasena VALIDA\n");
    } else {
        printf("\nContrasena INVALIDA\n");
    }
    
    return 0;
}
