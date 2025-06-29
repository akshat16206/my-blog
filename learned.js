fetch("learned.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("learned-index");
    data.forEach(entry => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="learned/${entry.date}.html">${entry.date} — ${entry.title}</a>`;
      list.appendChild(li);
    });

    // Search
    document.getElementById("search-input").addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = data.filter(d =>
        d.date.includes(query) || d.title.toLowerCase().includes(query)
      );
      list.innerHTML = "";
      filtered.forEach(entry => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="learned/${entry.date}.html">${entry.date} — ${entry.title}</a>`;
        list.appendChild(li);
      });
    });
  });
