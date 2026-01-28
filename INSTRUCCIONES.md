# 📚 Guía para Agregar Ejercicios de Programación

## ¿Cómo agregar tus ejercicios .c y .cpp?

### Paso 1: Ubicar la semana
En el archivo `ejercicios.html`, encuentra la semana donde quieres agregar tu ejercicio. Por ejemplo, para la Semana 2:

```html
<!-- Semana 2 -->
<div class="week-content" data-week="2">
    <div class="week-header">
        <h2>Semana 2: Estructuras de Control</h2>
        <p>If-else, switch, bucles</p>
    </div>
```

### Paso 2: Reemplazar el estado vacío
Elimina el bloque de "empty-state" y agrégalo después del `week-header`:

```html
<div class="exercises-grid">
    <!-- AQUÍ VAN TUS EJERCICIOS -->
</div>
```

### Paso 3: Agregar un ejercicio
Copia esta plantilla y personalízala con tu código:

```html
<div class="exercise-card">
    <div class="exercise-header">
        <div class="exercise-title">
            <div class="exercise-icon">01</div>
            <div class="exercise-info">
                <h4>Nombre del Ejercicio</h4>
                <div class="exercise-meta">
                    <span>📁 nombre_archivo.c</span>
                    <span>📅 Enero 2026</span>
                </div>
            </div>
        </div>
        <button class="toggle-btn" onclick="toggleCode(this)">Ver Código</button>
    </div>
    <div class="exercise-content">
        <div class="code-container">
            <div class="code-header">
                <div class="code-filename">
                    <span>📄</span>
                    <span>nombre_archivo.c</span>
                    <span class="file-ext">.C</span>
                </div>
                <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-c">// PEGA TU CÓDIGO AQUÍ
#include &lt;stdio.h&gt;

int main() {
    // Tu código
    return 0;
}</code></pre>
        </div>
    </div>
</div>
```

### Paso 4: Personalizar el ejercicio

**Cambios necesarios:**

1. **Número del ejercicio:** Cambia `<div class="exercise-icon">01</div>` al número correspondiente

2. **Título:** Cambia `<h4>Nombre del Ejercicio</h4>` por el nombre de tu ejercicio

3. **Nombre del archivo:** 
   - Cambia `nombre_archivo.c` por el nombre real de tu archivo
   - Para archivos .cpp, cambia `.C` por `.CPP` en:
     ```html
     <span class="file-ext">.CPP</span>
     ```
     Y cambia `language-c` por `language-cpp`

4. **Tu código:** 
   - Reemplaza el código de ejemplo con tu código
   - **IMPORTANTE:** Reemplaza los caracteres especiales:
     - `<` por `&lt;`
     - `>` por `&gt;`
     - Por ejemplo: `#include <stdio.h>` se escribe como `#include &lt;stdio.h&gt;`

### Ejemplo completo para un archivo .cpp:

```html
<div class="exercise-card">
    <div class="exercise-header">
        <div class="exercise-title">
            <div class="exercise-icon">03</div>
            <div class="exercise-info">
                <h4>Calculadora Básica</h4>
                <div class="exercise-meta">
                    <span>📁 calculadora.cpp</span>
                    <span>📅 Enero 2026</span>
                </div>
            </div>
        </div>
        <button class="toggle-btn" onclick="toggleCode(this)">Ver Código</button>
    </div>
    <div class="exercise-content">
        <div class="code-container">
            <div class="code-header">
                <div class="code-filename">
                    <span>📄</span>
                    <span>calculadora.cpp</span>
                    <span class="file-ext">.CPP</span>
                </div>
                <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;

int main() {
    double num1, num2;
    char operador;
    
    cout &lt;&lt; "Ingrese el primer número: ";
    cin &gt;&gt; num1;
    
    cout &lt;&lt; "Ingrese el operador (+, -, *, /): ";
    cin &gt;&gt; operador;
    
    cout &lt;&lt; "Ingrese el segundo número: ";
    cin &gt;&gt; num2;
    
    switch(operador) {
        case '+':
            cout &lt;&lt; "Resultado: " &lt;&lt; num1 + num2;
            break;
        case '-':
            cout &lt;&lt; "Resultado: " &lt;&lt; num1 - num2;
            break;
        case '*':
            cout &lt;&lt; "Resultado: " &lt;&lt; num1 * num2;
            break;
        case '/':
            if(num2 != 0)
                cout &lt;&lt; "Resultado: " &lt;&lt; num1 / num2;
            else
                cout &lt;&lt; "Error: División por cero";
            break;
        default:
            cout &lt;&lt; "Operador inválido";
    }
    
    return 0;
}</code></pre>
        </div>
    </div>
</div>
```

## 📋 Checklist antes de guardar:

- [ ] ¿Cambié el número del ejercicio?
- [ ] ¿Actualicé el título del ejercicio?
- [ ] ¿Puse el nombre correcto del archivo?
- [ ] ¿Cambié la extensión (.C o .CPP)?
- [ ] ¿Cambié `language-c` por `language-cpp` si es necesario?
- [ ] ¿Reemplacé `<` por `&lt;` y `>` por `&gt;` en mi código?
- [ ] ¿Actualicé la fecha?

## 🎨 Tips adicionales:

1. **Puedes agregar varios ejercicios por semana:** Solo copia y pega la plantilla múltiples veces dentro del `exercises-grid`

2. **Personaliza las descripciones de cada semana:** Cambia el título y descripción del `week-header`

3. **El código se resalta automáticamente:** El sistema detecta automáticamente C y C++ y les da colores apropiados

4. **Los visitantes pueden copiar tu código:** Con el botón "Copiar" en cada ejercicio

## 🔧 Estructura de carpetas recomendada:

```
tu-proyecto/
├── portafolio.html
├── ejercicios.html
└── img/
    └── foto.jpg
```

¡Listo! Ahora puedes agregar todos tus ejercicios semana por semana. 🚀