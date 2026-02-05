// Base de datos local (localStorage)
let activities = JSON.parse(localStorage.getItem('activities')) || [];
let bookData = JSON.parse(localStorage.getItem('bookData')) || null;
let exercisesPDF = JSON.parse(localStorage.getItem('exercisesPDF')) || null;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadActivities();
    loadBook();
    loadExercisesPDF();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navMenu.classList.remove('active');
            }
        });
    });

    // Formulario de libro
    const uploadBookForm = document.getElementById('uploadBookForm');
    if (uploadBookForm) {
        uploadBookForm.addEventListener('submit', handleUploadBook);
    }

    // Formulario de código
    const addCodeForm = document.getElementById('addCodeForm');
    if (addCodeForm) {
        addCodeForm.addEventListener('submit', handleAddCode);
    }

    // Formulario de PDF de ejercicios
    const uploadExercisesForm = document.getElementById('uploadExercisesForm');
    if (uploadExercisesForm) {
        uploadExercisesForm.addEventListener('submit', handleUploadExercises);
    }
}

// ===============================
// FUNCIONES PARA LIBRO
// ===============================

function showUploadBookModal() {
    document.getElementById('uploadBookModal').style.display = 'block';
}

function closeUploadBookModal() {
    document.getElementById('uploadBookModal').style.display = 'none';
    document.getElementById('uploadBookForm').reset();
}

function handleUploadBook(e) {
    e.preventDefault();
    
    const title = document.getElementById('bookTitle').value;
    const description = document.getElementById('bookDescription').value;
    const fileInput = document.getElementById('bookFile');
    const file = fileInput.files[0];
    
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function(event) {
            bookData = {
                title: title,
                description: description,
                fileName: file.name,
                fileData: event.target.result,
                uploadDate: new Date().toISOString()
            };
            
            localStorage.setItem('bookData', JSON.stringify(bookData));
            loadBook();
            closeUploadBookModal();
            showNotification('Libro subido exitosamente', 'success');
        };
        reader.readAsDataURL(file);
    } else {
        showNotification('Por favor selecciona un archivo PDF válido', 'error');
    }
}

function loadBook() {
    const container = document.getElementById('book-container');
    
    if (bookData) {
        container.innerHTML = `
            <div class="book-card">
                <div class="book-info">
                    <h4><i class="fas fa-book-open"></i> ${bookData.title}</h4>
                    <p>${bookData.description || 'Sin descripción'}</p>
                    <small><i class="fas fa-calendar"></i> Subido el ${new Date(bookData.uploadDate).toLocaleDateString()}</small>
                </div>
                <div class="book-actions">
                    <button class="btn-view" onclick="viewBook()">
                        <i class="fas fa-eye"></i> Ver Libro
                    </button>
                    <button class="btn-delete" onclick="deleteBook()">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book"></i>
                <p>No has subido ningún libro todavía</p>
                <button class="btn btn-add" onclick="showUploadBookModal()">
                    <i class="fas fa-plus"></i> Subir Libro
                </button>
            </div>
        `;
    }
}

function viewBook() {
    if (bookData && bookData.fileData) {
        // Abrir el PDF en una nueva pestaña
        const win = window.open();
        win.document.write(`
            <html>
            <head>
                <title>${bookData.title}</title>
                <style>
                    body { margin: 0; padding: 0; }
                    iframe { width: 100%; height: 100vh; border: none; }
                </style>
            </head>
            <body>
                <iframe src="${bookData.fileData}"></iframe>
            </body>
            </html>
        `);
    }
}

function deleteBook() {
    if (confirm('¿Estás segura de que quieres eliminar este libro?')) {
        bookData = null;
        localStorage.removeItem('bookData');
        loadBook();
        showNotification('Libro eliminado exitosamente', 'success');
    }
}

// ===============================
// FUNCIONES PARA PDF DE EJERCICIOS
// ===============================

function showUploadExercisesModal() {
    document.getElementById('uploadExercisesModal').style.display = 'block';
}

function closeUploadExercisesModal() {
    document.getElementById('uploadExercisesModal').style.display = 'none';
    document.getElementById('uploadExercisesForm').reset();
}

