# 📋 INSTRUCCIONES PARA SUBIR A GITHUB

## 🔄 Pasos para Actualizar tu Repositorio

### 1️⃣ Descargar los Archivos
Descarga los siguientes archivos que te proporciono:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

### 2️⃣ Reemplazar Archivos en tu Repositorio

#### Opción A: Usando GitHub Web (Más Fácil)

1. Ve a tu repositorio: https://github.com/Milagros1804/Firts-repository

2. **Para cada archivo** (index.html, styles.css, script.js):
   - Haz clic en el archivo existente
   - Haz clic en el ícono del lápiz (Edit)
   - Borra todo el contenido actual
   - Copia y pega el nuevo contenido
   - Haz scroll hasta abajo
   - Escribe un mensaje de commit: "Actualización del portafolio"
   - Haz clic en "Commit changes"

3. **Para README.md**:
   - Si no existe, haz clic en "Add file" → "Create new file"
   - Nombra el archivo: `README.md`
   - Pega el contenido
   - Haz commit

#### Opción B: Usando Git (Línea de Comandos)

```bash
# 1. Navega a tu repositorio local
cd ruta/a/Firts-repository

# 2. Copia los nuevos archivos a esta carpeta
# (reemplaza los existentes)

# 3. Agrega los cambios
git add index.html styles.css script.js README.md

# 4. Haz commit
git commit -m "Actualización completa del portafolio con nuevas funcionalidades"

# 5. Sube los cambios
git push origin main
```

### 3️⃣ Verificar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. En el menú lateral, haz clic en "Pages"
4. Asegúrate de que:
   - Source: Deploy from a branch
   - Branch: main (o master)
   - Folder: / (root)
5. Haz clic en "Save" si hiciste cambios

### 4️⃣ Esperar la Publicación

- GitHub Pages puede tardar 1-5 minutos en actualizar
- Verás un mensaje verde cuando esté listo: "Your site is published at https://milagros1804.github.io/Firts-repository/"

### 5️⃣ Verificar tu Sitio

1. Abre: https://milagros1804.github.io/Firts-repository/
2. Si ves la página antigua, presiona `Ctrl + Shift + R` (Windows/Linux) o `Cmd + Shift + R` (Mac) para forzar la recarga
3. Si aún no se actualiza, espera unos minutos más

## ⚠️ Problemas Comunes

### La página no se actualiza
**Solución**: 
- Espera 5 minutos
- Borra la caché del navegador: `Ctrl + Shift + Delete`
- Prueba en modo incógnito: `Ctrl + Shift + N`

### Error 404
**Solución**:
- Verifica que GitHub Pages esté activado
- Asegúrate de que el archivo se llame exactamente `index.html` (minúsculas)
- Verifica que esté en la carpeta raíz (no en una subcarpeta)

### Los estilos no se cargan
**Solución**:
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Revisa que el nombre del archivo sea exacto (minúsculas)
- Abre la consola del navegador (F12) para ver errores

### JavaScript no funciona
**Solución**:
- Verifica que `script.js` esté en la misma carpeta
- Abre la consola (F12) para ver errores
- Asegúrate de que el archivo se subió correctamente

## 📂 Estructura Final del Repositorio

```
Firts-repository/
│
├── index.html          ← Página principal
├── styles.css          ← Estilos
├── script.js           ← Funcionalidad
├── README.md           ← Documentación
├── .nojekyll           ← (Opcional) Para evitar Jekyll
└── img/                ← (Tu carpeta actual, no borrar)
    └── (tus imágenes)
```

## 🎯 Verificación Rápida

Después de subir los archivos, verifica que tu repositorio tenga:

- ✅ `index.html` en la raíz
- ✅ `styles.css` en la raíz
- ✅ `script.js` en la raíz
- ✅ `README.md` en la raíz
- ✅ GitHub Pages activado
- ✅ Branch: main (o master)

## 🔗 URLs Importantes

- **Tu repositorio**: https://github.com/Milagros1804/Firts-repository
- **Tu sitio web**: https://milagros1804.github.io/Firts-repository/
- **Configuración Pages**: https://github.com/Milagros1804/Firts-repository/settings/pages

## 💡 Consejos

1. **Guarda copias locales**: Siempre ten una copia de los archivos en tu computadora
2. **Commits frecuentes**: Haz commits cada vez que hagas cambios importantes
3. **Mensajes descriptivos**: Usa mensajes de commit claros como "Agregué sección de contacto"
4. **Prueba local primero**: Abre `index.html` localmente antes de subir a GitHub
5. **Revisa la consola**: Usa F12 para ver errores en el navegador

## 🎨 Próximos Pasos

Una vez que tu sitio esté funcionando:

1. ✅ Personaliza la información en "Sobre Mí"
2. ✅ Actualiza la información de contacto
3. ✅ Agrega tus primeros códigos
4. ✅ Sube tu libro en PDF
5. ✅ Ajusta los colores a tu gusto
6. ✅ Agrega tus habilidades reales

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa esta guía nuevamente
2. Verifica la consola del navegador (F12)
3. Comprueba que todos los archivos estén en la carpeta correcta
4. Intenta en otro navegador

---

**¡Éxito con tu portafolio! 🚀**
