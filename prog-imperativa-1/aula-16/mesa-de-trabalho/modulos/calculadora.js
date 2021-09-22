module.exports = function Calculadora(valores) {
    
    this.somar = function () {
        return valores.reduce((valorAcumulado, valorInicial) => valorAcumulado + valorInicial);
    },

    this.multiplicar = function () {
       return valores.reduce((valorAcumulado, valorInicial) => valorAcumulado * valorInicial);

    },
    
    this.subtrair = function () {
        return valores.reduce((valorAcumulado, valorInicial) => valorAcumulado - valorInicial);
    },
    
    this.dividir = function () {
        return valores.reduce((valorAcumulado, valorInicial) => valorAcumulado / valorInicial);
    }
    
}
