# 📚 Guía para Agregar Ejercicios - Versión Integrada

## ✅ Cambios Implementados

✨ **Tu página ahora está completamente integrada:**
- Los ejercicios están en la misma página principal
- Los íconos funcionan correctamente (Font Awesome)
- La ruta de la foto está corregida: `foto/foto.jpg`
- Navegación mejorada con sección de ejercicios

## 📁 Estructura de Carpetas Correcta

```
tu-repositorio/
├── index.html          ← Página principal con todo integrado
├── ejercicios.html     ← Puedes eliminar este archivo
├── .nojekyll          ← Mantener
├── INSTRUCCIONES.md   
└── foto/
    └── foto.jpg       ← Tu foto debe estar en esta carpeta
```

## 🎯 Cómo Agregar Nuevos Ejercicios

### 1. Ubicar la Semana en index.html

Busca la semana correspondiente. Por ejemplo, para la Semana 2:

```html
<!-- Semana 2 -->
<div class="week-section" data-week="2">
    <div class="week-header-ejercicios">
        <h3>Semana 2: Estructuras de Control</h3>
        <p>If-else, switch, bucles</p>
    </div>
    <div class="empty-state">
        <!-- ELIMINA ESTO Y REEMPLAZA CON TUS EJERCICIOS -->
    </div>
</div>
```

### 2. Reemplazar el "empty-state" con tus ejercicios

Elimina el bloque `<div class="empty-state">...</div>` y agrega:

```html
<div class="exercises-grid">
    <!-- AQUÍ VAN TUS EJERCICIOS -->
</div>
```

### 3. Plantilla de Ejercicio

Copia esta plantilla para cada ejercicio:

```html
<div class="exercise-card">
    <div class="exercise-header">
        <div class="exercise-title">
            <div class="exercise-icon">01</div>
            <div class="exercise-info">
                <h4>Nombre del Ejercicio</h4>
                <div class="exercise-meta">
                    <span><i class="far fa-file-code"></i> nombre_archivo.c</span>
                    <span><i class="far fa-calendar"></i> Enero 2026</span>
                </div>
            </div>
        </div>
        <button class="toggle-btn" onclick="toggleCode(this)">Ver Código</button>
    </div>
    <div class="exercise-content">
        <div class="code-container">
            <div class="code-header">
                <div class="code-filename">
                    <span><i class="far fa-file-code"></i></span>
                    <span>nombre_archivo.c</span>
                    <span class="file-ext">.C</span>
                </div>
                <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-c">// TU CÓDIGO AQUÍ
#include &lt;stdio.h&gt;

int main() {
    // Tu código
    return 0;
}</code></pre>
        </div>
    </div>
</div>
```

### 4. Personalizar cada ejercicio

**Cambios necesarios:**

1. **Número del ejercicio:** 
   ```html
   <div class="exercise-icon">01</div>  ← Cambia el número
   ```

2. **Título y archivo:**
   ```html
   <h4>Nombre del Ejercicio</h4>
   <span><i class="far fa-file-code"></i> nombre_archivo.c</span>
   ```

3. **Extensión del archivo:**
   - Para .c: `<span class="file-ext">.C</span>` y `class="language-c"`
   - Para .cpp: `<span class="file-ext">.CPP</span>` y `class="language-cpp"`

4. **Tu código:**
   - **IMPORTANTE:** Reemplaza `<` por `&lt;` y `>` por `&gt;`
   - Ejemplo: `#include <stdio.h>` → `#include &lt;stdio.h&gt;`

## 📝 Ejemplo Completo - Ejercicio de la Semana 2

```html
<!-- Semana 2 -->
<div class="week-section" data-week="2">
    <div class="week-header-ejercicios">
        <h3>Semana 2: Estructuras de Control</h3>
        <p>If-else, switch, bucles</p>
    </div>
    
    <div class="exercises-grid">
        <!-- Ejercicio 1: Par o Impar -->
        <div class="exercise-card">
            <div class="exercise-header">
                <div class="exercise-title">
                    <div class="exercise-icon">01</div>
                    <div class="exercise-info">
                        <h4>Número Par o Impar</h4>
                        <div class="exercise-meta">
                            <span><i class="far fa-file-code"></i> par_impar.c</span>
                            <span><i class="far fa-calendar"></i> Enero 2026</span>
                        </div>
                    </div>
                </div>
                <button class="toggle-btn" onclick="toggleCode(this)">Ver Código</button>
            </div>
            <div class="exercise-content">
                <div class="code-container">
                    <div class="code-header">
                        <div class="code-filename">
                            <span><i class="far fa-file-code"></i></span>
                            <span>par_impar.c</span>
                            <span class="file-ext">.C</span>
                        </div>
                        <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
                    </div>
                    <pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    int numero;
    
    printf("Ingrese un número: ");
    scanf("%d", &numero);
    
    if (numero % 2 == 0) {
        printf("%d es PAR\n", numero);
    } else {
        printf("%d es IMPAR\n", numero);
    }
    
    return 0;
}</code></pre>
                </div>
            </div>
        </div>

        <!-- Puedes agregar más ejercicios aquí -->
    </div>
</div>
```

## 🔧 Soluciones a Problemas Comunes

### ❌ Problema: La foto no se ve
**Solución:** Asegúrate que tu foto esté en la carpeta `foto/` y no en `img/`
```html
<!-- CORRECTO -->
<img src="foto/foto.jpg" alt="...">

<!-- INCORRECTO -->
<img src="img/foto.jpg" alt="...">
```

### ❌ Problema: Los íconos no aparecen
**Solución:** Ya está solucionado con Font Awesome en el nuevo archivo. Asegúrate de tener esta línea en el `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
```

### ❌ Problema: El código se ve mal
**Solución:** Recuerda convertir los caracteres especiales:
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;` (si usas este símbolo)

## 📋 Checklist antes de subir a GitHub

- [ ] Reemplacé el archivo index.html viejo con el nuevo
- [ ] Mi foto está en la carpeta `foto/foto.jpg`
- [ ] Eliminé el archivo ejercicios.html (ya no se necesita)
- [ ] Agregué mis ejercicios en las semanas correspondientes
- [ ] Convertí `<` por `&lt;` y `>` por `&gt;` en mi código
- [ ] Probé que todos los botones funcionen
- [ ] Verifiqué que los íconos se vean correctamente

## 🚀 Pasos para Subir a GitHub

1. Reemplaza tu archivo index.html actual con el nuevo
2. Asegúrate que tu foto esté en `foto/foto.jpg`
3. Haz commit y push:
   ```bash
   git add .
   git commit -m "Actualización: página integrada y corregida"
   git push
   ```
4. Espera 2-3 minutos y visita: https://milagros1804.github.io/Firts-repository/

## 💡 Tips Finales

- **Agrega ejercicios gradualmente:** No necesitas llenar todas las semanas de una vez
- **Prueba localmente:** Abre el index.html en tu navegador antes de subirlo
- **Mantén el formato:** Usa la plantilla exacta para que todo se vea uniforme
- **Comentarios en tu código:** Ayudan a entender mejor tus ejercicios

¡Listo! Ahora tienes una página profesional completamente integrada. 🎉
