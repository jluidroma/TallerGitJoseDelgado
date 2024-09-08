
// Funciones para convertir números a letras en español
function convertirUnidades(numero) {
     const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
     return unidades[numero];
}

function convertirDecenas(numero) {
     const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
     const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

     if (numero < 10) return convertirUnidades(numero);
     if (numero < 20) return especiales[numero - 10];
     if (numero % 10 === 0) return decenas[Math.floor(numero / 10)];
     return `${decenas[Math.floor(numero / 10)]} y ${convertirUnidades(numero % 10)}`;
}

function convertirCentenas(numero) {
     const centenas = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

     if (numero === 0) return 'cero';
     if (numero === 100) return 'cien';
     if (numero % 100 === 0) return centenas[Math.floor(numero / 100)];
     return `${centenas[Math.floor(numero / 100)]} ${convertirDecenas(numero % 100)}`;
}

function convertirMiles(numero) {
     if (numero < 1000) return convertirCentenas(numero);
     if (numero === 1000) return 'mil';

     const miles = Math.floor(numero / 1000);
     const resto = numero % 1000;

     const milesEnLetras = miles === 1 ? 'mil' : `${convertirCentenas(miles)} mil`;

     return resto > 0 ? `${milesEnLetras} ${convertirCentenas(resto)}` : milesEnLetras;
}

function convertirMillones(numero) {
     if (numero < 1000000) return convertirMiles(numero);

     const millones = Math.floor(numero / 1000000);
     const resto = numero % 1000000;

     return `${convertirCentenas(millones)} millones${resto > 0 ? ' ' + convertirMiles(resto) : ''}`;
}

function convertirNumeroALetras(numero) {
     if (numero < 0) return 'Número negativo no soportado';
     if (numero === 0) return convertirUnidades(0);
     if (numero < 1000) return convertirCentenas(numero);
     if (numero < 1000000) return convertirMiles(numero);
     if (numero < 1000000000) return convertirMillones(numero);
     return 'Número fuera de rango';
}

// Funciones para traducir números a letras en inglés
const unidadesEnIngles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const decenasEnIngles = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const especialesEnIngles = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convertirUnidadesEnIngles(numero) {
     return unidadesEnIngles[numero];
}

function convertirDecenasEnIngles(numero) {
     if (numero < 10) return convertirUnidadesEnIngles(numero);
     if (numero < 20) return especialesEnIngles[numero - 10];
     if (numero % 10 === 0) return decenasEnIngles[Math.floor(numero / 10)];
     return `${decenasEnIngles[Math.floor(numero / 10)]} ${convertirUnidadesEnIngles(numero % 10)}`;
}

function convertirCentenasEnIngles(numero) {
     const centenasEnIngles = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
     if (numero === 0) return 'zero';
     if (numero === 100) return 'one hundred';
     if (numero % 100 === 0) return centenasEnIngles[Math.floor(numero / 100)];
     return `${centenasEnIngles[Math.floor(numero / 100)]} ${convertirDecenasEnIngles(numero % 100)}`;
}

function convertirMilesEnIngles(numero) {
     if (numero < 1000) return convertirCentenasEnIngles(numero);
     if (numero === 1000) return 'one thousand';

     const miles = Math.floor(numero / 1000);
     const resto = numero % 1000;

     const milesEnLetras = miles === 1 ? 'one thousand' : `${convertirCentenasEnIngles(miles)} thousand`;

     return resto > 0 ? `${milesEnLetras} ${convertirCentenasEnIngles(resto)}` : milesEnLetras;
}

function convertirMillonesEnIngles(numero) {
     if (numero < 1000000) return convertirMilesEnIngles(numero);

     const millones = Math.floor(numero / 1000000);
     const resto = numero % 1000000;

     return `${convertirCentenasEnIngles(millones)} million${resto > 0 ? ' ' + convertirMilesEnIngles(resto) : ''}`;
}

function convertirNumeroALetrasEnIngles(numero) {
     if (numero < 0) return 'Negative number not supported';
     if (numero === 0) return convertirUnidadesEnIngles(0);
     if (numero < 1000) return convertirCentenasEnIngles(numero);
     if (numero < 1000000) return convertirMilesEnIngles(numero);
     if (numero < 1000000000) return convertirMillonesEnIngles(numero);
     return 'Number out of range';
}
