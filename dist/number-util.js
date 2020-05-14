"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
var formatCurrency = function (number, fractionDigits) {
    var formatted = new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        currency: 'COP',
        minimumFractionDigits: fractionDigits,
    }).format(number);
    return "" + formatted;
};
exports.formatCurrency = formatCurrency;
