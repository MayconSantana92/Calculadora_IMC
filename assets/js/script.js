// Adicionar evento de clique ao botão "calcular"
document.getElementById("calcular").addEventListener("click", function () {
    // Obter os valores do peso e altura
    const weight = parseFloat(document.getElementById("weight").value);
    let height = document.getElementById("height").value;

    // Substituir vírgula por ponto para cálculos
    height = parseFloat(height.replace(',', '.'));

    // Verificar se os valores são válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Mostrar o indicador de loading
    const loading = document.getElementById("loading");
    const infos = document.getElementById("infos");
    infos.classList.add("hidden"); // Esconder o resultado anterior
    loading.classList.remove("hidden"); // Mostrar o loading

    // Simular tempo de processamento
    setTimeout(() => {
        // Calcular o IMC
        const imc = weight / (height * height);

        // Exibir o IMC com duas casas decimais e substituir ponto por vírgula
        document.getElementById("value").textContent = imc.toFixed(2).replace('.', ',');

        // Obter o elemento de descrição
        const description = document.getElementById("description").querySelector("span");

        // Definir a descrição com base no IMC
        if (imc < 18.5) {
            description.textContent = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            description.textContent = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            description.textContent = "Sobrepeso";
        } else {
            description.textContent = "Obesidade";
        }

        // Esconder o indicador de loading e exibir o resultado
        loading.classList.add("hidden");
        infos.classList.remove("hidden");
    }, 2000); // Atraso de 2 segundos para simular carregamento
});

// Lógica para inserir vírgula no campo de altura enquanto o usuário digita
document.getElementById("height").addEventListener("input", function (event) {
    let inputValue = event.target.value;

    // Remove caracteres inválidos
    inputValue = inputValue.replace(/[^0-9,]/g, '');

    // Substitui ponto por vírgula
    inputValue = inputValue.replace('.', ',');

    // Atualiza o valor do input com a vírgula
    event.target.value = inputValue;
});

