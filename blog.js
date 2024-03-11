// scripts.js
window.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});

async function fetchPosts() {
  try {
    const response = await fetch('/posts');
    const posts = await response.json();
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('article');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>${post.author}</small>
      `;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
}

