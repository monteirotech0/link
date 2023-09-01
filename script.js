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

                const content = document.createElement("p");
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
