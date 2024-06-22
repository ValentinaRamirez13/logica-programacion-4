// Función para verificar si el valor introducido es un número entero positivo
function esNumero(valor) {
    return !isNaN(valor) && Number.isInteger(Number(valor)) && Number(valor) > 0;
}

// Función para obtener el valor del input del usuario
function obtenerInput() {
    const input = document.getElementById('input').value;
    return input;
}

// Función para generar la serie de Fibonacci
function mostrarFibonacci() {
    let input = obtenerInput();
    let number = Number(input);
    const calcularF = document.getElementById('calcular');

    // Verificar si el valor es un número válido
    if (!esNumero(input)) {
        Swal.fire({
            title: "Por favor, introduce un número entero positivo.",
            icon: 'error',
            background: '#7aaee6',
            timer: 4000,
            position: 'center',
            backdrop: true,
            color: 'navy',
            showConfirmButton: false,
            customClass: {
            title: 'alerta'
            }
        });
        return;
    }

    // Generar la serie de Fibonacci
    let fibSeries = [];
    for (let i = 0; i < number; i++) {
        if (i === 0 || i === 1) {
            fibSeries.push(i);
        } else {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
    }

    // Mostrar la serie de Fibonacci en el DOM
    calcularF.innerHTML = `Serie de Fibonacci:<br>${fibSeries.join('')}`;
    // Imprimir la serie de Fibonacci en la consola
    console.log(`Serie de Fibonacci:\n${fibSeries.join('\n')}`);
    
}