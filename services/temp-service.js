import { UNITS } from '../constant';

export function getOppositeUnit(unit) {
    return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

export function convertTempTo(unit, value) {
    if (unit === UNITS.celcius) {
        return (value - 32) / 1.8;
    } else {
        return value * 1.8 + 32;
    }
}

export function isIceTemp(value, unit) {
    if (unit === UNITS.celcius) {
        return value <= 0;
    } else {
        return value <= 32;
    }
}
