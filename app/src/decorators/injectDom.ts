export function injectDom(seletor: string) {
    return function(target:any, propertyKey: string) {
        const getter = function () {
            const elemento = document.querySelector(seletor)
            console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            return elemento
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }
}

/* 

export function injectDom(seletor: string) {

    return function(target:any, propertyKey: string) {

        console.log('Modificando o prototype ---')
        let elemento = HTMLElement;

        const getter = function () {

            if(!elemento) {
                elemento =  <HTMLElement>document.querySelector(seletor)
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            }

            return elemento
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
        )
    }
}

*/