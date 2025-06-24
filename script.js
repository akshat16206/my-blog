let postsData = [];

function loadPosts(posts) {
  const postList = document.getElementById("post-list");
  const toc = document.getElementById("toc");
  postList.innerHTML = "";
  toc.innerHTML = "";

  posts.forEach((post, index) => {
    const id = `post-${index}`;
    const article = document.createElement("article");
    article.id = id;

    article.innerHTML = `
      <h3><a href="${post.link}">${post.title}</a></h3>
      <p>${post.description}</p>
    `;

    const tocItem = document.createElement("li");
    tocItem.innerHTML = `<a href="#${id}">${post.title}</a>`;

    postList.appendChild(article);
    toc.appendChild(tocItem);
  });
}

fetch("posts.json")
  .then((res) => res.json())
  .then((data) => {
    postsData = data;
    loadPosts(postsData);
  });

document.getElementById("search-input").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = postsData.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query)
  );
  loadPosts(filtered);
});
