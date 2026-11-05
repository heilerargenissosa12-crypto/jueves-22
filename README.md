# 📘 Aprende React en 15 Minutos - Víctor Robles WEB

Proyecto práctico desarrollado en **JavaScript puro (.js) y React**, con todo el código, componentes y conceptos explicados en el video tutorial:
👉 **[Ver Video en YouTube](https://youtu.be/wGxDfSWC4Ww?si=TjG87ZWzVLH_wRFR)**

---

## 🚀 Cómo abrir y ejecutar este proyecto en Visual Studio Code

### Paso 1: Abrir la carpeta en VS Code
1. Abre **Visual Studio Code**.
2. Ve al menú superior: `Archivo` -> `Abrir carpeta...` (o `File` -> `Open Folder...`).
3. Selecciona la carpeta **`read`**:
   ```
   C:\Users\heile\.gemini\antigravity\scratch\read
   ```
*(O simplemente desde la terminal ejecuta: `code C:\Users\heile\.gemini\antigravity\scratch\read`)*

---

### Paso 2: Ejecutar el servidor de desarrollo

Tienes varias opciones para iniciarlo:

#### Opción A: Desde la Terminal integrada de VS Code
1. Abre la terminal en VS Code con `Ctrl + ñ` (o `Terminal` -> `New Terminal`).
2. Escribe y ejecuta:
   ```bash
   npm.cmd start
   ```
   *(o `npm start`)*

#### Opción B: Doble clic en Windows
Haz doble clic sobre el archivo **`iniciar.bat`** dentro de la carpeta `read`.

#### Opción C: Tarea automática de VS Code
Presiona `Ctrl + Shift + B` en VS Code o ve a `Terminal` -> `Run Task...` -> `Iniciar Servidor React (npm start)`.

---

### Paso 3: Verlo en el navegador
El proyecto se abrirá automáticamente en:
🌐 **`http://localhost:3000`**

---

## 🧩 Extensiones recomendadas en VS Code (mencionadas en el video)
* **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`):  
  Permite escribir atajos como `raf` o `rafce` para generar la estructura de un componente en segundos. Ya viene configurada en `.vscode/extensions.json` para que VS Code te sugiera instalarla.

---

## 📂 Estructura de archivos en JavaScript (.js)

* **`src/index.js`**: Punto de entrada en JavaScript donde se renderiza el componente principal `<App />` en el `<div id="root"></div>` del `index.html`.
* **`src/App.js`**: Componente principal en JavaScript que agrupa y reutiliza los subcomponentes.
* **`src/App.css`**: Hoja de estilos que incluye las clases dinámicas `.verde` y `.rojo`.
* **`src/components/PrimerComponente.js`**: Contiene todos los ejercicios clave de React en JavaScript:
  1. **Variables e Interpolación**: Mostrar variables `{nombre}` y `{web}` dentro del HTML con llaves.
  2. **Recorrer Arrays con `.map()`**: Iterar la lista de `cursos` y agregar la propiedad `key={indice}` para evitar errores de consola en React.
  3. **Estados Reactivos con `useState`**: El hook `const [nombre, setNombre] = useState("Víctor")` para interactividad inmediata.
  4. **Eventos `onClick`**: Botones para cambiar el estado y mostrar su valor por consola.
  5. **Eventos `onChange`**: Input en tiempo real que actualiza el estado a medida que el usuario escribe (`e.target.value`).
  6. **Clases Condicionales**: Operador ternario `{nombre.length >= 4 ? 'verde' : 'rojo'}` para alternar el fondo según la longitud del texto.
* **`src/components/SegundoComponente.js`**: Demuestra la independencia, modularidad y reutilización de componentes funcionales en JavaScript y React.
