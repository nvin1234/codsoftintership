document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for blog posts
    const posts = [
        { title: "First Post", content: "This is my first blog post." },
        { title: "Second Post", content: "This is my second blog post." },
        { title: "Third Post", content: "This is my third blog post." }
    ];

    const blogPosts = document.getElementById("blog-posts");

    // Loop through posts and create HTML elements for each
    posts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("blog-post");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        blogPosts.appendChild(postElement);
    });
});
