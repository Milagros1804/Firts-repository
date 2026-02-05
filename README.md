# 📚 Portafolio Personal - Milagros

Sitio web personal con funcionalidades avanzadas para gestionar proyectos de programación.

## 🚀 Características Principales

### 📖 Sección Libro
- **Subir PDF**: Permite subir un libro en formato PDF
- **Visualizar**: Abre el PDF en una nueva pestaña para lectura
- **Eliminar**: Opción para eliminar el libro cuando sea necesario
- **Almacenamiento local**: El PDF se guarda en el navegador (localStorage)

### 💻 Sección Actividades de Programación

#### Gestión de Códigos (CRUD Completo)
- ✅ **Agregar**: Crear nuevos ejercicios con código y salida
- 👁️ **Ver**: Visualizar el código y salida lado a lado
- ✏️ **Editar**: Modificar códigos existentes
- 🗑️ **Eliminar**: Borrar ejercicios que ya no necesites

#### Características de Códigos
- Soporte para **C** y **C++**
- Vista previa del código en tarjetas
- Vista completa con código y salida en columnas paralelas
- Copiar código al portapapeles
- Filtros por lenguaje (Todos, C, C++)
- Resaltado de sintaxis básico

#### PDF de Ejercicios
- Subir un PDF con todos los ejercicios compilados
- Visualizar el PDF completo
- Eliminar cuando sea necesario

### 🎨 Otras Secciones
- **Inicio**: Presentación atractiva con llamado a la acción
- **Sobre Mí**: Información personal
- **Habilidades**: Visualización de competencias con barras de progreso
- **Contacto**: Información de contacto y redes sociales

## 📁 Estructura de Archivos

```
Firts-repository/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🛠️ Instalación y Uso

### Opción 1: GitHub Pages (Recomendado)

1. **Sube los archivos a tu repositorio:**
   ```bash
   git add index.html styles.css script.js
   git commit -m "Actualización completa del portafolio"
   git push origin main
   ```

2. **Configura GitHub Pages:**
   - Ve a Settings → Pages
   - En "Source", selecciona "main" branch
   - Guarda los cambios
   - Tu sitio estará en: `https://milagros1804.github.io/Firts-repository/`

### Opción 2: Local

1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! La página funcionará completamente

## 📖 Guía de Uso

### Cómo Agregar un Libro

1. Haz clic en "Subir Libro" en la sección Proyectos → Libro
2. Completa el formulario:
   - Título del libro
   - Descripción (opcional)
   - Selecciona el archivo PDF
3. Haz clic en "Subir"
4. El libro aparecerá con opciones para verlo o eliminarlo

### Cómo Agregar un Código

1. Haz clic en "Agregar Código" en la sección Actividades
2. Completa el formulario:
   - **Título**: Nombre del ejercicio (ej: "Suma de dos números")
   - **Descripción**: Breve explicación (opcional)
   - **Lenguaje**: Selecciona C o C++
   - **Código Fuente**: Pega tu código completo
   - **Salida del Programa**: Pega la salida/resultado
3. Haz clic en "Agregar"
4. El código aparecerá como una tarjeta con opciones

### Cómo Editar un Código

1. Localiza el código que deseas editar
2. Haz clic en el botón "Editar" (ícono de lápiz)
3. Modifica los campos necesarios
4. Haz clic en "Agregar" para guardar los cambios

### Cómo Ver un Código Completo

1. Haz clic en "Ver Completo" en cualquier tarjeta de código
2. Se abrirá un modal mostrando:
   - Código fuente completo (columna izquierda)
   - Salida del programa (columna derecha)
3. Puedes copiar el código al portapapeles
4. Cierra el modal cuando termines

### Cómo Subir el PDF de Ejercicios

1. Haz clic en "Subir PDF de Ejercicios"
2. Asigna un título (ej: "Todos los Ejercicios")
3. Selecciona el archivo PDF
4. Haz clic en "Subir"
5. El PDF aparecerá con opciones para verlo o eliminarlo

### Filtrar por Lenguaje

- Haz clic en los botones: **Todos**, **C**, o **C++**
- Los códigos se filtrarán automáticamente

## 💾 Almacenamiento de Datos

Todos los datos se guardan en **localStorage** del navegador:
- No necesitas base de datos
- Los datos persisten entre sesiones
- Los PDFs se guardan en formato base64

⚠️ **Nota importante**: 
- Los datos solo están disponibles en el navegador donde los guardaste
- Si borras los datos del navegador, perderás la información
- Para datos importantes, considera exportarlos regularmente

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css` (líneas 8-18):

```css
:root {
    --primary-color: #6366f1;      /* Color principal */
    --secondary-color: #8b5cf6;    /* Color secundario */
    --accent-color: #ec4899;       /* Color de acento */
    /* ... más colores ... */
}
```

### Modificar Información Personal

En `index.html`, busca y modifica:
- Sección "Sobre Mí" (línea ~57)
- Sección "Contacto" (línea ~170)
- Habilidades y porcentajes (línea ~150)

## 📱 Responsive Design

El sitio es completamente responsive y se adapta a:
- 💻 Escritorio
- 📱 Tablets
- 📱 Móviles

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript**: Funcionalidad interactiva
- **localStorage**: Persistencia de datos
- **Font Awesome**: Iconos

## 🚀 Funcionalidades Avanzadas

1. **CRUD Completo**: Create, Read, Update, Delete
2. **Almacenamiento Local**: Sin necesidad de backend
3. **Visualización de PDFs**: Directamente en el navegador
4. **Resaltado de Código**: Mejor legibilidad
5. **Notificaciones**: Feedback visual de acciones
6. **Modales**: Interfaz limpia y moderna
7. **Filtros Dinámicos**: Organización por lenguaje
8. **Animaciones**: Experiencia de usuario mejorada

## 📝 Ejemplo de Código a Agregar

```c
#include <stdio.h>

int main() {
    int num1 = 5, num2 = 3;
    int suma = num1 + num2;
    
    printf("La suma de %d y %d es: %d\n", num1, num2, suma);
    
    return 0;
}
```

**Salida esperada:**
```
La suma de 5 y 3 es: 8
```

## 🐛 Solución de Problemas

### El PDF no se visualiza
- Asegúrate de que el archivo sea un PDF válido
- Verifica que el tamaño no sea excesivo (< 10MB recomendado)
- Intenta con otro navegador

### Los datos desaparecen
- Revisa que no estés en modo incógnito
- No borres los datos del navegador
- Considera exportar tus datos importantes

### Los estilos no se cargan
- Verifica que `styles.css` esté en la misma carpeta
- Revisa la consola del navegador (F12) por errores
- Asegúrate de que el archivo esté correctamente vinculado

## 📞 Contacto

- **GitHub**: [Milagros1804](https://github.com/Milagros1804)
- **Email**: milagros@ejemplo.com

## 📄 Licencia

Este proyecto es de código abierto. Puedes usarlo, modificarlo y compartirlo libremente.

---

**Desarrollado con ❤️ por Milagros**

*Última actualización: Febrero 2026*
