"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var trabajador_1 = require("./trabajador");
var Programador = /** @class */ (function (_super) {
    __extends(Programador, _super);
    function Programador() {
        var _this = this;
        var persona = {
            nombre: 'Leonardo',
            apellido: 'Solano',
            edad: 30,
        };
        _this = _super.call(this, persona) || this;
        _this.saludar('programador');
        return _this;
    }
    return Programador;
}(trabajador_1.default));
exports.default = Programador;
new Programador();
//# sourceMappingURL=programador.js.map