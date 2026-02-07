fetch('materi.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('materi-container');
    const tocList = document.getElementById('toc-list');

    data.materi.forEach(item => {
      // Buat section materi
      const section = document.createElement('section');
      section.id = item.id;
      section.innerHTML = `<h2>${item.judul}</h2>${item.konten}`;
      container.appendChild(section);

      // Buat daftar isi
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${item.id}`;
      a.innerText = item.judul;
      li.appendChild(a);
      tocList.appendChild(li);
    });
  });