function handleUploadExercises(e) {
    e.preventDefault();
    
    const title = document.getElementById('exercisesTitle').value;
    const fileInput = document.getElementById('exercisesFile');
    const file = fileInput.files[0];
    
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function(event) {
            exercisesPDF = {
                title: title,
                fileName: file.name,
                fileData: event.target.result,
                uploadDate: new Date().toISOString()
            };
            
            localStorage.setItem('exercisesPDF', JSON.stringify(exercisesPDF));
            loadExercisesPDF();
            closeUploadExercisesModal();
            showNotification('PDF de ejercicios subido exitosamente', 'success');
        };
        reader.readAsDataURL(file);
    } else {
        showNotification('Por favor selecciona un archivo PDF válido', 'error');
    }
}

function loadExercisesPDF() {
    const container = document.getElementById('exercises-pdf-container');
    
    if (exercisesPDF) {
        container.innerHTML = `
            <div class="exercises-pdf-card">
                <div class="book-info">
                    <h4><i class="fas fa-file-pdf"></i> ${exercisesPDF.title}</h4>
                    <small><i class="fas fa-calendar"></i> Subido el ${new Date(exercisesPDF.uploadDate).toLocaleDateString()}</small>
                </div>
                <div class="book-actions">
                    <button class="btn-view" onclick="viewExercisesPDF()">
                        <i class="fas fa-eye"></i> Ver PDF
                    </button>
                    <button class="btn-delete" onclick="deleteExercisesPDF()">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = '';
    }
}

function viewExercisesPDF() {
    if (exercisesPDF && exercisesPDF.fileData) {
        const win = window.open();
        win.document.write(`
            <html>
            <head>
                <title>${exercisesPDF.title}</title>
                <style>
                    body { margin: 0; padding: 0; }
                    iframe { width: 100%; height: 100vh; border: none; }
                </style>
            </head>
            <body>
                <iframe src="${exercisesPDF.fileData}"></iframe>
            </body>
            </html>
        `);
    }
}

function deleteExercisesPDF() {
    if (confirm('¿Estás segura de que quieres eliminar el PDF de ejercicios?')) {
        exercisesPDF = null;
        localStorage.removeItem('exercisesPDF');
        loadExercisesPDF();
        showNotification('PDF de ejercicios eliminado exitosamente', 'success');
    }
}

// ===============================
// FUNCIONES PARA CÓDIGOS
// ===============================

function showAddCodeModal() {
    document.getElementById('addCodeModal').style.display = 'block';
    // Limpiar el formulario y prepararlo para agregar nuevo código
    document.getElementById('addCodeForm').reset();
    delete document.getElementById('addCodeForm').dataset.editId;
}

function closeAddCodeModal() {
    document.getElementById('addCodeModal').style.display = 'none';
    document.getElementById('addCodeForm').reset();
    delete document.getElementById('addCodeForm').dataset.editId;
}

function handleAddCode(e) {
    e.preventDefault();
    
    const form = e.target;
    const editId = form.dataset.editId;
    
    const newActivity = {
        id: editId || Date.now().toString(),
        title: document.getElementById('codeTitle').value,
        description: document.getElementById('codeDescription').value,
        language: document.getElementById('codeLanguage').value,
        code: document.getElementById('codeSource').value,
        output: document.getElementById('codeOutput').value,
        createdDate: editId ? activities.find(a => a.id === editId).createdDate : new Date().toISOString()
    };
    
    if (editId) {
        // Editar código existente
        const index = activities.findIndex(a => a.id === editId);
        activities[index] = newActivity;
        showNotification('Código actualizado exitosamente', 'success');
    } else {
        // Agregar nuevo código
        activities.push(newActivity);
        showNotification('Código agregado exitosamente', 'success');
    }
    
    localStorage.setItem('activities', JSON.stringify(activities));
    loadActivities();
    closeAddCodeModal();
}

function loadActivities(filter = 'all') {
    const container = document.getElementById('activities-container');
    
    let filteredActivities = activities;
    if (filter !== 'all') {
        filteredActivities = activities.filter(a => a.language === filter);
    }
    
    if (filteredActivities.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i class="fas fa-code"></i>
                <p>No hay actividades ${filter !== 'all' ? 'de ' + filter.toUpperCase() : ''} todavía</p>
                <button class="btn btn-add" onclick="showAddCodeModal()">
                    <i class="fas fa-plus"></i> Agregar Código
                </button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredActivities.map(activity => `
        <div class="activity-card" data-language="${activity.language}">
            <div class="activity-header">
                <h4 class="activity-title">${activity.title}</h4>
                <span class="language-badge ${activity.language}">${activity.language.toUpperCase()}</span>
            </div>
            ${activity.description ? `<p class="activity-description">${activity.description}</p>` : ''}
            <div class="code-preview">${escapeHtml(activity.code.substring(0, 200))}${activity.code.length > 200 ? '...' : ''}</div>
            <div class="activity-actions">
                <button class="btn-small btn-view-small" onclick="viewCode('${activity.id}')">
                    <i class="fas fa-eye"></i> Ver Completo
                </button>
                <button class="btn-small btn-edit" onclick="editCode('${activity.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-small btn-delete-small" onclick="deleteCode('${activity.id}')">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `).join('');
}

function viewCode(id) {
    const activity = activities.find(a => a.id === id);
    if (!activity) return;
    
    const modal = document.getElementById('viewCodeModal');
    const content = document.getElementById('viewCodeContent');
    
    content.innerHTML = `
        <h3><i class="fas fa-code"></i> ${activity.title}</h3>
        <p style="color: var(--text-light); margin-bottom: 1.5rem;">${activity.description || ''}</p>
        <span class="language-badge ${activity.language}" style="margin-bottom: 1rem; display: inline-block;">${activity.language.toUpperCase()}</span>
        
        <div class="code-full-view">
            <div class="code-section">
                <h4><i class="fas fa-file-code"></i> Código Fuente</h4>
                <div class="code-content">${escapeHtml(activity.code)}</div>
            </div>
            <div class="code-section">
                <h4><i class="fas fa-terminal"></i> Salida del Programa</h4>
                <div class="code-content">${escapeHtml(activity.output)}</div>
            </div>
        </div>
        
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: flex-end;">
            <button class="btn btn-primary" onclick="copyCode('${activity.id}')">
                <i class="fas fa-copy"></i> Copiar Código
            </button>
            <button class="btn btn-secondary" onclick="closeViewCodeModal()">
                Cerrar
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeViewCodeModal() {
    document.getElementById('viewCodeModal').style.display = 'none';
}

function editCode(id) {
    const activity = activities.find(a => a.id === id);
    if (!activity) return;
    
    // Rellenar el formulario con los datos existentes
    document.getElementById('codeTitle').value = activity.title;
    document.getElementById('codeDescription').value = activity.description;
    document.getElementById('codeLanguage').value = activity.language;
    document.getElementById('codeSource').value = activity.code;
    document.getElementById('codeOutput').value = activity.output;
    
    // Marcar el formulario como edición
    const form = document.getElementById('addCodeForm');
    form.dataset.editId = id;
    
    // Mostrar el modal
    document.getElementById('addCodeModal').style.display = 'block';
}

function deleteCode(id) {
    if (confirm('¿Estás segura de que quieres eliminar este código?')) {
        activities = activities.filter(a => a.id !== id);
        localStorage.setItem('activities', JSON.stringify(activities));
        loadActivities();
        showNotification('Código eliminado exitosamente', 'success');
    }
}

function copyCode(id) {
    const activity = activities.find(a => a.id === id);
    if (!activity) return;
    
    navigator.clipboard.writeText(activity.code).then(() => {
        showNotification('Código copiado al portapapeles', 'success');
    }).catch(() => {
        showNotification('Error al copiar el código', 'error');
    });
}

function filterActivities(filter) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Cargar actividades filtradas
    loadActivities(filter);
}

// ===============================
// FUNCIONES AUXILIARES
// ===============================

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Datos de ejemplo (puedes eliminar esto después de probar)
function loadSampleData() {
    if (activities.length === 0) {
        activities = [
            {
                id: '1',
                title: 'Hola Mundo en C',
                description: 'Programa básico que imprime "Hola Mundo"',
                language: 'c',
                code: `#include <stdio.h>

int main() {
    printf("Hola Mundo\\n");
    return 0;
}`,
                output: `Hola Mundo`,
                createdDate: new Date().toISOString()
            },
            {
                id: '2',
                title: 'Suma de dos números',
                description: 'Programa que suma dos números ingresados por el usuario',
                language: 'c',
                code: `#include <stdio.h>

int main() {
    int num1, num2, suma;
    
    printf("Ingrese el primer número: ");
    scanf("%d", &num1);
    
    printf("Ingrese el segundo número: ");
    scanf("%d", &num2);
    
    suma = num1 + num2;
    
    printf("La suma es: %d\\n", suma);
    
    return 0;
}`,
                output: `Ingrese el primer número: 5
Ingrese el segundo número: 3
La suma es: 8`,
                createdDate: new Date().toISOString()
            }
        ];
        localStorage.setItem('activities', JSON.stringify(activities));
        loadActivities();
    }
}

// Descomentar para cargar datos de ejemplo
// loadSampleData();
