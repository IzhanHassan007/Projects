const chapters = [
    "Chapter 1081: Blackbeard Appears",
    "Chapter 1082: Sabo's Truth",
    "Chapter 1083: Revolutionary Clash",
    "Chapter 1084: Luffy vs Kizaru",
  ];
  
  function login() {
    const username = document.getElementById('username').value;
    localStorage.setItem('user', username);
    document.getElementById('welcome-msg').innerText = `Welcome, ${username}!`;
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
  }
  
  function loadChapters() {
    const ul = document.getElementById("chapters");
    ul.innerHTML = "";
    chapters.forEach((title, index) => {
      const li = document.createElement("li");
      li.innerHTML = `${title} 
        <button onclick="bookmark(${index})">🔖</button>`;
      ul.appendChild(li);
    });
  }
  
  function bookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    bookmarks.push(chapters[index]);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    showBookmarks();
  }
  
  function showBookmarks() {
    const ul = document.getElementById("bookmarked-chapters");
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    ul.innerHTML = "";
    bookmarks.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }
  
  function addComment() {
    const comment = document.getElementById("comment").value;
    const ul = document.getElementById("comment-list");
    const li = document.createElement("li");
    li.textContent = comment;
    ul.appendChild(li);
    document.getElementById("comment").value = "";
  }
  
  function calculate() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").textContent = `Result: ${n1 + n2}`;
  }
  
  function searchChapters() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const ul = document.getElementById("chapters");
    ul.innerHTML = "";
    chapters
      .filter(ch => ch.toLowerCase().includes(query))
      .forEach((title, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${title} 
          <button onclick="bookmark(${index})">🔖</button>`;
        ul.appendChild(li);
      });
  }
  
  // Init
  window.onload = function () {
    loadChapters();
    showBookmarks();
    const user = localStorage.getItem("user");
    if (user) document.getElementById('welcome-msg').innerText = `Welcome, ${user}!`;
  };
  