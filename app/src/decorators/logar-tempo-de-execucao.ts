
// Criando um decorator

export function logarTempoDeExecucao() {
    return function(
        target: any, // Função construtor da classe de classes estatica, não estatíca retorna o prototype
        propertyKey: string, //  nome do método que foi decorado
        descriptor: PropertyDescriptor // sabe tudo sobre o método que queremos executar, possui referência para o método original
    ) {
        const metodoOriginal = descriptor.value; // guardando o método original

        descriptor.value = function (...args: Array<any>) { // modificando a função original
            const t1 = performance.now();
            // chamando método original
            const retorno = metodoOriginal.apply(this,args)
            const t2 = performance.now();
            console.log(`MÉTODO: [${propertyKey}], tempo de execução: ${(t2 -t1)/1000} segundos!`)
            retorno
        }

        return descriptor;
    }
}

