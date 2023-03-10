import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if ( this.constructor == Conta){
            throw new Error('Você não deve instanciar a conta!')
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        let taxa = 1
        return this._sacar(valor, taxa)
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

}