module.exports = function Calculadora() {
    let valorAcumulado = 0; //privado

    this.pegarValorAcumulado = () =>  valorAcumulado; // público

    this.somar = (valor) => valorAcumulado += valor;

    this.subtrair = (valor) => valorAcumulado -= valor;

    this.multiplicar = (valor) => valorAcumulado *= valor;

    this.dividir = (valor) => valorAcumulado /= valor;


}