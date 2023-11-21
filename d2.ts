class ContoCorrente {
  saldo: number;

  constructor(saldoIniziale: number = 0) {
    this.saldo = saldoIniziale;
  }

  versa(somma: number): void {
    this.saldo += somma;
  }

  preleva(somma: number): void {
    if (somma <= this.saldo) {
      this.saldo -= somma;
    } else {
      console.log("Fondi insufficienti");
    }
  }

  ottieniSaldo(): number {
    return this.saldo;
  }
}

class ContoMadre extends ContoCorrente {
  aggiungiInteresse(): void {
    const interesse = this.saldo * 0.1;
    this.saldo += interesse;
  }
}
const contoFiglio = new ContoCorrente();
const contoMadre = new ContoMadre();

contoFiglio.versa(100);
contoFiglio.preleva(30);

contoMadre.versa(500);
contoMadre.aggiungiInteresse();

console.log("Saldo conto figlio:", contoFiglio.ottieniSaldo());
console.log("Saldo conto madre:", contoMadre.ottieniSaldo());
