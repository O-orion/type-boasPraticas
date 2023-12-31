export function injectDom(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
