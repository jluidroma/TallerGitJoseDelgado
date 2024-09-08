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
const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

if (numero === 100) return 'cien';
if (numero % 100 === 0) return centenas[Math.floor(numero / 100)];

return `${centenas[Math.floor(numero / 100)]} ${convertirDecenas(numero % 100)}`;
}

function convertirMiles(numero) {
if (numero < 1000) return convertirCentenas(numero);
if (numero === 1000) return 'mil';

return `${convertirCentenas(Math.floor(numero / 1000))} mil ${convertirCentenas(numero % 1000)}`;
}

function convertirMillones(numero) {
if (numero < 1000000) return convertirMiles(numero);

const millones = Math.floor(numero / 1000000);
const resto = numero % 1000000;

if (millones === 1) {
     return `un millón ${convertirMiles(resto)}`;
} else {
     return `${convertirCentenas(millones)} millones ${convertirMiles(resto)}`;
}
}

function convertirNumeroALetras(numero) {
if (numero < 0) return 'Número negativo no soportado';
if (numero < 1000) return convertirCentenas(numero);
if (numero < 1000000) return convertirMiles(numero);
if (numero < 1000000000) return convertirMillones(numero);
return 'Número fuera de rango';
}
   
 