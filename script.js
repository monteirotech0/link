document.addEventListener("DOMContentLoaded", function () {
    fetch("./posts.json")
        .then(response => response.json())
        .then(data => {
            const blogPosts = document.getElementById("blog-posts");

            data.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.classList.add("post");

                const title = document.createElement("h2");
                title.textContent = post.title;

                const content = document.createElement("div");
                content.textContent = post.content;

                postDiv.appendChild(title);
                postDiv.appendChild(content);
                blogPosts.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar os posts:", error);
        });
});


function mostrarOfertas() {
    document.getElementById('ofertas').style.display = 'block';
    document.getElementById('postagens').style.display = 'none';
}

function mostrarPostagens() {
    document.getElementById('ofertas').style.display = 'none';
    document.getElementById('postagens').style.display = 'block';
}


// Função para obter o valor do parâmetro da URL
function obterParametroURL(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

// Obtém o valor do parâmetro 'destino' da URL
let destino = obterParametroURL('lk');

function carregarProdutos() {
    console.log('Start carregarProdutos');
    if (destino) {
        document.getElementById('title_carregamento').content = 'Estamos Carregando sua OFERTA..... ! '
    }            

    fetch('produtos.json') // Carrega o arquivo JSON
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            const listaProdutos = document.getElementById('lista-produtos');
            console.log('Start listaProdutos');
            // Itera sobre os produtos e os exibe na página
            data.forEach(produto => {
                console.log('Start produto');
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <a href="${produto.link}" target="_blank">
                        <img src="${produto.imagem}" />
                        <h1>#${produto.id} ${produto.descricao}</h1>
                    </a>
                    
                `;
                listaProdutos.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
        });
}

setTimeout(carregarProdutos, 0);

function redirecionar() {

    if (!destino) {
        document.title = 'MonteiroTech'
        return;
    }

    fetch('produtos.json') // Carrega o arquivo JSON
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {

            const produto = data.find(item => item.id.toString() === destino);
            document.title = produto.descricao;

            if (produto && produto.link) {
               window.location.href = produto.link;
               document.getElementById('og-image').content = produto.imagem;
            } else {
                document.title = 'MonteiroTech'
                document.getElementById('og-image').content = 'img/monteirologo.jpg';
            }
        })
        .catch(error => {
        });
}        
setTimeout(redirecionar, 5000);
