// Ejemplo: do-while con operadores de incremento
#include <iostream>
using namespace std;

int main() {
    int contador = 1;
    int suma = 0;

    do {
        suma += contador;
        cout << "Iteracion " << contador << ", suma acumulada: " << suma << endl;
        contador++;
    } while (contador <= 5);

    cout << "Suma total: " << suma << endl;
    return 0;
}
