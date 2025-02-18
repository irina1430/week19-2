const postList = document.getElementById("postList");

const btn = document.getElementById("btn");

function createPost() {
  const postTitle = document.getElementById("postTitle").value;
  const postBody = document.getElementById("postBody").value;
  if (!postTitle || !postBody) {
    alert("Заполните все поля!");
    return;
  }
  const newPost = {
    title: postTitle,
    body: postBody,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      const listItem = document.createElement("li");
      const title = document.createElement("h3");
      title.textContent = data.title;
      const body = document.createElement("p");
      body.textContent = data.body;
      listItem.appendChild(title);
      listItem.appendChild(body);
      postList.appendChild(listItem);
      document.getElementById("postTitle").value = "";
      document.getElementById("postBody").value = "";
    })
    .catch((error) => {
      console.error("Ошибка при создании поста:", error);
    });
}
btn.addEventListener("click", createPost);
