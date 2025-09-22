async function fetchData() {
    const data = await fetch('апишка')
    const json = await data.json()
    
}
const container = document.getElementById("container")
container.innerHTML = `
<div class="card">
  <h2>${data.name}</h2>
  <p>Возраст: ${data.age}</p>
</div>
`

items.forEach((item) => {
    const div = document.createElement("div")
    div.className = "item"
    div.innerHTML = `
  <h3>${item.title}</h3>
  <p>${item.description}</p>
`
    container.appendChild(div)
})

function renderProfile(user) {
    return `
    <div class="profile">
      <h2>${user.name}</h2>
      <div class="contacts">
        <p>Email: ${user.contacts.email}</p>
        <p>Телефон: ${user.contacts.phone}</p>
      </div>
      <div class="skills">
        ${user.skills
            .map((skill) => `<span class="tag">${skill}</span>`)
            .join("")}
      </div>
    </div>
  `
}

function safeRender(data) {
    return `
    <div class="item">
      <h3>${data.title || "Без названия"}</h3>
      <p>${data.description || "Описание отсутствует"}</p>
      ${data.image ? `<img src="${data.image}" alt="${data.title}">` : ""}
    </div>
  `
}

{
    const trackCount = document.querySelectorAll('.track-item').length;
    document.getElementById('statsContainer').innerHTML = `<h4>Треков: ${trackCount}</h4>`;
}