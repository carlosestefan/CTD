module.exports = function Calculadora(valores, operacao) {
    
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

return operacao(valores);
