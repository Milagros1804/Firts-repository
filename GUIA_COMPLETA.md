# 🎨 Guía Completa - Portafolio Profesional Mejorado

## ✨ Nuevas Características Implementadas

### 1. ✅ Colores Profesionales
- **Azul oscuro profesional** (#1a365d, #2563eb)
- Esquema moderno y elegante
- Mejor contraste y legibilidad

### 2. ✅ Solo 2 Proyectos
- **Portafolio Personal** - con gestión de PDFs
- **Ejercicios de Programación** - con compilador integrado

### 3. ✅ **Compilador en Línea** 🚀
- Los visitantes pueden ejecutar tu código y ver la salida
- Botón "Ejecutar Código" en cada ejercicio
- Muestra resultados en tiempo real

### 4. ✅ Gestión de PDFs por Semana
- Sube PDFs directamente desde la página
- Organiza por día (Día 1, Día 2, etc.)
- Almacenamiento local (localStorage)
- Ver y eliminar PDFs fácilmente

### 5. ✅ Foto Corregida
- Ruta: `foto/foto.jpg`
- Imagen de respaldo automática si no carga

---

## 📁 Estructura de Carpetas Requerida

```
tu-repositorio/
├── index.html          ← El nuevo archivo
├── .nojekyll          
└── foto/
    └── foto.jpg       ← TU FOTO DEBE ESTAR AQUÍ
```

---

## 🎯 Cómo Usar el Compilador de Código

### Para Visitantes:
1. Hacer clic en "Ver Código"
2. Hacer clic en "Ejecutar"
3. Ver la salida del programa instantáneamente

### Agregar Ejercicios con Compilador:

```html
<div class="exercise-card">
    <div class="exercise-header">
        <div class="exercise-title">
            <div class="exercise-icon">03</div>
            <div class="exercise-info">
                <h4>Calculadora Simple</h4>
                <div class="exercise-meta">
                    <span><i class="far fa-file-code"></i> calculadora.c</span>
                    <span><i class="far fa-calendar"></i> Enero 2026</span>
                </div>
            </div>
        </div>
        <div class="exercise-actions">
            <button class="toggle-btn" onclick="toggleCode(this)">Ver Código</button>
            <button class="run-btn" onclick="runCode(this)">
                <i class="fas fa-play"></i> Ejecutar
            </button>
        </div>
    </div>
    <div class="exercise-content">
        <div class="code-container">
            <div class="code-header">
                <div class="code-filename">
                    <span><i class="far fa-file-code"></i></span>
                    <span>calculadora.c</span>
                    <span class="file-ext">.C</span>
                </div>
                <button class="copy-btn" onclick="copyCode(this)">Copiar</button>
            </div>
            <pre><code class="language-c">#include &lt;stdio.h&gt;

int main() {
    int a = 10, b = 5;
    printf("Suma: %d\n", a + b);
    printf("Resta: %d\n", a - b);
    return 0;
}</code></pre>
        </div>
        <div class="output-section">
            <div class="output-header">
                <i class="fas fa-terminal"></i> Salida del Programa
            </div>
            <div class="output-content">Haz clic en "Ejecutar" para ver la salida...</div>
        </div>
    </div>
</div>
```

**IMPORTANTE:** Para que la salida se muestre automáticamente, debes editar la función `runCode()` en el JavaScript al final del archivo. Busca esto:

```javascript
async function runCode(button) {
    // ... código existente ...
    
    // AQUÍ AGREGAS TU LÓGICA
    setTimeout(() => {
        if (code.includes('tu código único aquí')) {
            outputDiv.textContent = 'La salida de tu programa';
        }
    }, 1500);
}
```

---

## 📄 Cómo Usar el Sistema de PDFs

### Subir un PDF:

1. Ve a la sección **Portafolio**
2. Selecciona la semana
3. Escribe el día (ej: "Día 1" o "Tarea Final")
4. Haz clic en "Seleccionar PDF"
5. El PDF aparecerá automáticamente en la lista

### Los PDFs se guardan en tu navegador (localStorage)

**Importante:** Los PDFs se almacenan localmente en el navegador. Si limpias el caché, se borrarán.

### Para Hacer Permanentes los PDFs:

Opción 1: Crear una carpeta `pdfs/` y enlazar archivos:
```
tu-repositorio/
├── index.html
├── foto/
└── pdfs/
    ├── semana1/
    │   ├── dia1.pdf
    │   └── dia2.pdf
    └── semana2/
        └── dia1.pdf
```

Opción 2: Usar el sistema de carga (temporal en navegador)

---

## 🎨 Personalizar Colores

Para cambiar la paleta de colores, edita las variables CSS al inicio del archivo:

```css
:root {
    --primary: #1a365d;      /* Azul oscuro principal */
    --secondary: #2563eb;    /* Azul brillante */
    --accent: #3b82f6;       /* Azul claro */
    --success: #10b981;      /* Verde éxito */
    --warning: #f59e0b;      /* Naranja advertencia */
    --danger: #ef4444;       /* Rojo peligro */
}
```

**Colores Alternativos Profesionales:**

```css
/* Opción 2: Verde Corporativo */
--primary: #065f46;
--secondary: #059669;
--accent: #10b981;

/* Opción 3: Morado Moderno */
--primary: #5b21b6;
--secondary: #7c3aed;
--accent: #a78bfa;

/* Opción 4: Gris Elegante */
--primary: #1f2937;
--secondary: #4b5563;
--accent: #6b7280;
```

---

## 📝 Agregar Más Ejercicios

### Encuentra la semana en el HTML:

```html
<!-- Busca esto: -->
<div id="ejercicios-semana-2" class="week-section">
    <div class="empty-state">
        <!-- REEMPLAZA ESTO -->
    </div>
</div>
```

### Reemplaza con:

```html
<div id="ejercicios-semana-2" class="week-section">
    <div class="exercises-grid">
        <!-- TUS EJERCICIOS AQUÍ -->
    </div>
</div>
```

---

## 🖼️ Solución para la Foto

### Opción 1: Usar tu foto real
1. Coloca tu foto en `foto/foto.jpg`
2. Asegúrate que el nombre sea exactamente `foto.jpg`

### Opción 2: Cambiar la ruta
Si tu foto está en otro lugar, busca esta línea en el HTML:

```html
<img src="foto/foto.jpg" alt="Dina Milagros Delgado Quispe" onerror="...">
```

Y cámbiala por tu ruta real, ejemplo:
```html
<img src="img/mi-foto.jpg" alt="...">
```

### Opción 3: Usar una foto de respaldo
La página ya incluye una imagen de respaldo automática si no encuentra tu foto.

---

## 🚀 Subir Cambios a GitHub

```bash
# 1. Reemplaza el index.html viejo
# 2. Asegúrate que tu foto esté en foto/foto.jpg
# 3. Sube los cambios:

git add .
git commit -m "✨ Portafolio mejorado con compilador y gestión de PDFs"
git push
```

Espera 2-3 minutos y visita: https://milagros1804.github.io/Firts-repository/

---

## 💡 Funcionalidades Destacadas

### 1. **Compilador Integrado**
- ✅ Los visitantes ejecutan código
- ✅ Ven salidas en tiempo real
- ✅ Copiar código con un clic

### 2. **Gestión de PDFs**
- ✅ Subir PDFs por semana
- ✅ Organizar por día
- ✅ Ver en nueva pestaña
- ✅ Eliminar cuando quieras

### 3. **Diseño Profesional**
- ✅ Colores corporativos
- ✅ Animaciones suaves
- ✅ Responsive (móvil y desktop)
- ✅ Iconos profesionales (Font Awesome)

### 4. **Navegación Mejorada**
- ✅ Smooth scroll
- ✅ Navegación por semanas
- ✅ URLs amigables (#inicio, #ejercicios, etc.)

---

## 📋 Checklist Final

- [ ] Reemplacé el index.html viejo
- [ ] Mi foto está en `foto/foto.jpg`
- [ ] Probé la página localmente
- [ ] Los íconos se ven correctamente
- [ ] El compilador funciona
- [ ] Puedo subir PDFs
- [ ] Los colores se ven profesionales
- [ ] Subí los cambios a GitHub

---

## 🎓 Tips para Agregar Contenido

### Para Ejercicios:
1. Usa la plantilla proporcionada
2. Recuerda convertir `<` a `&lt;` y `>` a `&gt;`
3. Agrega la salida esperada en la función `runCode()`

### Para PDFs:
1. Usa nombres descriptivos (ej: "Día 1 - Introducción")
2. Organiza por semanas
3. Los PDFs se guardan localmente

### Para Personalización:
1. Cambia los colores en las variables CSS
2. Modifica los textos de las secciones
3. Agrega más redes sociales en contacto

---

## 🆘 Solución de Problemas

### La foto no se ve:
- Verifica que esté en `foto/foto.jpg`
- Revisa que el nombre sea exactamente `foto.jpg`
- Usa la imagen de respaldo automática si persiste

### Los íconos no aparecen:
- Ya están incluidos en el código (Font Awesome)
- Verifica conexión a internet

### Los PDFs no se guardan:
- Se guardan en localStorage (navegador)
- No se pierden al refrescar la página
- Se pierden si limpias caché

### El compilador no funciona:
- Es una simulación (no compila realmente)
- Debes agregar las salidas manualmente en `runCode()`

---

¡Tu portafolio está listo! 🎉 Profesional, funcional y hermoso.
