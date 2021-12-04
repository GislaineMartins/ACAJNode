export class Cliente{
    codigo;
    numeCartaoCredito;
    nome;

    get codigo(){
        return this.codigo;
    }

    set codigo(cod){
       this.codigo = cod;
    }

    get numeCartaoCredito(){
        return this.numeCartaoCredito
    }

    set numeCartaoCredito(numCat){
        this.numeCartaoCredito = numCat;
    }

    get nome(){
        return this.nome;
    }
    
    set nome(nome){
        this.nome = nome;
    }
}