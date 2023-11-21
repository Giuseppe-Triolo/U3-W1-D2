var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContoCorrente = /** @class */ (function () {
    function ContoCorrente(saldoIniziale) {
        if (saldoIniziale === void 0) { saldoIniziale = 0; }
        this.saldo = saldoIniziale;
    }
    ContoCorrente.prototype.versa = function (somma) {
        this.saldo += somma;
    };
    ContoCorrente.prototype.preleva = function (somma) {
        if (somma <= this.saldo) {
            this.saldo -= somma;
        }
        else {
            console.log("Fondi insufficienti");
        }
    };
    ContoCorrente.prototype.ottieniSaldo = function () {
        return this.saldo;
    };
    return ContoCorrente;
}());
var ContoMadre = /** @class */ (function (_super) {
    __extends(ContoMadre, _super);
    function ContoMadre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContoMadre.prototype.aggiungiInteresse = function () {
        var interesse = this.saldo * 0.1;
        this.saldo += interesse;
    };
    return ContoMadre;
}(ContoCorrente));
// Utilizzo delle classi
var contoFiglio = new ContoCorrente();
var contoMadre = new ContoMadre();
contoFiglio.versa(100);
contoFiglio.preleva(30);
contoMadre.versa(500);
contoMadre.aggiungiInteresse();
console.log("Saldo conto figlio:", contoFiglio.ottieniSaldo());
console.log("Saldo conto madre:", contoMadre.ottieniSaldo());
