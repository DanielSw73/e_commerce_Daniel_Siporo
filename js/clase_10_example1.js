function estacion(mes, dia) {
    if ((mes == 9 && dia >= 21) || (mes >= 10 && mes <= 11) || (mes == 12 && dia <= 20)) return "Primavera";
    if ((mes == 12 && dia >= 21) || (mes >= 1 && mes <= 2) || (mes == 3 && dia <= 20)) return "Verano";
    if ((mes == 3 && dia >= 21) || (mes >= 4 && mes <= 5) || (mes == 6 && dia <= 20)) return "Otoño";
    if ((mes == 6 && dia >= 21) || (mes >= 7 && mes <= 8) || (mes == 9 && dia <= 20)) return "Invierno";
    return "Fecha inválida";
}

console.log(estacion(9, 22));
console.log(estacion(1, 15));
console.log(estacion(5, 10));
console.log(estacion(7, 30));
console.log(estacion(13, 1));
