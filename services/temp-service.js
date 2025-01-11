// CONSTANTES
import { UNITS } from '../constant';

// Fonction pour obtenir l'unité opposée
export function getOppositeUnit(unit) {
    return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

// Fonction pour convertir la température
export function convertTempTo(unit, value) {
    if (unit === UNITS.celcius) {
        return (value - 32) / 1.8;
    } else {
        return value * 1.8 + 32;
    }
}

// Fonction pour vérifier si la température est inférieure ou égale à zéro
export function isIceTemp(value, unit) {
    if (unit === UNITS.celcius) {
        return value <= 0;
    } else {
        return value <= 32;
    }
}
