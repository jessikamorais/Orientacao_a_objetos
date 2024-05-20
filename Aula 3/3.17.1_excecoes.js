//Exemplo 3.17.1
//Uso do "throw" para lançar exceções
try {
    throw new Error('Gerando um erro genérico!');
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}