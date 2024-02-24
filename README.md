# 🦷 DH - Consultorio Odontológico 
Examen Final de Frontend III  
[Demostración](https://finalfront3mastricola.vercel.app/)

## 📋 Requisitos
La aplicación deberá contar con cuatro (4) páginas: Home, Contacto, Detalle de cada dentista, Destacados.
La correcta navegación entre las páginas por medio de Links propios de **React Router**, será obligatoria para la aprobación.
Es crucial la presencia homogénea en todas las páginas del Navbar y Footer.
Cada card renderizada debe tener la opción de poder agregarse a destacados.
Deberán guardar las cards destacadas en la sesión actual del **localStorage**.
Manejar dicho comportamiento con el hook **useReducer.**

### ✔️ Condiciones de aprobación
- Deberá ser desarrollada utilizando Javascript con React.js como libreria.
- Se espera que la página de Contacto, contenga los flujos de validación necesarios (minimo 2 validaciones), para un correcto submit del formulario.
- En los casos en que se requiera dar estilos a componentes, deberá realizarse teniendo en cuenta el theme del contexto global.

**Validaciones**
- Una validación para cada campor es suficiente, pueden ser "manuales" o con expreciones regulares. Lo importante es el correcto manejo de errores y submit.

**Funcionalidad de destacados**
- Se valorará funcionalidades extra a esta feature, como lo pueden ser el eliminar de destacadados, manejo de errores al intentar agregar repetidos y reseteo total de los destacados.

**Estilos**
- Se valorará el estilado de demas apartados de la App (por fuera del estilado obligatorio de las rutas en base al theme).

**Buenas Prácticas**
- Se prestará especial atención al uso de buenas prácticas, mejoras de performance (implementando useMemo) y la reutilizacion de codigo.

## API
La API a utilizar sera la siguiente:
`https://jsonplaceholder.typicode.com/users`

Y para cada dentista en especifico:
`https://jsonplaceholder.typicode.com/users/:id`

