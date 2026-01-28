// Ejemplo: for con operadores bit a bit y logicos
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 8; i *= 2) {
        cout << "Valor: " << i << ", AND con 3: " << (i & 3) << endl;
    }

    int a = 5, b = 3;
    bool resultado = (a > b) && (a != 0);
    cout << "5 > 3 AND 5 != 0: " << (resultado ? "true" : "false") << endl;

    cout << "NOT de " << a << " (bitwise): " << (~a) << endl;
    return 0;
}
