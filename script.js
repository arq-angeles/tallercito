




        // Generar un color aleatorio en formato RGB
        function randomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        // Función para crear el fractal con escalas variables
        function createFractal(container, x, y, size, depth) {
            if (depth === 0) return;

            // Crear el div para el nivel actual del fractal
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundColor = randomColor();
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.left = `${x}px`;
            box.style.top = `${y}px`;
            container.appendChild(box);

            // Generar una escala aleatoria entre 0.4 y 0.8 para variar los tamaños
            const scaleFactor = Math.random() * 0.8 + 0.4;

            // Calcular el nuevo tamaño para los subelementos
            const newSize = size * scaleFactor;

            // Llamada recursiva para subdividir el espacio en cuatro
            createFractal(container, x, y, newSize, depth - 1);                  // Esquina superior izquierda
            createFractal(container, x + size - newSize, y, newSize, depth - 1); // Esquina superior derecha
            createFractal(container, x, y + size - newSize, newSize, depth - 1); // Esquina inferior izquierda
            createFractal(container, x + size - newSize, y + size - newSize, newSize, depth - 1); // Esquina inferior derecha
        }

        // Iniciar el fractal
        document.addEventListener("DOMContentLoaded", function() {
            const container = document.getElementById('fractal-container');
            const initialSize = 600; // Tamaño inicial del fractal
            const depth = 6; // Profundidad del fractal (número de iteraciones)
            createFractal(container, 0, 0, initialSize, depth);
        });
    