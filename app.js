

function buscar() {
    let section = document.getElementById("resultados");
    let searchBox = document.getElementById("search-box").value;

    if (!searchBox) {
        section.innerHTML = "<p>Nada foi encontrado. Tente novamente com outro termo.</p>"
        return
    }

    searchBox = searchBox.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let results = "";
    let nome = ""; 
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (nome.includes(searchBox) || descricao.includes(searchBox) || tags.includes(searchBox)) {
            results += `
                <div class="item-resultado">
                    <div class="item-head">
                        <img src="${dado.imagem}">
                        <h2>
                            <a href="#" target="_blank">${dado.nome}</a>
                        </h2>
                    </div>     
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
        if (!results) {
            results = "<p>Nada foi encontrado</p>"
        }
        section.innerHTML = results;
    }
}