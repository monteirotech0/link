document.addEventListener("DOMContentLoaded", function () {
    fetch("./blog/posts.json")
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

    // Define o tempo de atraso em milissegundos (por exemplo, 5000ms = 5 segundos)
    const atrasoEmMilissegundos = 5000;

    // Função para redirecionar após o atraso
    
    function redirecionar() {

        if (!destino) {
            document.title = 'MonteiroTech'
            // Redireciona para um site padrão se nenhum destino for especificado
            //window.location.href = 'https://www.monteirotech.com.br';
            return;
        }

       
            // Carrega o arquivo JSON com os produtos
        fetch('produtos.json') // Carrega o arquivo JSON
            .then(response => response.json()) // Converte a resposta para JSON
            .then(data => {
                    // Encontra o produto com base no ID passado pelo destino
                    const produto = data.find(item => item.id.toString() === destino);
                    document.title = produto.descricao;
                    let imagem = 'img/monteirologo.jpg';

                    if (produto && produto.link) {
                        // Redireciona para o link do produto encontrado
                        window.location.href = produto.link;
                        imagem = produto.imagem;
                    } else {
                        document.title = 'MonteiroTech'
                        // Redireciona para um site padrão se o produto não for encontrado
                        //window.location.href = 'https://www.monteirotech.com';
                    }
                                            // Define a meta tag Open Graph para a imagem do produto
                    const ogImageTag = document.getElementById('og-image');
                    ogImageTag.content = imagem;
                })
                .catch(error => {
                    console.error('Erro ao carregar os produtos:', error);
                });
    }        
    // Define o atraso usando setTimeout
    setTimeout(redirecionar, atrasoEmMilissegundos);


            // Função para carregar e exibir a lista de produtos a partir do arquivo JSON
            function carregarProdutos() {
                fetch('produtos.json') // Carrega o arquivo JSON
                    .then(response => response.json()) // Converte a resposta para JSON
                    .then(data => {
                        const listaProdutos = document.getElementById('lista-produtos');
    
                        // Itera sobre os produtos e os exibe na página
                        data.forEach(produto => {
                            const listItem = document.createElement('li');
                            listItem.innerHTML = `
                                <a href="${produto.link}" target="_blank">
                                    <img src="${produto.imagem}" alt="#${produto.id} ${produto.descricao}">
                                    <h2>#${produto.id} ${produto.descricao}</h2>
                                </a>
                            `;
                            listaProdutos.appendChild(listItem);
                        });
                    })
                    .catch(error => {
                        console.error('Erro ao carregar os produtos:', error);
                    });
            }
    
            window.addEventListener('load', carregarProdutos);


        // Função para obter o valor do parâmetro da URL
        function obterParametroURL(nome) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(nome);
        }

        // Obtém o valor do parâmetro 'destino' da URL
        let destinotitle = obterParametroURL('lk');
        if (!destinotitle) {
            `<div>
                <h1>Estamos Carregando sua OFERTA..... ! </h1>
            </div>`
            return;
        }            